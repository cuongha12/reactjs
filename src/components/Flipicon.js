import React from 'react';
import { Row, Col } from 'antd';

const Flipicon = () => {
	return (
		<div className={'home-bade'}>
			<Row>
				<Col span={12}>
					<div className={'boat'}>
						<div className={'icone'}>
							<img alt={''} src={'https://htmldemo.net/rusu/rusu/assets/img/about/shipping1.png'}/>
						</div>
						<div className={'shipping-content'}>
							<h4>{'Miễn phí vận chuyển'}</h4>
							<p>{'Tất cả đơn hàng'}</p>
						</div>
					</div>
					<div className={'boat'}>
						<div className={'icone'}>
							<img alt={''} src={'https://htmldemo.net/rusu/rusu/assets/img/about/shipping2.png'}/>
						</div>
						<div className={'shipping-content'}>
							<h4>{'Miễn phí vận chuyển'}</h4>
							<p>{'Tất cả đơn hàng'}</p>
						</div>
					</div>
				</Col>
				<Col span={12}>
					<div className={'boat'}>
						<div className={'icone'}>
							<img alt={''} src={'https://htmldemo.net/rusu/rusu/assets/img/about/shipping3.png'}/>
						</div>
						<div className={'shipping-content'}>
							<h4>{'Miễn phí vận chuyển'}</h4>
							<p>{'Tất cả đơn hàng'}</p>
						</div>
					</div>
					<div className={'boat'}>
						<div className={'icone'}>
							<img alt={''} src={'https://htmldemo.net/rusu/rusu/assets/img/about/shipping4.png'}/>
						</div>
						<div className={'shipping-content'}>
							<h4>{'Miễn phí vận chuyển'}</h4>
							<p>{'Tất cả đơn hàng'}</p>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Flipicon;