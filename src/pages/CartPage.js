import React from 'react';
import '../css/cart.css'
import {Col, Row} from "antd";
import {devices} from "../components/DealInDay";
import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const CartPage = () => {
	const {id} = useParams();
	const [items, setItems] = useState([]);
	useEffect(()=>{
		const cartProducts = devices.find(e=>e.id === parseInt(id))
		setItems(cartProducts)
		// console.log(cartProducts)
		localStorage.setItem('products',cartProducts)

	},[id])
	const deLete = () =>{
		const cartProducts = devices.filter(e=>e.id === parseInt(id))
		setItems(cartProducts)
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
								<th className={'product_remove'}>Hình ảnh</th>
								<th className={'product_remove'}>Sản phẩm</th>
								<th className={'product_remove'}>Giá</th>
								<th className={'product_remove'}>Số lượng</th>
								<th className={'product_remove'}>Xóa bỏ</th>
							</tr>
							<tr>
								<td><a ><img src={items?.img} alt={''}/></a></td>
								<td><a>{items?.name}</a></td>
								<td>{items?.price}</td>
								<td><input type={'number'} defaultValue={1} min={1} max={100}/></td>
								<td><button style={{cursor: "pointer"}} onClick={()=>deLete()}>Xoá bỏ</button></td>
							</tr>
							</tbody>

						</table>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default CartPage;