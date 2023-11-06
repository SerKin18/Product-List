import React, { useEffect, useState } from "react";

import "./App.css";
import { ProductList } from "../productList/ProductList";
import { Modal2 } from "../modal/modal";
import { ModalCard } from "../modalCard/ModalCard"
import { getData } from "../../api";
import { Spinner } from "../spinner/Spinner";
import { ModalCheap } from "../modalCheap/ModalCheap";


export function App() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [modal, setModal] = useState(false);
	const[cheapModal,setCheapModal]=useState(false)
	const [productBuy, setProductBuy] = useState({});
	const [cheap, setCheap] = useState({})

	useEffect(() => {
		setLoading(true);
		getData().then((data) => {
			setProducts(data);
			setLoading(false);
		});
	}, []);

	const toggleModal = () => {
		setModal(!modal);
	};
	const toggleModalCheap = () => {
		setCheapModal(!cheapModal);
	};

	const modalProduct = (id) => {
		const productItem = products.filter((item) => item.id === id);
		setProductBuy(productItem);
	};

	const cheapestProduct = () => {
		const cheap = products.reduce((a, b) => {
			return a.price < b.price ? a : b;
		});
		setCheap(cheap)
	};

	return (
		<div className="App">
			{loading ? (
				<Spinner />
			) : (
				<ProductList
					products={products}
					toggleModal={toggleModal}
					modalProduct={(id) => modalProduct(id)}
					toggleModalCheap={toggleModalCheap}
					cheapestProduct={cheapestProduct}
				/>
			)}
			
			<><Modal2 toggleModal={toggleModal} isOpen={modal }>
				<ModalCard productBuy={productBuy[0]}  toggleModal={toggleModal}/>
			</Modal2>
			<ModalCheap isOpen={cheapModal} cheapestProduct={cheap} toggleModalCheap={toggleModalCheap}/>
			</>
		</div>
	);
}
