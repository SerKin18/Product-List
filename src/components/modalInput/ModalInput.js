import React, { useState } from "react";
import style from "./ModalInput.module.css";
import Input from "../input/input";

export const ModalInput = ({ toggleModal }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [numberDirty, setNumberDirty] = useState(false);
  const [nameError, setNameError] = useState("This field in required");
  const [numberError, setNumberError] = useState("This field in required");
  const [nameSuccess, setNameSuccess] = useState(false);
  const [numberSuccess, setNumberSuccess] = useState(false);

  const blurHandler = (e) => {
    if (e.target.name === "Name") {
      return setNameDirty(true);
    }
    if (e.target.name === "Number") {
      return setNumberDirty(true);
    }
  };
  const nameHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === " " || e.target.value.search(/\d/) !== -1) {
      setNameDirty(true);
      setNameError("Only letters allowed");
    } else {
      setName(e.target.value);
      setNameError("");
      setNameSuccess(true);
      setNameDirty(false);
    }
  };
  const numberHandler = (e) => {
    if (e.target.value !== "" || " ") {
      setNumber(e.target.value);
    }
    if (e.target.value.search(/\D/) !== -1) {
      setNumberError("Only numbers allowed");
    }
    if (e.target.value.length < 12 || e.target.value.length > 12) {
      setNumberError("Should contain 12 characters");
    } else {
      setNumberError("");
      setNumberSuccess(true);
      setNumberDirty(false);
    }
  };

  const closeOrder = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      nameDirty &&
      numberDirty &&
      nameError === "" &&
      numberError === ""
    ) {
      toggleModal();
      console.log(`name: ${name},number:${number}`);
    } else {
      setNameDirty(true);
      setNumberDirty(true);
    }
  };
  const styleError = { color: "red", textAlign: "start" };

  return (
    <>
      <form action="#" className={style.form_modal}>
        <div className="input-field">
          <Input
            isError={nameDirty}
            isSuccess={nameSuccess}
            onChange={(e) => nameHandler(e)}
            onBlur={(e) => blurHandler(e)}
            type="text"
            name="Name"
            value={name}
          />
          {nameDirty && nameError && <div style={styleError}>{nameError}</div>}
        </div>
        <div className="input-field">
          <Input
            isError={numberDirty}
            isSuccess={numberSuccess}
            onChange={(e) => numberHandler(e)}
            onBlur={(e) => blurHandler(e)}
            type="number"
            name="Number"
            value={number}
          />
          {/* <input
            id="input-number"
            onChange={(e) => numberHandler(e)}
            onBlur={(e) => blurHandler(e)}
            type="number"
            name="number"
            value={number}
            placeholder="Number"
            className={
              numberDirty && numberError
                ? style.input_modal_false
                : style.input_modal
            }
          ></input> */}
          {/* <span className={style.escape_input}></span> */}
          {numberDirty && numberError && (
            <div style={styleError}>{numberError}</div>
          )}
        </div>
        <button
          type="submit"
          className={style.button_modal}
          onClick={(e) => closeOrder(e)}
        >
          order
          <i className={style.arrow_right}></i>
        </button>
      </form>
    </>
  );
};
