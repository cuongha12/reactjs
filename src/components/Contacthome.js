import React,{useRef} from 'react';
import {Card, Carousel, Col, Row, Rate, Space} from "antd";
import '../css/home.css'
import {HeartOutlined, LeftOutlined, RightOutlined, SwapOutlined} from "@ant-design/icons";
import products from "../__mock__/products";
import path from "../contants/path";
import {useNavigate} from "react-router-dom";
const Contacthome = () => {
	const { Meta } = Card;
	const carouselRe = useRef()
	let navigate = useNavigate();
	// const contacthome =[
	// 	{
	// 		key:10,
	// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product3.jpg',
	// 		price:'$50.00',
	// 		name: 'Camera 1200',
	// 		sale: '$30.00',
	// 	},
	// 	{
	// 		key:2,
	// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product4.jpg',
	// 		price:'$70.00',
	// 		name: 'Laptopgaming',
	// 		sale: '$20.00',
	// 	},
	// 	{
	// 		key:3,
	// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product5.jpg',
	// 		price:'$79.00',
	// 		name: 'Asus Tuf gaming',
	// 		sale: '$50.00',
	// 	},
	// 	{
	// 		key:4,
	// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product6.jpg',
	// 		price:'$60.00',
	// 		name: 'Rog Strix',
	// 		sale: '$40.00',
	// 	},
	// 	{
	// 		key:5,
	// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product7.jpg',
	// 		price:'$59.00',
	// 		name: 'MSI Gaming',
	// 		sale: '$5.00',
	// 	},
	// ]
	// const product =[
	// 	{
	// 		id:16,
	// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product2.jpg',
	// 		price: '$30.00',
	// 		name: 'Asus Tuf Gaming',
	// 		sale: '$50.00',
	// 	},
	// 	{
	// 		id:17,
	// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product3.jpg',
	// 		price: '$40.00',
	// 		name: 'Camera 1200',
	// 		sale: '$20.00',
	// 	},
	// 	{
	// 		id:18,
	// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product4.jpg',
	// 		price: '$50.00',
	// 		name: 'Rog Strix',
	// 		sale: '$90.00',
	// 	},
	// 	{
	// 		id:19,
	// 		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product5.jpg',
	// 		price: '$60.00',
	// 		name: 'Laptop Asus Gaming',
	// 		sale: '$30.00',
	// 	},
	// ]

	const settings = {
		slidesToShow: 4,
		draggable: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
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
	const navigateTo = (idItem) => {
		navigate(path.CART + idItem)
	}
	const navigateCart = (idItem) => {
		navigate(path.CART + idItem)
	}

	console.log(products?.filter(e=>e.created_date.getDate() === new Date(2025, 10, 17).
	getDate()))
	return (
		<div>

			<div className={'title'}>
				<Row>
					<Col span={12}>
						<h2>Máy tính   &amp; Máy tính xách tay</h2>
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
								onClick={()=>carouselRe.current?.prev()}
								style={{cursor: 'pointer'}}
							/>
							<RightOutlined
								onClick={()=>carouselRe.current?.next()}
								style={{cursor: 'pointer'}}
							/>
						</div>
					</Col>
				</Row>
			</div>
		<div className={'device col'}>
			<Carousel ref={carouselRe} slidesToShow={4}  className={'caro'} draggable={true} {...settings} >

				{
					products?.filter(el=>el.created_date.getDate() === new Date(2021, 1, 23).
					getDate()).map((it,index)=>(
						<Card
							key={index}
							hoverable
							cover={
								<div>
									<a href={'/#'}>{it?.name}</a>
									<Rate/>
									<span className={'sale'}>SALE</span>
									<img alt="example" src={it?.img}
										 onClick={(event)=>{
											 event.preventDefault()
											 navigate(path.PRODUCT + it.id);
										 }}/>

									<button className={'btn-deal'}>{'Chi tiết'}</button>
									<ul className={'addto'}>
										<li><button className={'troy'} onClick={(event)=>{
											event.preventDefault()
											navigateTo(it.id)
										}
										}>{'Thêm vào giỏ hàng '}</button></li>
										<li><button className={'tym'}><HeartOutlined /></button></li>
										<li><button className={'upto'}><SwapOutlined /></button></li>
									</ul>
								</div>
							}
						>
							<Space>
								<Meta title={it?.price} className={'sale-price'}/>
								<Meta title={it?.sale} className={'ol-price'}/>
							</Space>
						</Card>
					))
				}
			</Carousel>
		</div>
			<div className={'product-laptop'}>
				<Row>
					{
						products?.filter(e=>e.created_date.getDate() === new Date(2025, 10, 17).
						getDate()).map((y,index)=>(
							<Col key={index}   className={'parcel'} lg={6} xs={24} md={12}>
								<Card
									hoverable
									cover={
										<div>
											<a href={'/#'}>{y.name}</a>
											<Rate/>
											<span className={'sale'}>SALE</span>
											<img alt="example" src={y?.img}
												 onClick={(event)=>{
													 event.preventDefault()
													 navigate(path.PRODUCT + y.id);
												 }}/>
											<button className={'btn-deal'}>{'Chi tiết'}</button>
											<ul className={'addto'}>
												<li><button className={'troy'}
															onClick={(event)=>{
													event.preventDefault()
													navigateCart(y.id)
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
										<Meta title={y?.price} className={'sale-price'}/>
										<Meta title={y?.sale} className={'ol-price'}/>
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

export default Contacthome;