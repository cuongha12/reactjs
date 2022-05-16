import React from 'react';



const Banner = ({
	title1 = '',
	title2 = '',
	content = '',
	btnText = '',
	source,
	animate = false
}) => {

	return (
		<div style={{
			height: 'auto',
			color: 'white',
			backgroundImage: `url('${source}')`
		}} className={'banner-carousel'}>
			<h1 className={animate?'text-animation':''}>
				{title1}
				<br/>
				{title2}
			</h1>
			<div style={{
				flexWrap: 'wrap',
				maxWidth: '482px'
			}} className={animate?'content-animation':''}>
				<p>{content}</p>
			</div>
			<button className={`btn-now ${animate&&('btn-animation')}`}>
				{btnText}
			</button>
		</div>



	);
};

export default Banner;