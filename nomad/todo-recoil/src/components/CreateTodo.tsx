import { useRecoilValue, useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { categoryState, toDoState } from "../atoms/atom";
import { IToDo } from "../types/todo";

interface Todo {
    toDo: string;
}

const CreateTodo = () => {
    const setTodos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const { register, handleSubmit, setValue } = useForm<Todo>();
    const onSubmit = ({ toDo }: Todo) => {
        const newTodo: IToDo = {
            id: Date.now(),
            text: toDo,
            category,
        };
        setTodos((prev) => [...prev, newTodo]);
        setValue("toDo", "");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                {...register("toDo", {
                    required: "todo 내용을 입력해주세요.",
                })}
                placeholder="todo 내용 입력"
            />
            <button type="submit">추가</button>
        </form>
    );
};

export default CreateTodo;
