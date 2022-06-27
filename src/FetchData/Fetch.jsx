import React, { useEffect } from 'react';
import { useState } from 'react';
import './fetch.css';
const Fetch = () => {
	const [products, setProducts] = useState([]);
	// const [showMore, setShowMore] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const datas = async () => {
			const items = await fetch('https://fakestoreapi.com/products');
			const data = await items.json();
			setProducts(data);
			console.log(data);
		};
		datas();
		setLoading(false);
	}, []);

	// add new product
	useEffect(() => {
		const addNewProduts = async () => {
			const addNew = fetch('https://fakestoreapi.com/products', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title: 'test product',
					price: 13.5,
					description: 'lorem ipsum set',
					image: 'https://i.pravatar.cc',
					category: 'electronic',
				}),
			});
			const add = await addNew.json();
			setProducts(add);
		};
		addNewProduts();
	}, []);

	return (
		<>
			{loading && <h1>Loading...</h1>}
			<div className="layout">
				{products.map((product) => {
					return (
						<div className="card" key={product.id}>
							<img src={product.image} alt="" />
							<h4>{product.title}</h4>
							<p>{product.price}</p>

							{/* <p className="description">
							{showMore
								? `${product.description}`
								: `${product.description.subString(0, 50)}`}
							<button onClick={() => setShowMore(!showMore)}>
								{showMore ? 'Show less' : 'Show more'}
							</button>
						</p> */}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Fetch;
