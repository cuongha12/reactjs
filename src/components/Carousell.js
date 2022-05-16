// import React, {useRef} from 'react';
// import {Carousel} from "antd";
// import { LeftOutlined, RightOutlined} from '@ant-design/icons';
//
//
//
// const settings = {
// 	infinite: false,
// 	speed: 500,
// 	slidesToShow: 5,
// 	initialSlide: 0,
// 	responsive: [
// 		{
// 			breakpoint: 1024,
// 			settings: {
// 				slidesToShow: 3,
// 				slidesToScroll: 3,
// 				infinite: true,
// 				dots: true
// 			}
// 		},
// 		{
// 			breakpoint: 600,
// 			settings: {
// 				slidesToShow: 2,
// 				slidesToScroll: 2,
// 				initialSlide: 2
// 			}
// 		},
// 		{
// 			breakpoint: 480,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1
// 			}
// 		}
// 	],
// 	arrows: true
// };
//
// const Carousell = () => {
//
// 	const Carou = useRef()
//
// 	return (
// 		<div className={'brand-footer'}>
// 			<LeftOutlined onClick={()=>Carou.current?.prev()} style={{cursor: 'pointer'}}/>
// 			<Carousel {...settings} draggable dots={false} ref={Carou} style={{width: '98%'}}>
// 				<div className={'brand_container'}>
// 					<img src={'https://htmldemo.net/rusu/rusu/assets/img/brand/brand1.jpg'} alt={''}/>
// 				</div>
// 				<div className={'brand_container'}>
// 					<img src={'https://htmldemo.net/rusu/rusu/assets/img/brand/brand2.jpg'} alt={''}/>
// 				</div>
// 				<div className={'brand_container'}>
// 					<img src={'https://htmldemo.net/rusu/rusu/assets/img/brand/brand3.jpg'} alt={''}/>
// 				</div>
// 				<div className={'brand_container'}>
// 					<img src={'https://htmldemo.net/rusu/rusu/assets/img/brand/brand4.jpg'} alt={''}/>
// 				</div>
// 				<div className={'brand_container'}>
// 					<img src={'https://htmldemo.net/rusu/rusu/assets/img/brand/brand5.jpg'} alt={''}/>
// 				</div>
// 				<div className={'brand_container'}>
// 					<img src={'https://htmldemo.net/rusu/rusu/assets/img/brand/brand5.jpg'} alt={''}/>
// 				</div>
// 				<div className={'brand_container'}>
// 					<img src={'https://htmldemo.net/rusu/rusu/assets/img/brand/brand1.jpg'} alt={''}/>
// 				</div>
// 				<div className={'brand_container'}>
// 					<img src={'https://htmldemo.net/rusu/rusu/assets/img/brand/brand2.jpg'} alt={''}/>
// 				</div>
// 				<div className={'brand_container'}>
// 					<img src={'https://htmldemo.net/rusu/rusu/assets/img/brand/brand3.jpg'} alt={''}/>
// 				</div>
// 				<div className={'brand_container'}>
// 					<img src={'https://htmldemo.net/rusu/rusu/assets/img/brand/brand4.jpg'} alt={''}/>
// 				</div>
// 				<div className={'brand_container'}>
// 					<img src={'https://htmldemo.net/rusu/rusu/assets/img/brand/brand5.jpg'} alt={''}/>
// 				</div>
// 				<div className={'brand_container'}>
// 					<img src={'https://htmldemo.net/rusu/rusu/assets/img/brand/brand5.jpg'} alt={''}/>
// 				</div>
// 			</Carousel>
// 			<RightOutlined onClick={()=>Carou.current?.prev()} style={{cursor: 'pointer'}}/>
// 		</div>
// 	);
// };
//
// export default Carousell;