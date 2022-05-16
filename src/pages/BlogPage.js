import React from 'react';
import '../css/shop.css'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Slider } from 'antd';
import { Menu, Dropdown, Button, Space } from 'antd';
import { MenuUnfoldOutlined,PicLeftOutlined,AlignCenterOutlined} from '@ant-design/icons';
import { Pagination } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { Divider } from 'antd';
import { Rate } from 'antd';
import Contactitem from "../components/Contactitem";
const BlogPage = () => {
	const { Meta } = Card;
	const menu = (
		<Menu

			items={[
				{
					label: 'Sắp xếp theo mức độ phổ biến',
					key: '1',

				},
				{
					label: 'Sắp xếp theo độ mới',
					key: '2',

				},
				{
					label: 'Sắp xếp theo giá: thấp đến cao',
					key: '3',

				},
				{
					label: 'Sắp xếp theo giá: cao đến thấp',
					key: '4',

				},
				{
					label: 'Tên sản phẩm: Z',
					key: '5',

				},
			]}
		/>
	);

const Shopitem = [
	{
		id:1,
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product1.jpg',
		name:'ROG Swift PG43UQ',
		price:'$69.00',
		sale:'$50.00',

	},
	{
		id:2,
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product2.jpg',
		name:'ROG Strix XG35VQ',
		price:'$39.00',
		sale:'$50.00',

	},
	{
		id:3,
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product3.jpg',
		name:'ROG SWIFT PG258Q',
		price:'$19.00',
		sale:'$30.00',

	},
]
	return (
		<div>
			<div className={'baneershop'}>
				<img alt={""} src={'https://htmldemo.net/rusu/rusu/assets/img/bg/banner16.jpg'} className={'card-img'}/>
			</div>
			<div className={'content'}>
				<ul>
					<li><a href={'/#'}>Trang chủ</a></li>
					<li>Cửa hàng</li>
				</ul>
			</div>
			<div className={'menu-shop'}>
				<Row >
					<Col span={6}>
						<div className="site-card-border-less-wrapper">
							<Card title="DANH MỤC SẢN PHẨM" bordered={false} style={{ width: 300 }}>
								<ul className={'price-shop'}>
									<li><a href={'/#'}>Máy ảnh & Máy quay phim</a></li>
									<li><a href={'/#'}>Mạng máy tính</a></li>
									<li><a href={'/#'}>Trò chơi & Bảng điều khiển</a></li>
									<li><a href={'/#'}>Tai nghe & loa ngoài</a></li>
									<li><a href={'/#'}>Phim & trò chơi điện tử</a></li>
									<li><a href={'/#'}>Điện thoại thông minh</a></li>
									<li><a href={'/#'}>Chưa được phân loại</a></li>
								</ul>
							</Card>
						</div>
						<div className="site-card-border-less-wrapper ">
							<Card title="BỘ LỌC THEO GIÁ" bordered={false} style={{ width: 300 }} className={'filter'}>
								<Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
								<button className={'submit'}>Lọc</button>
							</Card>
						</div>
						<div className="site-card-border-less-wrapper">
							<Card title="SO SÁNH SẢN PHẨM" bordered={false}>
								{
									Shopitem.map((it)=>(
										<div key={it.id} style={{padding: '0 12px'}}>
											<div className={'shop-laptop'}>
											<img src={it.img} alt={''}/>
											<div className={'shop-details'}>
												<h4>
													<a href={'/#'}>{it.name}</a>
												</h4>
												<Rate className={'shop-rate'}/>
												<Space>
													<Space>
														<Meta title={it.sale}  className={'sale-price'}/>
														<Meta title={it.price} className={'ol-price'}/>
													</Space>
												</Space>
											</div>
										</div>
											<Divider/>
										</div>
									))
								}
							</Card>
						</div>
						<div className="widget_list banner_area">
							<div className="banner_thumb">
								<a href={'/#'}><img src={'https://htmldemo.net/rusu/rusu/assets/img/bg/banner15.jpg'} alt={''}/></a>
							</div>
						</div>
						<div className="site-card-border-less-wrapper">
							<Card title="THẺ SẢN PHẨM" bordered={false} style={{ width: 300 }} >
								<div className={'shop-card'}>
									<button className={'btn-p'}>Áo cánh</button>
									<button className={'btn-p'}>Quần áo</button>
									<button className={'btn-p'}>Thời trang</button>
									<button className={'btn-p'}>Túi xách tay</button>
									<button className={'btn-p'}>Máy tính xách tay</button>
								</div>
							</Card>
						</div>
					</Col>
					<Col span={18}>
						<div className="shop_toolbar_wrapper">
							<div className={'shop_toolbar_btn'}>
								<button className={'shop-tool'}><MenuUnfoldOutlined /></button>
								<button className={'shop-tool'}><PicLeftOutlined /></button>
								<button className={'shop-tool'}><AlignCenterOutlined /></button>
							</div>
							<Space wrap>

								<Dropdown overlay={menu}>
									<Button>
										<Space>
											Sắp xếp theo xếp hạng trung bình
											<DownOutlined />
										</Space>
									</Button>
								</Dropdown>
							</Space>
							<div className="page_amount">
								<p>Showing 1–9 of 21 results</p>
							</div>
						</div>
						<Contactitem/>
						<Pagination defaultCurrent={1} total={50} className={'text'}/>
					</Col>
				</Row>
			</div>
			<div className={'nones'}>
				<div className="shop_toolbar_wrapper ">
					<div className={'shop_toolbar_btn'}>
						<button className={'shop-tool'}><MenuUnfoldOutlined /></button>
						<button className={'shop-tool'}><PicLeftOutlined /></button>
						<button className={'shop-tool'}><AlignCenterOutlined /></button>
					</div>
					<Space wrap>

						<Dropdown overlay={menu}>
							<Button>
								<Space>
									Sắp xếp theo xếp hạng trung bình
									<DownOutlined />
								</Space>
							</Button>
						</Dropdown>
					</Space>
					<div className="page_amount">
						<p>Showing 1–9 of 21 results</p>
					</div>

				</div>
				<Contactitem/>
				<Pagination defaultCurrent={1} total={50} className={'text nones '}/>
				<div className="site-card-border-less-wrapper">
					<Card title="DANH MỤC SẢN PHẨM" bordered={false} style={{ width: 700 }}>
						<ul className={'price-shop'}>
							<li><a href={'/#'}>Máy ảnh & Máy quay phim</a></li>
							<li><a href={'/#'}>Mạng máy tính</a></li>
							<li><a href={'/#'}>Trò chơi & Bảng điều khiển</a></li>
							<li><a href={'/#'}>Tai nghe & loa ngoài</a></li>
							<li><a href={'/#'}>Phim & trò chơi điện tử</a></li>
							<li><a href={'/#'}>Điện thoại thông minh</a></li>
							<li><a href={'/#'}>Chưa được phân loại</a></li>
						</ul>
					</Card>
				</div>
				<div className="site-card-border-less-wrapper ">
					<Card title="BỘ LỌC THEO GIÁ" bordered={false} style={{ width: 700 }} className={'filter'}>
						<Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
						<button className={'submit'}>Lọc</button>
					</Card>
				</div>
				<div className="site-card-border-less-wrapper">
					<Card title="SO SÁNH SẢN PHẨM" bordered={false}>
						{
							Shopitem.map((it)=>(
								<div key={it.id} style={{padding: '0 12px'}}>
									<div className={'shop-laptop'}>
										<img src={it.img} alt={''}/>
										<div className={'shop-details'}>
											<h4>
												<a href={'/#'}>{it.name}</a>
											</h4>
											<Rate className={'shop-rate'}/>
											<Space>
												<Space>
													<Meta title={it.sale}  className={'sale-price'}/>
													<Meta title={it.price} className={'ol-price'}/>
												</Space>
											</Space>
										</div>
									</div>
									<Divider/>
								</div>
							))
						}
					</Card>
				</div>
				<div className="widget_list banner_area">
					<div className="banner_thumb">
						<a href={'/#'}><img src={'https://htmldemo.net/rusu/rusu/assets/img/bg/banner15.jpg'} alt={''} className={'center'}/></a>
					</div>
				</div>
				<div className="site-card-border-less-wrapper">
					<Card title="THẺ SẢN PHẨM" bordered={false} style={{ width: 700 }} >
						<div className={'shop-card'}>
							<button className={'btn-p'}>Áo cánh</button>
							<button className={'btn-p'}>Quần áo</button>
							<button className={'btn-p'}>Thời trang</button>
							<button className={'btn-p'}>Túi xách tay</button>
							<button className={'btn-p'}>Máy tính xách tay</button>
						</div>
					</Card>
				</div>
			</div>

		</div>
	);
};

export default BlogPage;
