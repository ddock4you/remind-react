import React from "react";
import styled from "styled-components";

const ModalBody = styled.div`
    & {
        display: ${({ isShow }) => (isShow ? "block" : "none")};
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }

    &.modal--show {
        display: block;
    }

    & .blackout {
        width: 100%;
        height: 100%;
    }

    & .modal__content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 500px;
        overflow: hidden;
        background-color: #fff;
        border-radius: 20px;
    }

    & .modal__header {
        padding: 20px;
        background-color: purple;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
    }

    & .modal__body {
        padding: 20px;
        min-height: 200px;
    }

    & .modal__footer {
        display: flex;
        justify-content: flex-end;
        padding: 20px;
    }

    & .modal__footer button {
        padding: 5px 10px;
        background-color: purple;
        border: none;
        font-weight: 700;
        color: #fff;
        cursor: pointer;
    }
`;

const Modal = ({ modalOption: { isShow, headMessage, contentMessage }, setModalOption }) => {
    const onClick = () => {
        setModalOption({ isModal: false, headMessage: null, ContentMessage: null });
    };

    return (
        <ModalBody isShow={isShow}>
            <div className="blackout"></div>
            <div className="modal__content">
                <header className="modal__header">{headMessage}</header>
                <div className="modal__body">{contentMessage}</div>
                <footer className="modal__footer">
                    <button onClick={onClick}>닫기</button>
                </footer>
            </div>
        </ModalBody>
    );
};

export default Modal;
