import React, {useCallback, useState} from 'react';
import { Row, Col } from 'antd';
import '../css/header.css'
import MenuHeader from "./MenuHeader";
import MenuItems from "../contants/MenuItems";
import DropDownMenu from "./DropDownMenu";
import {SettingOutlined, SnippetsOutlined,CloseOutlined,CopyOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button,  Space } from 'antd';
import { DownOutlined,MailOutlined ,FacebookOutlined,TwitterOutlined,GooglePlusOutlined,YahooOutlined,LinkedinOutlined} from '@ant-design/icons';
import CsLink from "./CsLink";
import path from "../contants/path";

const menu = (
	<Menu
		items={[
			{
				label: 'Tất cả danh mục',
				key: '1',

			},
			{
				label: 'Phụ kiện',
				key: '2',

			},
			{
				label: 'Phụ kiện và hơn thế nữa',
				key: '3',

			},
			{
				label: 'Butters & Eggs',
				key: '4',

			},
			{
				label: 'Máy ảnh & Video',
				key: '5',

			},
			{
				label: 'Mornitors',
				key: '6',

			},
			{
				label: 'Máy tính bảng',
				key: '7',

			},
			{
				label: 'Máy tính xách tay',
				key: '8',

			},
			{
				label: 'Túi xách',
				key: '9',

			},
			{
				label: 'Tai nghe & loa ngoài',
				key: '10',

			},
			{
				label: 'Thảo mộc & thực vật',
				key: '11',

			},
			{
				label: 'Rau',
				key: '12',

			},
			{
				label: 'Cửa hàng',
				key: '13',

			},
			{
				label: 'Máy tính xách tay & Máy tính để bàn',
				key: '14',

			},
			{
				label: 'Xem',
				key: '15',

			},
			{
				label: 'Điện tử',
				key: '16',

			},
		]}
	/>
);

const paths = [
	{path: path.HOME, name: 'Trang chủ'},
	{path: path.SHOP, name: 'Cửa hàng'},
	{path: path.BLOG, name: 'Blog'},
	{path: path.CONTACT, name: 'Liên hệ'},
]

const Header = () => {

	const onMenuClickCallback = useCallback(()=>{
		setIsOpenMenu(true)
	},[]);

	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const onClose = () => {
		setIsOpenMenu(false)
	}

	return (
		<>
			<Row className={'Strong'}>
				<Col span={12}>
					<div className={'language'}>
						<DropDownMenu items={MenuItems.language_menu} label={'Ngôn ngữ: '}/>
					</div>
				</Col>
				<Col span={12}>
					<div className={'support'}>
						<p>Đặt hàng trước 17:30, giao hàng trong ngày - Hỗ trợ: <a href={'/#'} className={'phone '}>{'0982981281'}</a></p>
						<span>
							<SnippetsOutlined />
							<a href={'/#'} className={'phone'}>{'Yêu thích'}</a>
						</span>
						<DropDownMenu items={MenuItems.setting_menu} classname={'setting'}
									  label={(<><SettingOutlined/> {'Cài đặt'}</>)}
									  defaultValue={''}/>
					</div>
				</Col>
			</Row>
			<MenuHeader onMenuClick={onMenuClickCallback}/>
			<div className={`menu-home ${!isOpenMenu && 'none'}`}>
				<div className={'overlay'} onClick={onClose}/>
				<div className={'home-menu'}>
					<div className={'canvas_close'}>
						<span onClick={onClose} className={'circle-btn'}>
							<CloseOutlined className={'home-icon'}/>
						</span>
					</div>
					<div className={'header_support'}>
						<p>Đặt hàng trước 17:30, giao hàng trong ngày - Hỗ trợ: <a href={'/#'} className={'phone'}>{'0982981281'}</a></p>
						<div className={'header_account'}>
							<ul>
								<li><DropDownMenu items={MenuItems.language_menu} label={'Ngôn ngữ: '}/></li>
							</ul>
						</div>
						<div className={'header_account'}>
							<ul>
								<li className={'wishlist'}>
									<a href={'/#'}><CopyOutlined />Wishlist</a>
								</li>
								<li className={'wishlist'}>
									<DropDownMenu items={MenuItems.setting_menu} classname={'setting'}
												  label={(<><SettingOutlined/> {'Cài đặt'}</>)}
												  defaultValue={''}/>
								</li>
							</ul>
							<div className={'search_box'}>
								<input placeholder={'Tìm kiếm sản phẩm ...'} type={'text'}/>
								<button type={'submit'} className={'seacrch-box'}>Tìm kiếm</button>
							</div>
							<Dropdown overlay={menu} >
								<Button>
									<Space >
										Tất cả danh mục
										<DownOutlined />
									</Space>
								</Button>
							</Dropdown>
							<div className={'menu_item'}>
								<ul>
									{paths.map((it, index)=>(
										<li onClick={onClose} key={it.path} className={`${index !== 0 && 'lis'}`}>
											<CsLink to={it.path}>
												{it.name}
											</CsLink>
										</li>
									))}
								</ul>
							</div>
							<div className="Offcanvas_footer">
								<span><a href={'/#'}><MailOutlined /> info@yourdomain.com</a></span>
								<ul>
									<li ><a href={'/#'}><FacebookOutlined /></a></li>
									<li ><a href={'/#'}><TwitterOutlined /></a></li>
									<li ><a href={'/#'}><GooglePlusOutlined /></a></li>
									<li ><a href={'/#'}><YahooOutlined /></a></li>
									<li ><a href={'/#'}><LinkedinOutlined /></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;