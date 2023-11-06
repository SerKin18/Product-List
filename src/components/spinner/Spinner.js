import React from "react";
import style from"./Spinner.module.css";
export const Spinner = () => {
  return (
    <div className={style.circleSpinnerRolling}>
      <div className={style.circle}>
        <div></div>
      </div>
    </div>
  );
};
