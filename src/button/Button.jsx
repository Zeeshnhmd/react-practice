import React, { useState } from 'react';

const Button = () => {
	const [buttonText, setButtonText] = useState('click');
	const handleClick = () => {
		setButtonText('New Text');
	};
	return <button onClick={handleClick}>{buttonText}</button>;
};

export default Button;
