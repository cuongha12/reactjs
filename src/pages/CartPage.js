import React from 'react';
import '../css/cart.css'
import {Col, Row} from "antd";
import {useParams} from "react-router-dom";
import {devices} from "../components/DealInDay";
import {useEffect, useState} from 'react';

const CartPage = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const onClose = () => {
		setIsOpenMenu(false)
	}
	const {id} = useParams();
	const [cart, setCart] = useState(null);

	useEffect(()=>{
		setCart(devices.find((x) => x.id === parseInt(id)))
	},[id])
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
								<th className={'product_remove'}>Toàn bộ</th>
								<th className={'product_remove'}>Xóa bỏ</th>
							</tr>
							<tr>
								<td><a ><img src={cart?.img} alt={''}/></a></td>
								<td><a>{cart?.name}</a></td>
								<td>£ 65,00</td>
								<td><input type={'number'} defaultValue={1} min={1} max={100}/></td>
								<td>£ 65,00</td>
								<td><button style={{cursor: "pointer"}} onClick={()=>onClose()}>Xoá bỏ</button></td>
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