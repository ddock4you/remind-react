import React from "react";
import styled from "styled-components";
import ContentBackground from "../UI/ContentBackground";
import UserListItem from "./UserListItem";

const List = styled.ul``;

const UserList = ({ list, removeListItem }) => {
    return (
        list.length !== 0 && (
            <ContentBackground>
                <List>
                    {list.map(({ id, username, age }) => {
                        return (
                            <UserListItem
                                key={id}
                                id={id}
                                username={username}
                                age={age}
                                removeListItem={removeListItem}
                            />
                        );
                    })}
                </List>
            </ContentBackground>
        )
    );
};

export default UserList;
