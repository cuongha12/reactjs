import React from 'react';
import {Route, Routes as Rou} from "react-router-dom";
import routes from "./groupRoutes";

const Routes = () => {
	return (
		<Rou>
			{routes.map((item)=>(
				<Route key={item.path} exact path={item.path} element={item.component}/>
			))}
		</Rou>
	);
};

export default Routes;