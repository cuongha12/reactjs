import React from 'react';
import {Col} from "antd";
const Zoomcard = ({

					  card,

}) => {
	return (
		<Col span={8} className={'product'}>
			<div className={'card-img'}>
				<img src={card} alt={'banner-1'}/>
			</div>
		</Col>

	);
};

export default Zoomcard;