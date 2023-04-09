export interface IToDo {
    id: number;
    text: string;
}

export interface IToDoState {
    [key: string]: IToDo[];
}
