import React from 'react';
import products from "../__mock__/products";
const Shoppingpage = () => {

	return (
		<div className={'cart-bill'}>
			<div className="coupon_code right">
				<h3>Hoá đơn</h3>
				<div className="coupon_inner">
					<div className="cart_subtotal">
						<p>tên sản phẩm</p>
						<p className="cart_amount">quần đùi</p>
					</div>
					<div className="cart_subtotal ">
						<p>Số lượng</p>
						<p className="cart_amount">1</p>
					</div>
					<div className="cart_subtotal">
						<p>Tổng thanh toán</p>
						<p className="cart_amount">£215.00</p>
					</div>

				</div>
				<div className="cart_submit">
					<button type="submit" >Thanh toán</button>
				</div>
			</div>
		</div>
	);
};

export default Shoppingpage;