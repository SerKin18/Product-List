import React from "react";
import style from "./ProductList.module.css";
import { ProductButton } from "../productButton/ProductButton";
import { ProductCard } from "../productCard/ProductCard";

export const ProductList = ({ products, toggleModal, modalProduct,toggleModalCheap,cheapestProduct}) => {
	if (!products?.length) {
		return <h3>List is empty</h3>;
	}

	function onClick(id) {
		modalProduct(id)
		toggleModal()
	}
	return (
		<ul className={style.product_list}>
			{products.map((item,i) => {
				return (
					<li key={i}>
						<ProductCard
							name={item.name}
							category={item.category}
							price={item.price}
							id={item.id}
							onClick={onClick}
						/>
					</li>
				);
			})}
			<ProductButton cheapestProduct={cheapestProduct} toggleModalCheap={toggleModalCheap} />
		</ul>
	);
};
