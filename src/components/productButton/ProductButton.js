import React from "react";
import style from "./ProductButton.module.css";

export const ProductButton = ({cheapestProduct,toggleModalCheap}) => {
const getCheapProduct=()=>{
	cheapestProduct()
	toggleModalCheap()
}
  return (
    <div className={style.btn}>
      <button className={style.btn_cheap} onClick={getCheapProduct}>Bay cheapest</button>
    </div>
  );
};
