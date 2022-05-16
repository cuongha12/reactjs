import React from 'react';
import {Col} from "antd";

const FlipIconText = ({
	source,
	title = '',
	content = ''
}) => {
	return (
		<Col lg={6} xs={24} md={12} className={'boat'}>
			<div className={'icone'}>
				<img alt={''} src={source}/>
			</div>
			<div className={'shipping-content'}>
				<h4>{title}</h4>
				<p>{content}</p>
			</div>
		</Col>
	);
};

export default FlipIconText;