import React, {useEffect, useRef, useState} from 'react';
import {Row, Col, Space} from "antd";
import { Carousel } from 'antd';
import {Card} from "antd";
import '../css/detail.css'
import { Rate } from 'antd';
import { Divider } from 'antd';
import {useNavigate, useParams} from "react-router-dom";
import products from "../__mock__/products";
import {HeartOutlined, LeftOutlined, RightOutlined, SwapOutlined} from '@ant-design/icons';
import { Image } from 'antd';
import { Tabs } from 'antd';
import Times from "../components/Times";
import { Comment, Form, List, Input } from 'antd';
import {  Button } from 'antd';
import path from '../contants/path'

const {Meta} = Card
const { TextArea } = Input;
const { TabPane } = Tabs;
const settings = {
	slidesToShow: 4,
	draggable: true,
	infinite: true,
	dots: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
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

const setting = {
	dots: false,
	infinite: true,
	draggable: true,
	speed: 500,
	slidesToShow: 4,
	initialSlide: 0,
	arrows: false,
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
				slidesToShow: 2,
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
};
function callback(key) {
	console.log(key);
}
const thumnais = [
	{src: 'https://htmldemo.net/rusu/rusu/assets/img/product/productbig1.jpg'},
	{src: 'https://htmldemo.net/rusu/rusu/assets/img/product/productbig2.jpg'},
	{src: 'https://htmldemo.net/rusu/rusu/assets/img/product/productbig3.jpg'},
	{src: 'https://htmldemo.net/rusu/rusu/assets/img/product/productbig4.jpg'},
	{src: 'https://htmldemo.net/rusu/rusu/assets/img/product/productbig5.jpg'},
	{src: 'https://htmldemo.net/rusu/rusu/assets/img/product/productbig1.jpg'},
	{src: 'https://htmldemo.net/rusu/rusu/assets/img/product/productbig1.jpg'},
	{src: 'https://htmldemo.net/rusu/rusu/assets/img/product/productbig1.jpg'},

]

const CommentList = ({ comments }) => (
	<List
		dataSource={comments}
		header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
		itemLayout="horizontal"
		renderItem={props => <Comment {...props} />}
	/>
);
const Editor = ({ onChange, value }) => (
	<>
		<Form.Item>
			<TextArea rows={4} onChange={onChange} value={value} />
		</Form.Item>

	</>
);



const devicess = [
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
const Detaildevices =[
	{
		id: 1,
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product1.jpg',
		price: '$70.00',
		sale: '$10.00',
		name: 'Camera 1200'
	},
	{
		id: 2,
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product2.jpg',
		price: '$78.00',
		sale: '$20.00',
		name: 'Laptop Asus'
	},
	{
		id: 3,
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product3.jpg',
		price: '$50.00',
		sale: '$30.00',
		name: 'Laptop'
	},
	{
		id: 4,
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product4.jpg',
		price: '$72.00',
		sale: '$50.00',
		name: 'Iphone 6'
	},
	{
		id: 5,
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product5.jpg',
		price: '$10.00',
		sale: '$40.00',
		name: 'Nokia 1280'
	},
]
const Detailpage = () => {
	const handleSubmit = () => {
		if (!state.value) {
			return;
		}

		setState({
			...state,
			submitting: true,
		});


	};
	const handleChange = e => {
		setState({
			...state,
			value: e.target.value,
		});
	};
	const [state, setState] = useState({
		comments: [],
		submitting: false,
		value: '',
	});
	const THREE_DAYS_IN_MS = 5 * 24 * 60 * 60 * 1000;
	const NOW_IN_MS = new Date().getTime();
	const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
	let {id} = useParams();
	const Carousell = useRef();
	const [product, setProduct] = useState([]);

	let navigate = useNavigate();
	useEffect(()=>{
		//T??m ki???m key same id -> s???n ph???m
		const newProduct = products.find(e=>e.id === id)
		setProduct(newProduct)
	},[id])

	const navigateItem = () =>{
		navigate(path.CART + product.id)
	}

	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	const carouselRef = useRef();
	const carouse = useRef();
	return (
		<div className={'product_details'}>
			<div className={'detail-container'}>
				<Row>
					<Col  sm={24}>

								<div className={'product-details-tab'}>
									<div className={'zoomWrapper single-zoom'}>
										<a>
											<Image  src={product?.img}/>
										</a>
									</div>
								</div>


						<div className={'single-zoom-thumb'}>
							<LeftOutlined onClick={()=>Carousell.current?.prev()} style={{cursor: 'pointer'}}/>
							<RightOutlined onClick={()=>Carousell.current?.next()} style={{cursor: 'pointer'}}/>
							<Carousel {...setting} ref={Carousell}>
								{
									thumnais.map((el, index)=>(
										<Card
											onClick={()=>{
												setProduct(previous=>({
													...previous,
													img: el.src
												}))
											}}
											key={index}
											hoverable
											cover={<img alt={"ex" + index} src={el.src} />}
										/>
									))

								}
							</Carousel>
						</div>
					</Col>
					<Col md={24} >
						<div className={'detail-col'}>
							<h3>
								<a href={'/#'}>{product?.name}</a>
							</h3>
							<Rate className={'product_rating'} />
							<div className={'price_box'}>
								<span className="current_price">{product?.price}</span>
								<span className="old_price">{product?.sale}</span>
							</div>
							<div className="product_desc">
								<p>eget velit. Donec ac tempus ante. Fusce ultricies massa massa.
									Fusce aliquam, purus eget
									sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.
									Lorem
									ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat
									vestibulum, metus nisi posuere nisl, in </p>
							</div>
							<Divider />
							{/*<Colors colors={item.colors} />*/}
							<div className={'detail-color'}>
								<h3>T??y ch???n c?? s???n</h3>
								<label>M??u</label>
								<ul>
									<li className={'color1'}><a ></a></li>
									<li className={'color2'}><a ></a></li>
									<li className={'color3'}><a ></a></li>
									<li className={'color4'}><a ></a></li>

								</ul>
							</div>
							<div className="product_variant quantity">
								<label>S??? l?????ng</label>
								<input min={1} max={100} defaultValue={1} type={'number'}/>
								<button className={'detail-btn'} type={'submit'}
									onClick={(event)=>{
										event.preventDefault()
										navigateItem(product.id)
									}}
								>Th??m v??o gi??? h??ng</button>
							</div>
							<Times targetDate={dateTimeAfterThreeDays}/>
							<div className=" product_d_action">
								<ul>
									<li><a href="/#" title="Add to wishlist">+ Add to Wishlist</a></li>
									<li><a href="/#" title="Add to wishlist">+ Compare</a></li>
									<li><span>Category: <a href="/#">Clothing</a></span></li>
								</ul>
							</div>

						</div>
					</Col>
				</Row>
			</div>
			<Tabs defaultActiveKey="1" onChange={callback}>
				<TabPane tab="Mi??u t???" key="1">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
						Nulla tellus mi,
						vulputate adipiscing cursus eu, suscipit id nulla.
					</p>
					<p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.
						Cras neque metus, consequat et blandit et, luctus a nunc.
						gravida vehicula tellus, in imperdiet ligula euismod eget.</p>
				</TabPane>
				<TabPane tab="Ch??? r??" key="2">
					<div className="product_d_table">
						<form action="#">
							<table >
								<tbody>
								<tr>
									<td className="first_child">S??ng t??c</td>
									<td>Polyester</td>
								</tr>
								<tr>
									<td className="first_child">Phong c??ch</td>
									<td>N??? t??nh</td>
								</tr>
								<tr>
									<td className="first_child">T??nh ch???t</td>
									<td>V??y ng???n</td>
								</tr>
								</tbody>
							</table>
						</form>
					</div>
					<p>Fashion has been creating well-designed collections since 2010.
						The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe.
						The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention.
						Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
				</TabPane>
				<TabPane tab="Tab 3" key="3">
					<div>
						<h2>1 Review for Donec eu furniture</h2>
						<div className={'reviews_comment_box'}>
							<div className="comment_thmb">
								<img src="https://htmldemo.net/rusu/rusu/assets/img/blog/comment2.jpg" alt=""/>
							</div>
							<div className="comment_text">
								<div className="reviews_meta">
									<div className="product_rating">
										<Rate />
									</div>
									<p><strong>ADMIN </strong>- ng??y 12 th??ng 9 n??m 2018</p>
									<span>ch??? ?????</span>
								</div>
							</div>

						</div>
						<div className="comment_title">
							<h2>Th??m m???t b??i ????nh gi??</h2>
							<p>?????a ch??? email c???a b???n s??? kh??ng ???????c c??ng b???. C??c tr?????ng b???t bu???c ???????c ????nh d???u </p>
						</div>
						<div className="product_rating mb-10">
							<h3>Your rating</h3>
							<Rate/>
						</div>
						<>
							{state.comments.length > 0 && <CommentList comments={state.comments} />}
							<Comment

								content={
									<Editor
										onChange={handleChange}
										onSubmit={handleSubmit}
										submitting={state.submitting}
										value={state.value}
									/>
								}
							/>
						</>
					</div>
					<Form
						name="basic"
						labelCol={{ span: 4 }}
						wrapperCol={{ span: 20 }}
						initialValues={{ remember: true }}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
					>
						<Form.Item
							label="Username"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[{ required: true, message: 'Please input your password!' }]}
						>
							<Input.Password />
						</Form.Item>



						<Form.Item wrapperCol={{ offset: 4, span: 20 }}>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</TabPane>
			</Tabs>
			<div className={'wrapper detail-w'}>
				<div className={'title home-title'}>
					<Row>
						<Col span={8}>
							<h2 >NH???NG S???M PH???M T????NG T???</h2>
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
							devicess.map((it)=>(
								<Card
									key={it.id}
									hoverable
									cover={
										<div>
											<a href={'/#'}>{it.name}</a>
											<Rate/>
											<span className={'sale'}>SALE</span>
											<img alt="example" src={it.img} />
											<button className={'btn-deal'}>{'Chi ti???t'}</button>
											<ul className={'addto'}>
												<li><button className={'troy'}

												>{'Th??m v??o gi??? h??ng '}</button></li>
												<li><button className={'tym'}><HeartOutlined /></button></li>
												<li><button className={'upto'}><SwapOutlined /></button></li>
											</ul>
										</div>

									}>
									<Space>
										<Meta title={it.sale}  className={'sale-price'}/>
										<Meta title={it.price} className={'ol-price'}/>
									</Space>

								</Card>
							))
						}
					</Carousel>

				</div>
			</div>
			<div className={'wrapper detail-w'}>
				<div className={'title home-title'}>
					<Row>
						<Col span={8}>
							<h2 >S???N PH???M UPSELL</h2>
						</Col>
						<Col span={8} offset={8}>
							<div className={'group-icon'}>
								<LeftOutlined
									onClick={()=>carouse.current?.prev()}
									style={{cursor: 'pointer'}}
								/>
								<RightOutlined
									onClick={()=>carouse.current?.next()}
									style={{cursor: 'pointer'}}
								/>
							</div>
						</Col>
					</Row>
				</div>
				<div className={'device'}>
					<Carousel {...settings} ref={carouse} className={'caro'}>
						{
							Detaildevices.map((it)=>(
								<Card
									key={it.id}
									hoverable
									cover={
										<div>
											<a href={'/#'}>{it.name}</a>
											<Rate/>
											<span className={'sale'}>SALE</span>
											<img alt="example" src={it.img} />
											<button className={'btn-deal'}>{'Chi ti???t'}</button>
											<ul className={'addto'}>
												<li><button className={'troy'}>{'Th??m v??o gi??? h??ng '}</button></li>
												<li><button className={'tym'}><HeartOutlined /></button></li>
												<li><button className={'upto'}><SwapOutlined /></button></li>
											</ul>
										</div>

									}>
									<Space>
										<Meta title={it.sale}  className={'sale-price'}/>
										<Meta title={it.price} className={'ol-price'}/>
									</Space>

								</Card>
							))
						}
					</Carousel>

				</div>
			</div>
			</div>
	);
};

export default Detailpage;