import React from 'react';

const Child = ({ img, name, email }) => {
	return (
		<div className="App">
			<div className="box">
				<img src={img} alt="" />
				<div className="name">{name}</div>
				<div className="email">{email}</div>
			</div>
		</div>
	);
};

export default Child;
