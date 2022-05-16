import React from 'react';
import { Layout } from 'antd';
import MyHeader from './Header'
import Myfooter from './footer'
const Main = ({children}) => {
	return (
		<Layout style={{backgroundColor: 'white'}}>
			<MyHeader/>
			{children}
			<Myfooter/>
		</Layout>
	);
};

export default Main;