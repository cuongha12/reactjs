import React from 'react';
import {Col} from "antd";
const Zoom = ({
	zooms,
			  }) => {
	return (

			<Col span={12}>
				<div className={'zoom'}>
					<img src={zooms} alt={'ds'}/>
				</div>
			</Col>

	);
};

export default Zoom;