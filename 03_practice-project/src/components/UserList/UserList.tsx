import React, { Fragment } from "react";
import styled from "styled-components";
import ContentBackground from "../UI/ContentBackground";
import UserListItem from "./UserListItem";
import { UserListProp } from "../../types/user";

const List = styled.ul``;

const UserList = ({
    list,
    removeListItem,
}: {
    list: UserListProp[];
    removeListItem: (id: string) => void;
}) => {
    return (
        <ContentBackground>
            {list.length !== 0 && (
                <List>
                    {list.map(({ id, username, age }: UserListProp) => {
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
            )}
        </ContentBackground>
    );
};

export default UserList;
