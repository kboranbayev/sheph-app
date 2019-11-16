import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
      unique: true
    },
    description: {
      type: String
    },
    category: {
      type: String,
      required: true
    },
    lastSeenDateTime: {
      type: String
    },
    lastSeenLocation: {
      type: String
    },
    incidentDate: {
      type: String
    },
    incidentTime: {
      type: String
    },
    incidentLocation: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("data", schema);
