import React from 'react';
import Location from "../components/Location";
import '../css/Contact.css'
const ContactPage = () => {
	return (
		<div>
			<div className={'content'}>
				<ul>
					<li><a href={'#'}>Trang chủ</a></li>
					<li>Cửa hàng</li>
				</ul>
			</div>
			<div className={'Container-us'}>
				<Location/>
			</div>

		</div>
	);
};

export default ContactPage;