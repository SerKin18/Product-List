import React from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";

const portal = document.getElementById("modal");
export const Modal2 = ({ isOpen, children, toggleModal }) => {
  return isOpen
    ? ReactDOM.createPortal(
        <>
          <div className={style.modal_window} onClick={toggleModal}></div>
          {children}
        </>,
        portal
      )
    : null;
};
