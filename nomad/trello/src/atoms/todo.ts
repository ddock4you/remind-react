import { atom } from "recoil";
import { IToDoState } from "../types/todo";

export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        "To Do": [
            { id: 354635, text: "aaaa" },
            { id: 354634, text: "bbbbb" },
        ],
        Doing: [{ id: 55646, text: "cccc" }],
        Done: [],
    },
});
