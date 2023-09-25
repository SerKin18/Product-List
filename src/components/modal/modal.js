import React, { useState } from "react";
import style from "./Modal.module.css";

export const Modal = ({ toggleModal, children }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [numberDirty, setNumberDirty] = useState(false);
  const [nameError, setNameError] = useState("This field in required");
  const [numberError, setNumberError] = useState("This field in required");

  const blurHandler = (e) => {
    if (e.target.name === "name") {
      // inputNameClassStyle.style.border = " 1px solid #e43f3f";
      return setNameDirty(true);
    }
    if (e.target.name === "number") {
      // inputNumberClassStyle.style.border = " 1px solid #e43f3f";
      return setNumberDirty(true);
    }
  };
  const nameHandler = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
    if (typeof e.target.value == number) {
      setNameError("Only letters allowed");
    } else {
      setNameError("");
    }
  };
  const numberHandler = (e) => {
    setNumber(e.target.value);
    if (typeof Number(e.target.value) === "string") {
      setNumberError("Only numbers allowed");
    }
    if (e.target.value.length < 12 || e.target.value.length > 12) {
      setNumberError("Should contain 12 characters");
    } else {
      setNumberError("");
    }
  };

  // let inputClass = nameDirty?'style.input_modal_false':'style.input_modal'
  return (
    <>
      <div className={style.modal_window} onClick={toggleModal}></div>
      <div className={style.modal_body}>
        {children}
        <form action="#" className={style.form_modal}>
          <input
            id="input-name"
            onChange={(e) => nameHandler(e)}
            onBlur={(e) => blurHandler(e)}
            type="text"
            name="name"
				value={name}
            placeholder="Name"
            className={style.input_modal}
          ></input>
          {nameDirty && nameError && (
            <div style={{ color: "red", textAlign: "start" }}>{nameError}</div>
          )}
          <input
            id="input-number"
            onChange={(e) => numberHandler(e)}
            onBlur={(e) => blurHandler(e)}
            type="number"
            name="number"
            placeholder="Number"
            className={style.input_modal}
          ></input>
          {numberDirty && numberError && (
            <div style={{ color: "red", textAlign: "start" }}>
              {numberError}
            </div>
          )}
          <button
            type="submit"
            className={style.button_modal}
            onClick={toggleModal}
          >
            order
          </button>
        </form>
      </div>
    </>
  );
};