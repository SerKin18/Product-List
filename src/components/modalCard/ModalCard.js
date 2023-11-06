import React from "react";
import style from "./ModalCard.module.css";
import { ModalInput } from "../modalInput/ModalInput";

export const ModalCard = ({ productBuy, toggleModal, children }) => {
	const product = productBuy;
	console.log(product);

	return (
		<div className={style.modal_body}>
			<div className={style.subTitle_modal}>{product.category}</div>
			<div className={style.title_modal}>{product.name}</div>
			<div className={style.price_modal}>
				<span>{product.price}</span>

			</div>
			{children}
			<ModalInput toggleModal={toggleModal} />
		</div>
	);
};
