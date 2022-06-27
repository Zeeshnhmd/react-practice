import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
	const [users, setUsers] = useState([
		{
			img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
			name: 'Jhon Doe',
			email: 'jhondoe@gmail.com',
		},
		{
			img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
			name: 'Jhan Doe',
			email: 'jhondoe@gmail.com',
		},
		{
			img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
			name: 'Prateek Jain',
			email: 'jhondoe@gmail.com',
		},
		{
			img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
			name: 'Faizan Ahmad',
			email: 'jhondoe@gmail.com',
		},
	]);
	return (
		<div className="App">
			{users.map(({ img, name, email }) => (
				<Child img={img} name={name} email={email} />
			))}
		</div>
	);
};

export default Parent;
