import React from 'react';
import { Layout } from 'antd';
import MyHeader from './Header'
import Myfooter from './footer'
import ScrollUpButton from "react-scroll-up-button";
import {ArrowUpOutlined} from '@ant-design/icons';
const Main = ({children}) => {
	return (
		<Layout style={{backgroundColor: 'white'}}>
			<MyHeader/>
			{children}
			<ScrollUpButton
				ContainerClassName="AnyClassForContainer"
				TransitionClassName="AnyClassForTransition"
			>
				<div >
					<ArrowUpOutlined />
				</div>

			</ScrollUpButton>
			<Myfooter/>
		</Layout>
	);
};

export default Main;