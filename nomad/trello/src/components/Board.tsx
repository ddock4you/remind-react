import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from "./Card";
import { useForm } from "react-hook-form";
import { toDoState } from "../atoms/todo";
import { useSetRecoilState } from "recoil";
import { IToDo } from "../types/todo";

interface IAreaProps {
    isDraggingFromThis: boolean;
    isDraggingOver: boolean;
}

interface IBoardProps {
    toDos: IToDo[];
    boardId: string;
}

const Wrapper = styled.div`
    width: 300px;
    padding: 20px 10px;
    padding-top: 10px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 300px;
`;

const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 18px;
`;

const Area = styled.div<IAreaProps>`
    background-color: ${(props) =>
        props.isDraggingOver ? "#dfe6e9" : props.isDraggingFromThis ? "#b2bec3" : "transparent"};
    flex-grow: 1;
    transition: background-color 0.3s ease-in-out;
    padding: 20px;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    input {
        font-size: 16px;
        border: 0;
        background-color: white;
        width: 80%;
        padding: 10px;
        border-radius: 5px;
        text-align: center;
        margin: 0 auto;
    }
`;

interface IToDoProp {
    toDo: string;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
    const { register, handleSubmit, setValue } = useForm<IToDoProp>();
    const setTodoState = useSetRecoilState(toDoState);
    const onSubmit = ({ toDo }: IToDoProp) => {
        const newToDo = {
            id: Date.now(),
            text: toDo,
        };
        setTodoState((oldToDos) => {
            return {
                ...oldToDos,
                [boardId]: [...oldToDos[boardId], newToDo],
            };
        });
        // setTodoState();
        setValue("toDo", "");
    };

    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder={`${boardId} 메모 입력`}
                    {...register("toDo", {
                        required: true,
                    })}
                />
            </Form>
            <Droppable droppableId={boardId}>
                {(magic, info) => (
                    <Area
                        ref={magic.innerRef}
                        {...magic.droppableProps}
                        isDraggingOver={info.isDraggingOver}
                        isDraggingFromThis={Boolean(info.draggingFromThisWith)}
                    >
                        {toDos.map((toDo, index) => (
                            <Card
                                key={toDo.id}
                                toDoId={toDo.id}
                                toDoText={toDo.text}
                                index={index}
                            />
                        ))}
                        {magic.placeholder}
                    </Area>
                )}
            </Droppable>
        </Wrapper>
    );
};

export default Board;
