import React, {useRef,useState} from 'react';
import {Card, Carousel, Col, Row, Rate, Space} from "antd";
import {LeftOutlined, RightOutlined,HeartOutlined,SwapOutlined} from "@ant-design/icons";
import CountdownTimer from "./CountdownTimer";
import {useNavigate} from "react-router-dom";
import path from "../contants/path";


const {Meta} = Card

const devices = [
	{
		id: 1,
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product4.jpg',
		price: '$70.00',
		sale: '$10.00',
		name: 'Camera 1200'
	},
	{
		id: 2,
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product5.jpg',
		price: '$78.00',
		sale: '$20.00',
		name: 'Laptop Asus'
	},
	{
		id: 3,
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product6.jpg',
		price: '$50.00',
		sale: '$30.00',
		name: 'Laptop'
	},
	{
		id: 4,
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product7.jpg',
		price: '$72.00',
		sale: '$50.00',
		name: 'Iphone 6'
	},
	{
		id: 5,
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product8.jpg',
		price: '$10.00',
		sale: '$40.00',
		name: 'Nokia 1280'
	},
]
export {devices}
const DealInDay = () => {

	let navigates = useNavigate();
	const carouselRef = useRef();

	const THREE_DAYS_IN_MS = 5 * 24 * 60 * 60 * 1000;
	const NOW_IN_MS = new Date().getTime();

	const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

	const settings = {
		slidesToShow: 4,
		draggable: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}

	const onCart = (id) => {
	 const newProduct = devices.find(e=>e.id === parseInt(id))
		localStorage.setItem('cart',newProduct)
	}

	return (
		<div className={'wrapper'}>
			<div className={'title home-title'}>
				<Row>
					<Col span={8}>
						<h2 >Thỏa thuận trong ngày</h2>
					</Col>
					<Col span={8} offset={8}>
						<div className={'group-icon'}>
							<LeftOutlined
								onClick={()=>carouselRef.current?.prev()}
								style={{cursor: 'pointer'}}
							/>
							<RightOutlined
								onClick={()=>carouselRef.current?.next()}
								style={{cursor: 'pointer'}}
							/>
						</div>
					</Col>
				</Row>
			</div>
			<div className={'device'}>
				<Carousel {...settings} ref={carouselRef} className={'caro'}>
					{
						devices.map((it)=>(
							<Card
								key={it.id}
								hoverable
								cover={

								<div>
									<a href={'/#'}>{it.name}</a>
									<Rate/>
									<span className={'sale'}>SALE</span>
									<img alt="example" src={it.img}
										 onClick={(event)=>{
											 event.preventDefault()
											 navigates(path.PRODUCT + it.id);
										 }}
									/>
									<button className={'btn-deal'}>{'Chi tiết'}</button>
									<ul className={'addto'}>
										<li>

												<button className={'troy'}
														onClick={(item)=>{
																item.preventDefault()
																navigates(path.CART +it.id)
																onCart(it.id)
															}

														}

												>
													{'Thêm vào giỏ hàng '}
												</button>

										</li>
										<li><button className={'tym'}><HeartOutlined /></button></li>
										<li><button className={'upto'}><SwapOutlined /></button></li>
									</ul>
								</div>

								}>
								<Space>
									<Meta title={it.sale}  className={'sale-price'}/>
									<Meta title={it.price} className={'ol-price'}/>
								</Space>
								<CountdownTimer targetDate={dateTimeAfterThreeDays}/>
							</Card>
						))
					}
				</Carousel>

			</div>
		</div>
	);
};

export default DealInDay;