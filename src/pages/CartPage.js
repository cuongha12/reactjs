import React from 'react';
import '../css/cart.css'
import {Col, Row} from "antd";
const CartPage = () => {
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
								<td><a ><img src={'https://htmldemo.net/rusu/rusu/assets/img/s-product/product.jpg'} alt={''}/></a></td>
								<td><a  >Túi xách Fringilla</a></td>
								<td>£ 65,00</td>
								<td><input type={'number'} defaultValue={100} min={1} max={100}/></td>
								<td>£ 65,00</td>
								<td><button>Xoá bỏ</button></td>
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