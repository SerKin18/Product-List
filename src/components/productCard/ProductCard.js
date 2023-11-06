import React from "react";
import style from "./ProductCard.module.css";

export const ProductCard = ({ name, category, price, onClick, id }) => {
	return (
		<div className={style.product_card__body} key={id}>
			<div>
				<div className={style.header_subTittle}>{category}</div>
				<div className={style.header_tittle}>{name}</div>
			</div>
			<div className={style.footer_price}>
				<span>{price}</span>
				<button
					type="button"
					className={style.footer_button}
					onClick={() => onClick(id)}
				>
					buy
				</button>
			</div>
		</div>
	);
};
