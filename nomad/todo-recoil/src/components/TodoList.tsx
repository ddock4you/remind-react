import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector } from "../atoms/atom";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";

const TodoList = () => {
    const todos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);

    const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
        const { value } = e.currentTarget;
        setCategory(value as Categories);
    };

    return (
        <div>
            <h1>To Dos</h1>
            <select value={category} onInput={onInput}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            <CreateTodo />
            <hr />
            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} {...todo}></Todo>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
