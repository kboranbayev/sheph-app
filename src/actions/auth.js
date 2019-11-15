import { ENTRY_ADDED } from "../types";
import api from "../api";

export const addedEntry = (entry) => ({
    type: ENTRY_ADDED,
    entry
})

export const addEntry = data => dispatch =>
    api.entry.addEntry(data).then(entry => { console.log(entry); dispatch(addedEntry(entry)); });