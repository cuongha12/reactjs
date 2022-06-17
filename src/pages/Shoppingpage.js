import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import path from "../contants/path";


const Shoppingpage = () => {

	const jsonLocalItems = localStorage.getItem('products')
	const localItems = JSON.parse(jsonLocalItems)

	const navigate = useNavigate()





	const x = () => {
		localStorage.setItem('products', JSON.stringify([]))
		navigate(path.HOME)
		alert("Đặt hàng thành công")

	}


	//re render

	return (
		<div className={'cart-bill'}>
			<div className="coupon_code right">
				<h3>Hoá Đơn</h3>
				<div className="coupon_inner">
					<table className={'table-bill'}>
						<tbody className={'tb-bill'}>
						<tr className={'tr-bill'}>
							<td>Sản phẩm</td>
							<td>Đơn giá</td>
							<td>Số lượng</td>
						</tr>
						{
							localItems?.map((el)=>(

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
						<p>Tổng thanh toán</p>
						{localItems.length > 0 &&(
							<h1>{`Tổng thanh toán: ${localItems.map(item =>
								({price: item.price, quantity: item.quantity}))
								.reduce((prev, next) =>
								{return prev + parseInt(next.price) * next.quantity}, 0)}`}</h1>
						)}
					</div>
				</div>
				<div className="cart_submit">
					<button type="submit"
						onClick={()=>x()}
						>Đặt hàng</button>
				</div>
			</div>
		</div>

	);
};

export default Shoppingpage;