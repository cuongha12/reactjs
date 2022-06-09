import './App.css';
import Routes from "./routes";
import Main from "./components/Main";
import "antd/dist/antd.css";
import {useLocation} from "react-router-dom";
import React, {useLayoutEffect} from "react";

function App() {
	React.useEffect(() => {
		window.process = {
			...window.process,
		};
	}, []);

	return (
		<Main>
			<Wrapper>
				<Routes/>
			</Wrapper>
		</Main>
		
	);
}

const Wrapper = ({children}) => {
	const location = useLocation();
	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0);
	}, [location.pathname]);
	return children
}

export default App;
