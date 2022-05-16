import React, { useState} from 'react';
import {Carousel} from "antd";
import '../css/home.css'
import { Row, Col } from 'antd';
import Banner from "../components/Banner";
import FlipIconText from "../components/FlipIconText";
import images from "../contants/images/images";
import Zoomcard from "../components/Zoomcard";
import Zoom from "../components/Zoom";
import DealInDay from "../components/DealInDay";
import Contacthome from "../components/Contacthome";
import LaptopHome from "../components/LaptopHome";
import Pricelaptop from "../components/Pricelaptop";
// import Flipicon from "../components/Flipicon";
// import Carousell from "../components/Carousell";

const flipIconTexts = [
	<FlipIconText
		key={'1'}
		title={'Miễn phí vận chuyển'}
		content={'Tất cả đơn hàng'}
		source={images.shipping1}
	/>,
	<FlipIconText
		key={'2'}
		title={'Miễn phí vận chuyển'}
		content={'Tất cả đơn hàng'}
		source={'https://htmldemo.net/rusu/rusu/assets/img/about/shipping2.png'}
	/>,
	<FlipIconText
		key={'3'}
		title={'Miễn phí vận chuyển'}
		content={'Tất cả đơn hàng'}
		source={'https://htmldemo.net/rusu/rusu/assets/img/about/shipping3.png'}
	/>,
	<FlipIconText
		key={'4'}
		title={'Miễn phí vận chuyển'}
		content={'Tất cả đơn hàng'}
		source={'https://htmldemo.net/rusu/rusu/assets/img/about/shipping4.png'}
	/>
]
const zomss =[
	<Zoom key={'1'} zooms={images.baner4}/>,
	<Zoom key={'2'} zooms={images.baner5}/>,
]
const zoomcard =[
	<Zoomcard key={'1'} card={images.baner1}/>,
	<Zoomcard key={'2'} card={images.baner2}/>,
	<Zoomcard key={'3'} card={images.baner3}/>,
]



const HomePage = () => {

	const [indexBanner, setIndexBanner] = useState(0);

	return (
		<div>
			<div className={'banner'}>
				<Carousel beforeChange={(c, t)=>{
					setIndexBanner(t)
				}} >
					<Banner
						title1={'Best Skin'}
						title2={'In The Word 2021'}
						content={'consectetur adipisicing elit. Itaque dolorem, aliquam quos.' +
							' Molestias dolorum expli cabo totam illum itaque sit'}
						btnText={'Shopping now'}
						source={'https://htmldemo.net/rusu/rusu/assets/img/slider/slider1.jpg'}
						animate={indexBanner===0}
					/>
					<Banner
						title1={'Best Skin'}
						title2={'In The Word 2021'}
						content={'consectetur adipisicing elit. Itaque dolorem, aliquam quos.' +
							' Molestias dolorum expli cabo totam illum itaque sit'}
						btnText={'Shopping now'}
						source={'https://htmldemo.net/rusu/rusu/assets/img/slider/slider2.jpg'}
						animate={indexBanner===1}
					/>
					<Banner
						title1={'Best Skin'}
						title2={'In The Word 2021'}
						content={'consectetur adipisicing elit. Itaque dolorem, aliquam quos.' +
							' Molestias dolorum expli cabo totam illum itaque sit'}
						btnText={'Shopping now'}
						source={'https://htmldemo.net/rusu/rusu/assets/img/slider/slider3.jpg'}
						animate={indexBanner===2}
					/>
				</Carousel>

			</div>
			<div className={'item-turn'}>
				<Row>
					{flipIconTexts.map((it)=>(
						it
					))}
				</Row>
			</div>
			<div className={'contact'}>
				<Row>
					{zoomcard.map((x)=>(
						x
					))}
				</Row>
			</div>
			<DealInDay/>
			<div className={'detheo'}>
				<Row>
					{zomss.map((y)=>(
						y
					))}
				</Row>
			</div>
			<Contacthome/>

			<div className={'title'}>
				<Row>
					<Col span={8}>
						<h2 >MÁY TÍNH & LAPTOP</h2>
					</Col>

				</Row>
			</div>
			<LaptopHome/>
			<Pricelaptop/>
			{/*<div>*/}
			{/*	<Carousell/>*/}
			{/*</div>*/}
		</div>
	);
}





export default HomePage;