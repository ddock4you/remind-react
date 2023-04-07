import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";

const CreateTodo = () => {
    const setTodos = useSetRecoilState(Todos);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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
