import { useForm } from "react-hook-form";

function App() {
    interface IForm {
        email: string;
        firstName: string;
        lastName: string;
        password: string;
        password1: string;
        extraError?: string;
        toDo: string;
    }

    const { register, handleSubmit, setValue, formState, setError } = useForm<IForm>({
        defaultValues: {
            email: "@gmail.com",
        },
    });

    const onSubmit = (data: IForm) => {
        console.log(data);

        if (data.password !== data.password1) {
            setError(
                "password",
                {
                    message: "비밀번호가 일치하지 않음",
                },
                {
                    shouldFocus: true,
                }
            );
        }

        setValue("email", "");
    };

    console.log(formState.errors);
    return (
        <div className="App">
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ display: "flex", flexDirection: "column", width: "300px" }}
            >
                <input
                    type="email"
                    {...register("email", {
                        required: "email을 입력해주세요.",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Only naver.com emails allowed",
                        },
                    })}
                    placeholder="email"
                />
                <span>{formState.errors.email?.message}</span>
                <input type="text" {...register("firstName")} placeholder="firstName" />
                <input type="text" {...register("lastName")} placeholder="lastName" />
                <input
                    type="text"
                    {...register("password", {
                        required: "password를 입력하세요.",
                        minLength: {
                            value: 5,
                            message: "비밀번호 최소 자릿수는 5입니다.",
                        },
                    })}
                    placeholder="password"
                />
                <span>{formState.errors.password?.message}</span>
                <input type="text" {...register("password1")} placeholder="password1" />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default App;
