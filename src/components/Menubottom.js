import React from 'react';
import { Row, Col } from 'antd';
import path from "../contants/path";
import CsLink from "./CsLink";
import '../css/home.css'
import images from "../contants/images/images";

const Menubottom = () => {
	return (
		<Row justify={'space-between'} align={'middle'} className={'container header_middle'}>
			<Col span={6}>
				<div className={'card'}>
					<img src={images.logo} alt={'logo'}/>
				</div>
			</Col>
			<Col span={18}>
				<ul className={'ul-menu'}>
					<li><CsLink to={path.HOME}>Trang chủ</CsLink></li>
					<li><CsLink to={path.SHOP}>Cửa hàng</CsLink></li>
					<li><CsLink to={path.BLOG}>Blog</CsLink></li>
					<li><CsLink to={path.CONTACT}>Liên hệ</CsLink></li>
				</ul>

			</Col>
		</Row>
	);
};

export default Menubottom;