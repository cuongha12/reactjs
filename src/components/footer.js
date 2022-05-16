import React from 'react';
import '../css/footer.css'
import { Row, Col } from 'antd';


 import {HeartOutlined,FacebookOutlined,TwitterOutlined,AppleOutlined,YoutubeOutlined,LinkedinOutlined } from "@ant-design/icons";
const Footer = () => {



	return (
		<div>
			<div className={'first'}>
				<Row>
					<Col span={'12'} className={'flex'}>
						<div className={'card-footer'}>
							<img src={'https://htmldemo.net/rusu/rusu/assets/img/about/newsletter-icon.png'} alt={''}/>
						</div>
						<div className={'posts'}>
							<h3>Sign Up For Newsletters</h3>
							<p>Get E-mail updates about our latest shop and special offers.</p>
						</div>
					</Col>
					<Col span={'12'} >
						<div className={'subscribe_form'}>
							<form id={'mc-form'} className={'mc-form footer-newsletter'} noValidate={true}>
								<input id={'mc-email'} type={'text'} autoComplete={'off'} placeholder={'Địa chỉ email của bạn...'} name={'EMAIL'}/>
								<button id={'mc-submit'}>Đặt mua</button>
							</form>
						</div>
					</Col>
				</Row>
			</div>
			<div className={'main'}>
				<Row gutter={[12, 0]}>
					<Col lg={8} sm={8} xs={24} >
						<div className={'widgets_container contact_us'}>
								<h3>Contacts us</h3>
							<div className={'footer_contact'}>
								<ul>
									<li><span>Address:</span><span>Địa chỉ của bạn ở đây ..</span></li>
									<li><span>Phone:</span><span><a href={'/#'}>0123456789</a></span></li>
									<li><span>Email:</span><span><a href={'/#'}>demo@example.com</a></span></li>
									<li><span>Fax:</span><span><a href={'/#'}>0123456789</a></span></li>
								</ul>
							</div>
						</div>
					</Col>
					<Col lg={4} sm={8} xs={24} >
						<div className={'widgets_container widget_menu'}>
							<h3>THÔNG TIN</h3>
							<div className={'footer_menu'}>
								<ul>
									<li><a href={'/#'}>Về chúng tôi</a></li>
									<li><a href={'/#'}>Thông tin giao hàng</a></li>
									<li><a href={'/#'}>Thông tin giao hàng</a></li>
									<li><a href={'/#'}>Hàng bán tốt nhất</a></li>
									<li><a href={'/#'}>Tài khoản của tôi</a></li>
									<li><a href={'/#'}>lịch sử đơn hàng</a></li>
								</ul>
							</div>
						</div>
					</Col>
					<Col lg={4} sm={8} xs={24} >
						<div className={'widgets_container widget_menu'}>
							<h3>TÀI KHOẢN CỦA TÔI</h3>
							<div className={'footer_menu'}>
								<ul>
									<li><a href={'/#'}>Tài khoản của tôi</a></li>
									<li><a href={'/#'}>Giỏ hàng</a></li>
									<li><a href={'/#'}>Danh sách mong muốn</a></li>
									<li><a href={'/#'}>Giá giảm</a></li>
									<li><a href={'/#'}>lịch sử đơn hàng</a></li>
									<li><a href={'/#'}>Đơn hàng quốc tế</a></li>
								</ul>
							</div>
						</div>
					</Col>
					<Col lg={4} sm={8} xs={24} >
						<div className={'widgets_container widget_menu'}>
							<h3>Dịch vụ khách hàng</h3>
							<div className={'footer_menu'}>
								<ul>
									<li><a href={'/#'}>Sơ đồ trang web</a></li>
									<li><a href={'/#'}>Tài khoản của tôi</a></li>
									<li><a href={'/#'}>Thông tin giao hàng</a></li>
									<li><a href={'/#'}>lịch sử đơn hàng</a></li>
									<li><a href={'/#'}>Danh sách mong muốn</a></li>
									<li><a href={'/#'}>Đặc biệt</a></li>
								</ul>
							</div>
						</div>
					</Col>
					<Col lg={4} sm={8} xs={24} >
						<div className={'widgets_container widget_menu'}>
							<h3>Hãy để chúng tôi giúp bạn</h3>
							<div className={'footer_menu'}>
								<ul>
									<li><a href={'/#'}>Tài khoản của tôi</a></li>
									<li><a href={'/#'}>Về chúng tôi</a></li>
									<li><a href={'/#'}>Giá cước vận chuyển</a></li>
									<li><a href={'/#'}>Amazon Prime</a></li>
									<li><a href={'/#'}>Danh sách mong muốn</a></li>
									<li><a href={'/#'}>Quản lý nội dung của bạn</a></li>
								</ul>
							</div>
						</div>
					</Col>
				</Row>
			</div>
			<div className={'end'}>
				<Row>
					<Col span={'12'}>
						<div className="copyright_area">
							<p>© 2021 <span className={'text-uppercase'}>RUSU</span>. Made with <HeartOutlined className={'tim'}/> By <a  href={'/#'}>HasThemes</a></p>
						</div>
					</Col>
					<Col span={'12'}>
						<div className={'footer-icon'}>
							<ul>
								<li><a href={'/#'}><FacebookOutlined /></a></li>
								<li><a href={'/#'}><TwitterOutlined /></a></li>
								<li><a href={'/#'}><AppleOutlined /></a></li>
								<li><a href={'/#'}><YoutubeOutlined /></a></li>
								<li><a href={'/#'}><LinkedinOutlined /></a></li>
							</ul>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Footer;