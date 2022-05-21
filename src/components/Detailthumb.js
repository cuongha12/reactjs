import React from 'react';
const {images, tab, myRef} = this.props;
const Detailthumb = () => {


	return (
		<div>
			<div className="thumb" ref={myRef}>
				{
					images.map((img, index) =>(
						<img src={img} alt="" key={index}
							 onClick={() => tab(index)}
						/>
					))
				}
			</div>
		</div>
	);
};

export default Detailthumb;