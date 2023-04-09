import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Warpper = styled.div`
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 10px 10px;
    background-color: ${(props) => props.theme.cardColor};
`;

interface ICard {
    toDoId: number;
    toDoText: string;
    index: number;
}

const Card = ({ toDoId, toDoText, index }: ICard) => {
    return (
        <Draggable draggableId={String(toDoId)} index={index}>
            {(magic) => (
                <Warpper ref={magic.innerRef} {...magic.dragHandleProps} {...magic.draggableProps}>
                    {toDoText}
                </Warpper>
            )}
        </Draggable>
    );
};

export default React.memo(Card);
