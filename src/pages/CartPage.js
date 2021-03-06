import React from 'react';
import '../css/cart.css'
import {Col, Row} from "antd";
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import products from "../__mock__/products";
import path from "../contants/path";


const CartPage = () => {
	let {id} = useParams();
	const [items, setItems] = useState(JSON.parse(localStorage.getItem('products'))??[]);

	useEffect(() => {
		if(!!id) addToCart(id)
	},[id])

	const addToCart = (idItem) => {
		const jsonLocalItems = localStorage.getItem('products')
		const product = products.find(x=>x.id === idItem);
		if(!product) return;
		const newItem = {id: product.id, img: product.img, name: product.name, price: product.price, quantity: 1}
		let update
		if(!!jsonLocalItems){
			let localItems = JSON.parse(jsonLocalItems)
			let exits = localItems.find(x=>x.id === idItem)
			if(!!exits){
				exits.quantity += 1
				update = localItems.map(el=>el.id === idItem ? el = exits : el)
			} else {
				update = [...localItems, newItem]

			}
		}
		else {
			update = [newItem]
		}
		localStorage.setItem('products',
			JSON.stringify(update))
		setItems(update)
		id = ''
	}

	const Delete = () =>{
		localStorage.setItem('products',JSON.stringify([]))
		setItems([])
	}

	const deleteItem = (id) => {
		const itemsDeleted = items.filter(x=>x.id !== id)
		localStorage.setItem('products',JSON.stringify(itemsDeleted))
		setItems(itemsDeleted)
	}

	const onChangeQuantity = (idItem, type) => {
		let product = items.find(x=>x.id === idItem)
		if(type === 'minus'){
			if (product.quantity === 1){
				product = undefined
			} else {
				product.quantity -= 1
			}
		} else {
			product.quantity += 1

		}
		let updateProducts
		if(!!product) {
			updateProducts = items.map(x=>x.id === idItem ? x = product: x)
		} else {
			updateProducts = items.filter(x=>x.id !== idItem)
		}
		localStorage.setItem('products',JSON.stringify(updateProducts))
		setItems(updateProducts)
	}
	const oderBill = () => {
		navigate(path.ITEM )
	}
	let navigate = useNavigate()
	return (
		<div>
			<div className={'content'}>
				<ul>
					<li><a href={'/#'}>Trang ch???</a></li>
					<li>Gi??? h??ng</li>
				</ul>
			</div>
			<Row>
				<Col lg={24}>
					<div className={'table-cart'}>
						<table >
							<tbody>
							<tr>
								<th className={'product_remove'}>ID</th>
								<th className={'product_remove'}>H??nh ???nh</th>
								<th className={'product_remove'}>S???n ph???m</th>
								<th className={'product_remove'}>Gi??</th>
								<th className={'product_remove'}>S??? l?????ng</th>
								<th className={'product_remove'}>X??a b???</th>
							</tr>
							{items?.map((el)=>(
								<tr key={el.id}>
									<td>{el.id}</td>
									<td><a><img src={el?.img} alt={''}/></a></td>
									<td><a>{el?.name}</a></td>
									<td>{el?.price}</td>
									<td>
										<button
											style={{cursor: "pointer"}}
											onClick={()=>onChangeQuantity(el.id, 'minus',el.price)}>
											-
										</button>
										<button style={{cursor: "unset"}}>{el.quantity}</button>
										<button
											style={{cursor: "pointer"}}
											onClick={()=>onChangeQuantity(el.id, 'plus',el.price)}>
										+</button>
									</td>
									<td><button onClick={()=>deleteItem(el.id)} style={{cursor: "pointer"}}>Xo?? b???
									</button></td>
								</tr>
							))}
							</tbody>

						</table>
					</div>
				</Col>
			</Row>
			<div className={'cart-bill'}>
				<div className="coupon_code right">
					<h3>Ho?? ????n</h3>
					<div className="coupon_inner">

						<table className={'table-bill'}>
							<tbody className={'tb-bill'}>
							<tr className={'tr-bill'}>
								<td>S???n ph???m</td>
								<td>????n gi??</td>
								<td>S??? l?????ng</td>
							</tr>
							{
								items?.map((el)=>(

											<tr className={'tr-bill'} key={el.id}>
												<td>{el?.name}</td>
												<td>{el?.price}</td>
												<td>{el.quantity}</td>
											</tr>
								))
							}
							</tbody>
						</table>
						<div className="cart_subtotal">
							<p>T???ng thanh to??n</p>
							{items.length > 0 &&(
								<h1>{`T???ng thanh to??n: ${items.map(item => 
									({price: item.price, quantity: item.quantity}))
									.reduce((prev, next) => 
									{return prev + parseInt(next.price) * next.quantity}, 0)}`}</h1>
							)}
						</div>

					</div>

							<div className="cart_submit">
								<button type="submit" onClick={()=>

									oderBill()}>Thanh to??n</button>
							</div>

				</div>
			</div>
			<div className="cart_submit">
				<button type="submit" onClick={()=>Delete()}>Xo?? t???t c???</button>
			</div>

		</div>
	);
};

export default CartPage;