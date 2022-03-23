import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
    & {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        height: 40px;
    }

    & p {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 0 10px;
        border: 1px solid #ccc;
    }

    & button {
        flex-shrink: 0;
        width: 40px;
        height: 100%;
        margin-left: 10px;
        border: none;
        background-color: lightblue;
        cursor: pointer;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

const UserListItem = ({ username, age, id, removeListItem }) => {
    const onClickListItem = () => {
        removeListItem(id);
    };

    return (
        <ListItem>
            <p>{`${username} (${age})`}</p>
            <button onClick={onClickListItem}>삭제</button>
        </ListItem>
    );
};

export default UserListItem;
