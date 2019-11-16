import express from "express";
import path from "path";
import Data from "../models/Data";
import parseErrors from "../utils/parseErrors";

const mongoose = require("mongoose");
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");

const router = express.Router();

const MONGODB_URI = `mongodb://mr-sheph:comp7082@ds061621.mlab.com:61621/sheph-db`;

mongoose
  .connect(process.env.MONGODB_URI || MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => console.error(err));

const conn = mongoose.connection;

let gfs;

conn.once("open", () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

const storage = new GridFsStorage({
  url: MONGODB_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        // const filename = buf.toString("hex") + path.extname(file.originalname);
        const filename = file.originalname;
        const fileInfo = {
          filename,
          bucketName: "uploads"
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });

router.get("/files", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "no files exist"
      });
    }

    // files exist
    return res.json(files);
  });
});

router.get("/files/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file) {
      return res.status(404).json({ err: "no file exist" });
    }
    return res.json(file);
  });
});

router.get("/image/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file) {
      return res.status(404).json({ err: "no file exist" });
    }
    // Check if image
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      // Read output to browser
      const readStream = gfs.createReadStream(file.filename);
      readStream.pipe(res);
    } else {
      res.status(404).json({
        err: "not an image"
      });
    }
  });
});

router.post("/add", upload.single("file"), (req, res) => {
  console.log(JSON.stringify(req.body));
  const {
    category,
    description,
    email,
    name,
    lastSeenDateTime,
    lastSeenLocation,
    incidentDate,
    incidentTime,
    incidentLocation
  } = req.body;

  const info = new Data({
    category,
    description,
    name,
    lastSeenDateTime,
    lastSeenLocation,
    incidentDate,
    incidentTime,
    incidentLocation
  });

  info
    .save()
    .then(record => res.status(200).json({ uploaded: record }))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));

  gfs.files.findOneAndUpdate(
    { filename: req.body.filename },
    { $set: { data: info } },
    { upsert: true },
    (err, doc) => {
      if (err) console.error(err.error);
      console.log(doc);
    }
  );

  // axios.post(email)
});

export default router;
