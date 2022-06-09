import React from 'react';
import '../css/cart.css'
import {Col, Row} from "antd";
import {devices} from "../components/DealInDay";
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

	const deLete = (idItem) =>{
		console.log('xxxxxxx')
		const deleteProduct = products.filter(x=>x.id === idItem);
		localStorage.setItem('products', JSON.stringify(deleteProduct))
		console.log(deleteProduct)
	}
	const addtoCart = () =>{

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
									<td><input type={'number'} value={el.quantity}/></td>
									<td><button style={{cursor: "pointer"}} onClick={()=>deLete()}>Xoá bỏ</button></td>
								</tr>
							))}
							</tbody>

						</table>
					</div>
				</Col>
			</Row>
			<div className="cart_submit">
				<button type="submit" onClick={()=>addtoCart()}>Đặt hàng</button>

			</div>
		</div>
	);
};

export default CartPage;