import { Fragment, ReactNode } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";
import { ModalClose } from "../../types/ui";

const Backdrop = (props: { onClose: ModalClose }) => {
    return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props: { children: ReactNode }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal = (props: { onClose: ModalClose; children: ReactNode }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
};

export default Modal;
