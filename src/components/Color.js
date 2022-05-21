import React from 'react'

const Color = () => {
	const {colors} = this.props;
	return (
		<div>
			<div className="colors">
				{
					colors.map((color, index) =>(
						<button style={{background: color}} key={index}></button>
					))
				}
			</div>
		</div>
	);
};

export default Color;