import { atom, selector } from "recoil";
import { IToDo } from "../types/todo";

export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
}

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const todos = get(toDoState);
        const category = get(categoryState);

        return todos.filter((todo) => todo.category === category);
    },
});
