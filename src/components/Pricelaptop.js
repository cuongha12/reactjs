import React, {useRef} from 'react';
import {Card, Carousel, Col, Rate, Row, Space} from "antd";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import '../css/home.css';
import { useNavigate } from "react-router-dom";
import path from "../contants/path";
import products from "../__mock__/products";
const { Meta } = Card;

// const products = [
// 	{
// 		key:1,
// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product1.jpg',
// 		price:'$50.00',
// 		name: 'Camera 1200',
// 		sale: '$90.00',
// 	},
// 	{
// 		key:2,
// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product2.jpg',
// 		price:'$100.00',
// 		name: 'Dell Latitude',
// 		sale: '$30.00',
// 	},
// 	{
// 		key:3,
// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product3.jpg',
// 		price:'$10.00',
// 		name: 'MSI Gaming',
// 		sale: '$30.00',
// 	},
// 	{
// 		key:4,
// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product4.jpg',
// 		price:'$50.00',
// 		name: 'Asus Tuf Gaming',
// 		sale: '$20.00',
// 	},
// 	{
// 		key:5,
// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product5.jpg',
// 		price:'$40.00',
// 		name: 'Rog Strix',
// 		sale: '$30.00',
// 	},
// 	{
// 		key:6,
// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product6.jpg',
// 		price:'$50.00',
// 		name: 'AORUS ',
// 		sale: '$89.00',
// 	},
// 	{
// 		key:7,
// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product7.jpg',
// 		price:'$50.00',
// 		name: 'ROG STRIX LC',
// 		sale: '$30.00',
// 	},
// 	{
// 		key:8,
// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product8.jpg',
// 		price:'$50.00',
// 		name: 'TUF GAMING LC',
// 		sale: '$30.00',
// 	},
//
// ]
//
// export { products }

const Pricelaptop = () => {

	let navigate = useNavigate();

	const settings = {
		slidesToShow: 3,
		draggable: true,
		rows: 2,
		dots: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					// infinite: true,
				}
			},
			// {
			// 	breakpoint: 600,
			// 	settings: {
			// 		slidesToShow: 2,
			// 		slidesToScroll: 2,
			// 		initialSlide: 2
			// 	}
			// },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}

	const carousel = useRef();



	return (
		<div>
			<div className={'title'}>
				<Row>
					<Col span={12}>
						<h2>Máy tính   &amp; Laptop</h2>
					</Col>
					<Col span={12} className={'loading'} >
						<div className={'menu-bottom'}>
							<ul>
								<a href={'/#'}><li>Video</li></a>
								<a href={'/#'}><li>Xem</li></a>
								<a href={'/#'}><li>Máy tính bảng</li></a>
								<a href={'/#'}><li>Trò chơi</li></a>

							</ul>
						</div>
						<div className={'group-icon'} >
							<LeftOutlined
								onClick={()=>carousel.current?.prev()}
								style={{cursor: 'pointer'}}
							/>
							<RightOutlined
								onClick={()=>carousel.current?.next()}
								style={{cursor: 'pointer'}}
							/>
						</div>
					</Col>
				</Row>
			</div>
			<div className={'device col'}>
				<Carousel {...settings} ref={carousel} className={'caro'}>
					{
						products?.filter(x=>x.created_date.getDay()=== new Date(2022, 6, 24).getDay())
							.map((el)=>(
								<Card
									onClick={(event)=>{
										event.preventDefault()
										navigate(path.PRODUCT + el.id);
									}}
									className={'sale-laptop'}
									key={el.id}
									hoverable
									cover={
										<div>
											<img alt="example" src={el?.img} className={'pricelaptop'}/>
										</div>
									}
								>
									<a href={'/#'}>{el?.name}</a>
									<div>
										<Rate className={'icon-rate'}/>
									</div>
									<Space>
										<Meta title={el?.price} className={'sale-price'}/>
										<Meta title={el?.sale} className={'ol-price'}/>
									</Space>
								</Card>
							))
					}
				</Carousel>
			</div>
		</div>
	);
};

export default Pricelaptop;