import React from 'react';
import {Card, Rate, Row, Space} from "antd";
import {Col } from 'antd';
import '../css/shop.css';
import {HeartOutlined, SwapOutlined} from "@ant-design/icons";
import products from "../__mock__/products";
import path from "../contants/path";
import {useNavigate} from "react-router-dom";
const { Meta } = Card;
// const products = [
// 	{
// 		id:1,
// 		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product1.jpg',
// 		price:'$79.00',
// 		sale: '$90.00',
// 		name: 'Camera 1200',
// 	},
// 	{
// 		key:2,
// 		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product2.jpg',
// 		price:'$69.00',
// 		sale: '$30.00',
// 		name: 'Dell Latitude',
// 	},
// 	{
// 		id:3,
// 		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product3.jpg',
// 		price:'$59.00',
// 		name: 'MSI Gaming',
// 		sale: '$30.00',
// 	},
// 	{
// 		id:4,
// 		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product4.jpg',
// 		price:'$49.00',
// 		name: 'Rog Strix',
// 		sale: '$30.00',
// 	},
// 	{
// 		id:5,
// 		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product5.jpg',
// 		price:'$39.00',
// 		name: 'Asus Tuf Gaming',
// 		sale: '$30.00',
//
// 	},
// 	{
// 		id:6,
// 		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product6.jpg',
// 		price:'$29.00',
// 		name: 'Rog Strix',
// 		sale: '$89.00',
// 	},
// 	{
// 		id:7,
// 		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product7.jpg',
// 		price:'$19.00',
// 		name: 'AORUS ',
// 		sale: '$30.00',
// 	},
// 	{
// 		id:8,
// 		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product8.jpg',
// 		price:'$9.00',
// 		name: 'TUF GAMING LC',
// 		sale: '$30.00',
// 	},
// 	{
// 		id:9,
// 		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product9.jpg',
// 		price:'$10.00',
// 		name: 'TUF GAMING LC',
// 		sale: '$30.00',
// 	},
// 	{
// 		id:10,
// 		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product10.jpg',
// 		price:'$11.00',
// 		name: 'TUF GAMING LC',
// 		sale: '$30.00',
// 	},
// 	{
// 		id:11,
// 		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product11.jpg',
// 		price:'$9.00',
// 		name: 'TUF GAMING LC',
// 		sale: '$30.00',
// 	},
// 	{
// 		id:12,
// 		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product4.jpg',
// 		price:'$8.00',
// 		name: 'TUF GAMING LC',
// 		sale: '$30.00',
// 	},
// ];

const Contactitem = () => {
	const navigateTo = (idItem) => {
		navigate(path.CART + idItem)
	}
	const navigateCart = (idItem) => {
		navigate(path.CART + idItem)
	}
	let navigate = useNavigate();
	return (
		<div className={'shop-contact'}>
			<div className={'shop-duct'}>
				<Row>
					{/*{*/}
					{/*	products.map((it,index)=>(*/}
					{/*		<Col key={index} md={8} xs={24} >*/}
					{/*			<Card*/}

					{/*				hoverable*/}
					{/*				style={{ width: 310 }}*/}
					{/*				cover={*/}
					{/*					<div>*/}
					{/*						<a href={'/#'}>{it.name}</a>*/}
					{/*						<Rate/>*/}
					{/*						<span className={'sale'}>SALE</span>*/}
					{/*						<img alt="example" src={it.img} />*/}
					{/*						<button className={'btn-deal'}>{'Chi tiết'}</button>*/}
					{/*						<ul className={'addto'}>*/}
					{/*							<li><button className={'troy'}>{'Thêm vào giỏ hàng '}</button></li>*/}
					{/*							<li><button className={'tym'}><HeartOutlined /></button></li>*/}
					{/*							<li><button className={'upto'}><SwapOutlined /></button></li>*/}
					{/*						</ul>*/}
					{/*					</div>*/}
					{/*			}*/}
					{/*			>*/}
					{/*				<Space>*/}
					{/*					<Meta title={it.price} className={'sale-price'}/>*/}
					{/*					<Meta title={it.sale} className={'ol-price'}/>*/}
					{/*				</Space>*/}
					{/*			</Card>*/}
					{/*		</Col>*/}
					{/*	))*/}
					{/*}*/}
					{
						products?.filter(e=>e.created_date.getDay()=== new Date
						(2022, 1, 20).getDay()).
						map((e)=>(
							<Col key={e.id}   md={8} xs={24}>
								<Card
									style={{ width: 310 }}
									hoverable

									cover={
										<div>
											<a href={'/#'}>{e?.name}</a>
											<Rate/>
											<span className={'sale'}>SALE</span>
											<img alt="example" src={e?.img}
												 onClick={(event)=>{
													 event.preventDefault()
													 navigate(path.PRODUCT + e.id);
												 }}/>
											<button className={'btn-deal'}>{'Chi tiết'}</button>
											<ul className={'addto'}>
												<li><button className={'troy'} onClick=
													{(event)=>{
													event.preventDefault()
													navigateCart(e.id)
												}
												}>
													{'Thêm vào giỏ hàng '}</button></li>
												<li><button className={'tym'}><HeartOutlined /></button></li>
												<li><button className={'upto'}><SwapOutlined /></button></li>
											</ul>
										</div>
									}
								>
									<Space>
										<Meta title={e?.price} className={'sale-price'}/>
										<Meta title={e?.sale} className={'ol-price'}/>
									</Space>
								</Card>
							</Col>
						))
					}
				</Row>
			</div>
		</div>
	);
};

export default Contactitem;