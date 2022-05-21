import React from 'react';
import {Card, Col, Row} from "antd";

const LaptopHome = () => {
	return (
		<div className={'laptop'}>
			<Row>
				<Col span={6} className={'block'} lg={6} xs={24} md={12}>
					<Card
						hoverable

						cover={<img alt="example" src="https://htmldemo.net/rusu/rusu/assets/img/custom-p/product1.jpg" />}
					>
						<h4><a href="/#" className={'electronic'}>Máy tính &amp; Máy tính xách tay</a></h4>
						<ul>
							<li><a href="/#">Video</a></li>
							<li><a href="/#">Xem</a></li>
							<li><a href="/#">Máy tính bảng</a></li>
							<li><a href="/#">Trò chơi</a></li>
						</ul>
					</Card>
				</Col>
				<Col span={6} className={'block'} lg={6} xs={24} md={12}>
					<Card
						hoverable

						cover={<img alt="example" src="https://htmldemo.net/rusu/rusu/assets/img/custom-p/product2.jpg" />}
					>
						<h4><a href="/$#" className={'electronic'}>Điện thoại thông minh &amp; Máy tính bảng</a></h4>
						<ul>
							<li><a href="/#">Video</a></li>
							<li><a href="/#">Xem</a></li>
							<li><a href="/#">Máy tính bảng</a></li>
							<li><a href="/#">Trò chơi</a></li>
						</ul>
					</Card>
				</Col>
				<Col span={6} className={'block'} lg={6} xs={24} md={12}>
					<Card
						hoverable

						cover={<img alt="example" src="https://htmldemo.net/rusu/rusu/assets/img/custom-p/product3.jpg" />}
					>
						<h4><a href="/#" className={'electronic'}>Trình điều khiển game</a></h4>
						<ul>
							<li><a href="/#">Video</a></li>
							<li><a href="/#">Xem</a></li>
							<li><a href="/#">Máy tính bảng</a></li>
							<li><a href="/#">Trò chơi</a></li>
						</ul>
					</Card>
				</Col>
				<Col span={6} className={'block'} lg={6} xs={24} md={12}>
					<Card
						hoverable

						cover={<img alt="example" src="https://htmldemo.net/rusu/rusu/assets/img/custom-p/product4.jpg" />}
					>
						<h4><a href="/#" className={'electronic'}>Trò chơi &amp; Đồ chơi Video</a></h4>
						<ul>
							<li><a href="/#">Video</a></li>
							<li><a href="/#">Xem</a></li>
							<li><a href="/#">Máy tính bảng</a></li>
							<li><a href="/#">Trò chơi</a></li>
						</ul>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default LaptopHome;