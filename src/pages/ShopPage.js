import React from 'react';
import '../css/blog.css'
import { Row, Col } from 'antd';
import { Card } from 'antd';

import { Pagination } from 'antd';

const BlogUs = [
	{
		id:1,
		img:'https://htmldemo.net/rusu/rusu/assets/img/blog/blogpage3.jpg',
		price:'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.\n' +
			'\t\t\t\t\t\t\t\t\tAenean posuere libero eu augue condimentum rhoncus.\n' +
			'\t\t\t\t\t\t\t\t\tPraesent ornare tortor ac ante egestas hendrerit.\n' +
			'\t\t\t\t\t\t\t\t\tAliquam et metus pharetra, bibendum massa nec, fermentum odio.\n' +
			'\t\t\t\t\t\t\t\t\tNunc id leo ultrices, mollis ligula in, finibus tortor. Mauris',
		button:'ĐỌC THÊM',
	},
	{
		id:2,
		img:'https://htmldemo.net/rusu/rusu/assets/img/blog/blogpage4.jpg',
		price:'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.\n' +
			'\t\t\t\t\t\t\t\t\tAenean posuere libero eu augue condimentum rhoncus.\n' +
			'\t\t\t\t\t\t\t\t\tPraesent ornare tortor ac ante egestas hendrerit.\n' +
			'\t\t\t\t\t\t\t\t\tAliquam et metus pharetra, bibendum massa nec, fermentum odio.\n' +
			'\t\t\t\t\t\t\t\t\tNunc id leo ultrices, mollis ligula in, finibus tortor. Mauris',
		button:'ĐỌC THÊM',
	},
	{
		id:3,
		img:'https://htmldemo.net/rusu/rusu/assets/img/blog/blogpage5.jpg',
		price:'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.\n' +
			'\t\t\t\t\t\t\t\t\tAenean posuere libero eu augue condimentum rhoncus.\n' +
			'\t\t\t\t\t\t\t\t\tPraesent ornare tortor ac ante egestas hendrerit.\n' +
			'\t\t\t\t\t\t\t\t\tAliquam et is',
		button:'ĐỌC THÊM',
	},
	{
		id:4,
		img:'https://htmldemo.net/rusu/rusu/assets/img/blog/blogpage6.jpg',
		price:'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent ornare tortor ac ante egestas hendrerit. Aliquam et metus pharetra, bibendum massa nec, fermentum odio. Nunc id leo ultrices, mollis ligula in, finibus tortor. Mauris',
		button:'ĐỌC THÊM',
	},
	{
		id:5,
		img:'https://htmldemo.net/rusu/rusu/assets/img/blog/blogpage1.jpg',
		price:'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent ornare tortor ac ante egestas hendrerit. Aliquam et metus pharetra, bibendum massa nec, fermentum odio. Nunc id leo ultrices, mollis ligula in, finibus tortor. Mauris',
		button:'ĐỌC THÊM',
	},
	{
		id:6,
		img:'https://htmldemo.net/rusu/rusu/assets/img/blog/blogpage2.jpg',
		price:'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent ornare tortor ac ante egestas hendrerit. Aliquam et metus pharetra, bibendum massa nec, fermentum odio. Nunc id leo ultrices, mollis ligula in, finibus tortor. Mauris',
		button:'ĐỌC THÊM',
	},
]
const ShopPage = () => {
const Blogabout =[
	{
		id:1,
		name:'Bài đăng hình ảnh trên blog',
		price:'March 16, 2018 ',
		img:'https://htmldemo.net/rusu/rusu/assets/img/blog/blog6.jpg',
	},
	{
		id:2,
		name:'Đăng với Thư viện',
		price:'March 16, 2018 ',
		img:'https://htmldemo.net/rusu/rusu/assets/img/blog/blog7.jpg',
	},
	{
		id:3,
		name:'Đăng có âm thanh',
		price:'March 16, 2018 ',
		img:'https://htmldemo.net/rusu/rusu/assets/img/blog/blog8.jpg',
	},
	{
		id:4,
		name:'Đăng có video',
		price:'March 16, 2018 ',
		img:'https://htmldemo.net/rusu/rusu/assets/img/blog/blog9.jpg',
	},
]
	return (
		<div>
			<div className={'title'}>
				<ul>
					<li><a href={'/#'}>Trang chủ</a></li>
					<li>Blog</li>
				</ul>
			</div>
			<Row className={'blog-row'}>
				<Col span={16}>
					{
						BlogUs.map((it)=>(
							<div className={'blog-us'}>
								<div className={'blog-img'}>
									<img src={it.img} alt={''} style={{width:'400px'}}/>
								</div>
								<div className={'site-card-border-less-wrapper'}>
									<Card title="Bài đăng hình ảnh trên blog"  bordered={false} >
										<p>{it.price}</p>
										<button className={'blog-btn'}>{it.button}</button>
									</Card>
								</div>
							</div>
						))
					}
				</Col>
				<Col span={'8'}>
					<div className={'blogker'}>
						<div className={'site-card-border-less-wrapper'}>
							<Card title="TÌM KIẾM" bordered={false} style={{ width: 242 }}>
							<form action={''}>
								<input placeholder={'Tìm kiếm....'} type={'text'} className={'search'}/>
								<button type="submit" className={'btn-search'}>Tìm kiếm</button>
							</form>
							</Card>
						</div>
						<div className={'site-card-border-less-wrapper'}>
							<Card title="NHỮNG Ý KIẾN GẦN ĐÂY" bordered={false} style={{ width: 242 }}>
								<div className="post_wrapper">
									<div className="post_thumb">
										<a href={'/#'}><img src={'https://htmldemo.net/rusu/rusu/assets/img/blog/comment2.png.jpg'} alt={''}/></a>
									</div>
									<div className="post_info">
										<span> <a href={'/#'}>demo</a> says:</span>
										<a href={'/#'}>Quisque semper nunc</a>
									</div>
								</div>
								<div className="post_wrapper">
									<div className="post_thumb">
										<a href={'/#'}><img src={'https://htmldemo.net/rusu/rusu/assets/img/blog/comment2.png.jpg'} alt={''}/></a>
									</div>
									<div className="post_info">
										<span> <a href={'/#'}>admin</a> says:</span>
										<a href={'/#'}>Quisque orci porta...</a>
									</div>
								</div>
								<div className="post_wrapper">
									<div className="post_thumb">
										<a href={'/#'}><img src={'https://htmldemo.net/rusu/rusu/assets/img/blog/comment2.png.jpg'} alt={''}/></a>
									</div>
									<div className="post_info">
										<span> <a href={'/#'}>demo</a> says:</span>
										<a href={'/#'}>Quisque semper nunc</a>
									</div>
								</div>
								<div className="post_wrapper">
									<div className="post_thumb">
										<a href={'/#'}><img src={'https://htmldemo.net/rusu/rusu/assets/img/blog/comment2.png.jpg'} alt={''}/></a>
									</div>
									<div className="post_info">
										<span> <a href={'/#'}>admin</a> says:</span>
										<a href={'/#'}>Quisque semper nunc</a>
									</div>
								</div>
							</Card>
						</div>
						<div className="site-card-border-less-wrapper">
							<Card title="BÀI ĐĂNG GẦN ĐÂY" bordered={false} style={{ width: 242 }}>
								<div className="post_wrapper">
									<div className="post_thumb card-blog">
										<a href={'/#'}><img src={'https://htmldemo.net/rusu/rusu/assets/img/blog/blog6.jpg'} alt={''}/></a>
									</div>
									<div className="post_info">
										<h4><a href={'/#'}>Bài đăng hình ảnh trên blog</a></h4>
										<span>March 16, 2018 </span>
									</div>
								</div>
								<div className="post_wrapper">
									<div className="post_thumb card-blog">
										<a href={'/#'}><img src={'https://htmldemo.net/rusu/rusu/assets/img/blog/blog9.jpg'} alt={''}/></a>
									</div>
									<div className="post_info">
										<h4><a href={'/#'}>Đăng với Thư viện</a></h4>
										<span>March 16, 2018 </span>
									</div>
								</div>
								<div className="post_wrapper ">
									<div className="post_thumb card-blog">
										<a href={'/#'}><img src={'https://htmldemo.net/rusu/rusu/assets/img/blog/blog7.jpg'} alt={''}/></a>
									</div>
									<div className="post_info">
										<h4><a href={'/#'}>Đăng có âm thanh</a></h4>
										<span>March 16, 2018 </span>
									</div>
								</div>
								<div className="post_wrapper">
									<div className="post_thumb card-blog">
										<a href={'/#'}><img src={'https://htmldemo.net/rusu/rusu/assets/img/blog/blog8.jpg'} alt={''}/></a>
									</div>
									<div className="post_info">
										<h4><a href={'/#'}>Đăng bằng video</a></h4>
										<span>March 16, 2018 </span>
									</div>
								</div>
							</Card>
						</div>
						<div className="site-card-border-less-wrapper">
							<Card title="THỂ LOẠI" bordered={false} style={{ width: 242 }}>
								<ul className={'demo-blog'}>
									<li><a href={'/#'}>Âm thanh</a></li>
									<li><a href={'/#'}>Công ty</a></li>
									<li><a href={'/#'}>Bộ sưu tập</a></li>
									<li><a href={'/#'}>Hình ảnh</a></li>
									<li><a href={'/#'}>Khác</a></li>
									<li><a href={'/#'}>Đi du lịch</a></li>
								</ul>
							</Card>
						</div>
						<div className="blog-image">
							<a href={'/#'}><img src={'https://htmldemo.net/rusu/rusu/assets/img/bg/banner15.jpg'} alt={''}/></a>
						</div>
						<div className="site-card-border-less-wrapper">
							<Card title="TAG SẢN PHẨM" bordered={false} style={{ width: 242 }}>
								<ul className={'contry-blog'}>
									<li><button>Châu Á</button></li>
									<li><button>nâu</button></li>
									<li><button>euro</button></li>
								</ul>
							</Card>
						</div>
					</div>
				</Col>
			</Row>
			<div className={'blogs'}>
				{
					BlogUs.map((it)=>(
						<div className={'blog-us'}>
							<div className={'blog-img'}>
								<img src={it.img} alt={''} />
							</div>
							<div className="site-card-border-less-wrapper blognone">
								<Card title="Bài đăng hình ảnh trên blog"  bordered={false} >
									<p>{it.price}</p>
									<button className={'blog-btn'}>{it.button}</button>
								</Card>
							</div>
						</div>
					))
				}
				<div className={'site-card-border-less-wrapper blog-search '}>
					<Card title={'TÌM KIẾM bordered'} bordered={false} >
						<form action={''}>
							<input placeholder={'Tìm kiếm....'} type={'text'} className={'search'}/>
							<button type="submit" className={'btn-search'}>Tìm kiếm</button>
						</form>
					</Card>
				</div>
				<div className={'site-card-border-less-wrapper blog-search '}>
					<Card title={'NHỮNG Ý KIẾN GẦN ĐÂY'} bordered={false} >

						<div className="post_wrapper">
							<div className="post_thumb">
								<a href={'/#'}><img src={'https://htmldemo.net/rusu/rusu/assets/img/blog/comment2.png.jpg'} alt={''}/></a>
							</div>
							<div className="post_info">
								<span> <a href={'/#'}>admin</a> says:</span>
								<a href={'/#'}>Quisque orci porta...</a>
							</div>
						</div>
						<div className="post_wrapper">
							<div className="post_thumb">
								<a href={'/#'}><img src={'https://htmldemo.net/rusu/rusu/assets/img/blog/comment2.png.jpg'} alt={''}/></a>
							</div>
							<div className="post_info">
								<span> <a href={'/#'}>demo</a> says:</span>
								<a href={'/#'}>Quisque semper nunc</a>
							</div>
						</div>
						<div className="post_wrapper">
							<div className="post_thumb">
								<a href={'/#'}><img src={'https://htmldemo.net/rusu/rusu/assets/img/blog/comment2.png.jpg'} alt={''}/></a>
							</div>
							<div className="post_info">
								<span> <a href={'/#'}>admin</a> says:</span>
								<a href={'/#'}>Quisque semper nunc</a>
							</div>
						</div>
					</Card>
				</div>
				<div className={'site-card-border-less-wrapper blog-search '}>
					<Card  title={'BÀI ĐĂNG GẦN ĐÂY'} bordered={false} >
						{
							Blogabout.map((it)=>(
								<div className="post_wrapper" key={it.id}>
									<div className="post_thumb card-blog">
										<a href={'/#'}><img src={it.img} alt={''}/></a>
									</div>
									<div className="post_info">
										<h4><a href={'/#'}>{it.name}</a></h4>
										<span>{it.id}</span>
									</div>
								</div>
							))
						}

					</Card>
				</div>
				<div className="site-card-border-less-wrapper blog-search blog-travel ">
					<Card title="THỂ LOẠI" bordered={false} >
						<ul className={'demo-blog'}>
							<li><a href={'/#'}>Âm thanh</a></li>
							<li><a href={'/#'}>Công ty</a></li>
							<li><a href={'/#'}>Bộ sưu tập</a></li>
							<li><a href={'/#'}>Hình ảnh</a></li>
							<li><a href={'/#'}>Khác</a></li>
							<li><a href={'/#'}>Đi du lịch</a></li>
						</ul>
					</Card>
				</div>
				<div className={'blog-imgage'}>
					<a href={'/#'}><img src={'https://htmldemo.net/rusu/rusu/assets/img/bg/banner15.jpg'} alt={''}/></a>
				</div>
				<div className="site-card-border-less-wrapper blog-search ">
					<Card title="TAG SẢN PHẨM" bordered={false} >
						<ul className={'contry-blog'}>
							<li><button>Châu Á</button></li>
							<li><button>nâu</button></li>
							<li><button>euro</button></li>
						</ul>
					</Card>
				</div>
			</div>

			<Pagination defaultCurrent={1} total={50} className={'text'}/>
		</div>
	);
};

export default ShopPage;