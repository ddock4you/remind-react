import { useSetRecoilState } from "recoil";
import { IToDo } from "../types/todo";
import { Categories, toDoState } from "../atoms/atom";

const Todo = ({ text, id, category }: IToDo) => {
    const setTodos = useSetRecoilState(toDoState);

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = e;

        setTodos((prev) => {
            const index = prev.findIndex((todo) => todo.id === id);
            const first = prev.slice(0, index);
            const end = prev.slice(index + 1, prev.length);
            const newTodo: IToDo = {
                id: prev[index].id,
                text: prev[index].text,
                category: name as Categories,
            };

            return [...first, newTodo, ...end];
        });
    };

    return (
        <li>
            <span>{text}</span>
            {category !== Categories.DOING && (
                <button name={Categories.DOING} onClick={onClick}>
                    Doing
                </button>
            )}
            {category !== Categories.TO_DO && (
                <button name={Categories.TO_DO} onClick={onClick}>
                    To Do
                </button>
            )}
            {category !== Categories.DONE && (
                <button name={Categories.DONE} onClick={onClick}>
                    Done
                </button>
            )}
        </li>
    );
};

export default Todo;
