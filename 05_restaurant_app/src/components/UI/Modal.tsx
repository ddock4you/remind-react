import React, { Fragment } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

const StyledModal = styled.div`
    & {
        position: fixed;
        top: 20vh;
        left: 5%;
        width: 90%;
        background-color: white;
        padding: 1rem;
        border-radius: 14px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        z-index: 30;
        animation: slide-down 300ms ease-out forwards;
    }

    @media (min-width: 768px) {
        & {
            width: 40rem;
            left: calc(50% - 20rem);
        }
    }

    @keyframes slide-down {
        from {
            opacity: 0;
            transform: translateY(-3rem);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const Backdrop = styled.div`
    & {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 20;
        background-color: rgba(0, 0, 0, 0.75);
    }
`;

interface ModalProp {
    hideModal: () => void;
    children: React.ReactNode;
}

const ModalOverlay = ({ hideModal, children }: ModalProp) => {
    return (
        <Fragment>
            <Backdrop onClick={hideModal} />
            <StyledModal>
                <div className="content">{children}</div>
            </StyledModal>
        </Fragment>
    );
};

const portalElement = document.querySelector("#overlays");

const Modal = ({ hideModal, children }: ModalProp) => {
    return ReactDom.createPortal(
        <ModalOverlay hideModal={hideModal}>{children}</ModalOverlay>,
        portalElement as HTMLDivElement
    );
};

export default Modal;
