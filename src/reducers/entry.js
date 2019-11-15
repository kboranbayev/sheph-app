import { ENTRY_ADDED } from "../types";

export default function entry(state = {}, action = {}) {
    switch (action.type) {
        case ENTRY_ADDED:
            return action.entry;
        default:
            return state;
    }
}