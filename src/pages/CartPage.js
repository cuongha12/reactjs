import React from 'react';
import '../css/cart.css'
import {Col, Row} from "antd";
import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import products from "../__mock__/products";

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

	return (
		<div>
			<div className={'content'}>
				<ul>
					<li><a href={'/#'}>Trang chủ</a></li>
					<li>Giỏ hàng</li>
				</ul>
			</div>
			<Row>
				<Col lg={24}>
					<div className={'table-cart'}>
						<table >
							<tbody>
							<tr>
								<th className={'product_remove'}>ID</th>
								<th className={'product_remove'}>Hình ảnh</th>
								<th className={'product_remove'}>Sản phẩm</th>
								<th className={'product_remove'}>Giá</th>
								<th className={'product_remove'}>Số lượng</th>
								<th className={'product_remove'}>Xóa bỏ</th>
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
											onClick={()=>onChangeQuantity(el.id, 'plus',el.price)}>
											+
										</button>
										<button style={{cursor: "unset"}}>{el.quantity}</button>
										<button
											style={{cursor: "pointer"}}
											onClick={()=>onChangeQuantity(el.id, 'minus',el.price)}>
										-</button>
									</td>
									<td><button onClick={()=>deleteItem(el.id)} style={{cursor: "pointer"}}>Xoá bỏ
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
					<h3>Hoá đơn</h3>
					<div className="coupon_inner">
						{
							items?.map((el)=>(
								<div className="cart_subtotal">
									<p>tên sản phẩm</p>
									<p className="cart_amount">{el?.name}</p>
								</div>

							))
						}
						<div className="cart_subtotal">
							<p>Tổng thanh toán</p>
							{items.length > 0 &&(
								<h1>{`Tổng thanh toán: ${items.map(item =>
									({price: item.price, quantity: item.quantity}))
									.reduce((prev, next) => {
										return prev + parseInt(next.price) * next.quantity
									}, 0)
								}`}</h1>
							)}
						</div>

					</div>
					<div className="cart_submit">
						<button type="submit" >Thanh toán</button>
					</div>
				</div>
			</div>


			<div className="cart_submit">
				<button type="submit" >Đặt hàng</button>

			</div>
			<div className="cart_submit">
				<button type="submit" onClick={()=>Delete()}>Xoá tất cả</button>
			</div>

		</div>
	);
};

export default CartPage;