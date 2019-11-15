import axios from "axios";

export default {
    entry: {
        addEntry: (entry) => axios.post('/api/auth', { entry }).then(res => res.data.entry)
    }
}