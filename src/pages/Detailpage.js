import React, {useEffect, useRef, useState} from 'react';
import {Row, Col, Space} from "antd";
import { Carousel } from 'antd';
import {Card} from "antd";
import '../css/detail.css'
import { Rate } from 'antd';
import { Divider } from 'antd';
import {useParams} from "react-router-dom";
import {products} from "../components/Pricelaptop";
import {devices} from "../components/DealInDay";
import {HeartOutlined, LeftOutlined, RightOutlined, SwapOutlined} from '@ant-design/icons';
import { Image } from 'antd';
import { Tabs } from 'antd';
import Times from "../components/Times";
import { Comment, Form, List, Input } from 'antd';
import {  Button } from 'antd';


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
	const {id} = useParams();

	const Carousell = useRef();
	const [product, setProduct] = useState(null);


	useEffect(()=>{
		//Tìm kiếm key same id -> sản phẩm
		setProduct(products.find((x) => x.key === parseInt(id)))
	},[id])

	useEffect(()=>{
		setProduct(devices.find((y) => y.id === parseInt(id)))
	},[id])

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
								<p>eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget
									sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem
									ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat
									vestibulum, metus nisi posuere nisl, in </p>
							</div>
							<Divider />
							{/*<Colors colors={item.colors} />*/}
							<div className={'detail-color'}>
								<h3>Tùy chọn có sẵn</h3>
								<label>Màu</label>
								<ul>
									<li className={'color1'}><a ></a></li>
									<li className={'color2'}><a ></a></li>
									<li className={'color3'}><a ></a></li>
									<li className={'color4'}><a ></a></li>

								</ul>
							</div>
							<div className="product_variant quantity">
								<label>Số lượng</label>
								<input min={1} max={100} defaultValue={1} type={'number'}/>
								<button className={'detail-btn'} type={'submit'}>Thêm vào giỏ hàng</button>
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
				<TabPane tab="Miêu tả" key="1">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
						Nulla tellus mi,
						vulputate adipiscing cursus eu, suscipit id nulla.
					</p>
					<p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.
						Cras neque metus, consequat et blandit et, luctus a nunc.
						gravida vehicula tellus, in imperdiet ligula euismod eget.</p>
				</TabPane>
				<TabPane tab="Chỉ rõ" key="2">
					<div className="product_d_table">
						<form action="#">
							<table >
								<tbody>
								<tr>
									<td className="first_child">Sáng tác</td>
									<td>Polyester</td>
								</tr>
								<tr>
									<td className="first_child">Phong cách</td>
									<td>Nữ tính</td>
								</tr>
								<tr>
									<td className="first_child">Tính chất</td>
									<td>Váy ngắn</td>
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
									<p><strong>ADMIN </strong>- ngày 12 tháng 9 năm 2018</p>
									<span>chủ đề</span>
								</div>
							</div>

						</div>
						<div className="comment_title">
							<h2>Thêm một bài đánh giá</h2>
							<p>Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc được đánh dấu </p>
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
							<h2 >NHỮNG SẢM PHẨM TƯƠNG TỰ</h2>
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
											<button className={'btn-deal'}>{'Chi tiết'}</button>
											<ul className={'addto'}>
												<li><button className={'troy'}>{'Thêm vào giỏ hàng '}</button></li>
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
							<h2 >SẢN PHẨM UPSELL</h2>
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
											<button className={'btn-deal'}>{'Chi tiết'}</button>
											<ul className={'addto'}>
												<li><button className={'troy'}>{'Thêm vào giỏ hàng '}</button></li>
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