import styled from "styled-components";
import Board from "../components/Board";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "../atoms/todo";

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Boards = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 10px;
`;

const Main = () => {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = ({ destination, draggableId, source }: DropResult) => {
        if (!destination) return;
        console.log({ destination, draggableId, source });
        if (destination?.droppableId === source.droppableId) {
            setToDos((oldToDos) => {
                const boardcopy = [...oldToDos[source.droppableId]];
                const target = boardcopy[source.index];
                boardcopy.splice(source.index, 1);
                boardcopy.splice(destination.index, 0, target);
                return {
                    ...oldToDos,
                    [source.droppableId]: boardcopy,
                };
            });
        } else {
            setToDos((oldToDos) => {
                const sourceBoard = [...oldToDos[source.droppableId]];
                const destinationBoard = [...oldToDos[destination.droppableId]];
                const target = sourceBoard[source.index];
                sourceBoard.splice(source.index, 1);
                destinationBoard.splice(destination.index, 0, target);
                return {
                    ...oldToDos,
                    [source.droppableId]: sourceBoard,
                    [destination.droppableId]: destinationBoard,
                };
            });
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Boards>
                    {Object.keys(toDos).map((boardId) => (
                        <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
                    ))}
                </Boards>
            </Wrapper>
        </DragDropContext>
    );
};

export default Main;
