import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	AppstoreOutlined,
	ContainerOutlined,
	DesktopOutlined,
	MailOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
} from '@ant-design/icons';

const SideMenu = ({ logout }) => {
	const navigate = useNavigate();

	// const [collapsed, setCollapsed] = useState(false);

	const handleClick = ({ key }) => {
		if (key === '/signout') {
			navigate('/signout');
		} else {
			navigate(key);
		}
	};

	// const logout = () => {
	// 	setCollapsed(!collapsed);
	// };

	const getItems = (label, key, icon, children, type) => {
		return {
			key,
			icon,
			label,
		};
	};

	const items = [
		getItems('Home', '/home', <AppstoreOutlined />),
		getItems('About', '/about', <ContainerOutlined />),
		getItems('Contact', '/contact', <DesktopOutlined />),
		getItems('Dashboard', '/dashboard', <MailOutlined />),
		getItems('Mails', '/mails', <MailOutlined />),
		// getItems('Home', '/home', <AppstoreOutlined />),
		// getItems('About', '/about', <ContainerOutlined />),
		// getItems('Contact', '/contact', <DesktopOutlined />),
		// getItems('Dashboard', '/dashboard', <MailOutlined />),
		// getItems('Mails', '/mails', <MailOutlined />),
		// getItems('Home', '/home', <AppstoreOutlined />),
		// getItems('About', '/about', <ContainerOutlined />),
		// getItems('Contact', '/contact', <DesktopOutlined />),
		// getItems('Dashboard', '/dashboard', <MailOutlined />),
		// getItems('Mails', '/mails', <MailOutlined />),
		// getItems('Home', '/home', <AppstoreOutlined />),
		// getItems('About', '/about', <ContainerOutlined />),
		// getItems('Contact', '/contact', <DesktopOutlined />),
		// getItems('Dashboard', '/dashboard', <MailOutlined />),
		// getItems('Mails', '/mails', <MailOutlined />),
		// getItems('Home', '/home', <AppstoreOutlined />),
		// getItems('About', '/about', <ContainerOutlined />),
		// getItems('Contact', '/contact', <DesktopOutlined />),
		// getItems('Dashboard', '/dashboard', <MailOutlined />),
		// getItems('Mails', '/mails', <MailOutlined />),
		// getItems('Home', '/home', <AppstoreOutlined />),
		// getItems('About', '/about', <ContainerOutlined />),
		// getItems('Contact', '/contact', <DesktopOutlined />),
		// getItems('Dashboard', '/dashboard', <MailOutlined />),
		// getItems('Mails', '/mails', <MailOutlined />),
		// getItems('Home', '/home', <AppstoreOutlined />),
		// getItems('About', '/about', <ContainerOutlined />),
		// getItems('Contact', '/contact', <DesktopOutlined />),
		// getItems('Dashboard', '/dashboard', <MailOutlined />),
		// getItems('Mails', '/mails', <MailOutlined />),
		// getItems('Home', '/home', <AppstoreOutlined />),
		// getItems('About', '/about', <ContainerOutlined />),
		// getItems('Contact', '/contact', <DesktopOutlined />),
		// getItems('Dashboard', '/dashboard', <MailOutlined />),
		// getItems('Mails', '/mails', <MailOutlined />),
		// getItems('Home', '/home', <AppstoreOutlined />),
		// getItems('About', '/about', <ContainerOutlined />),
		// getItems('Contact', '/contact', <DesktopOutlined />),
		// getItems('Dashboard', '/dashboard', <MailOutlined />),
		// getItems('Mails', '/mails', <MailOutlined />),
		// getItems('Home', '/home', <AppstoreOutlined />),
		// getItems('About', '/about', <ContainerOutlined />),
		// getItems('Contact', '/contact', <DesktopOutlined />),
		// getItems('Dashboard', '/dashboard', <MailOutlined />),
		// getItems('Mails', '/mails', <MailOutlined />),
		// getItems('Home', '/home', <AppstoreOutlined />),
		// getItems('About', '/about', <ContainerOutlined />),
		// getItems('Contact', '/contact', <DesktopOutlined />),
		// getItems('Dashboard', '/dashboard', <MailOutlined />),
		// getItems('Mails', '/mails', <MailOutlined />),
		// getItems('Home', '/home', <AppstoreOutlined />),
		// getItems('About', '/about', <ContainerOutlined />),
		// getItems('Contact', '/contact', <DesktopOutlined />),
		// getItems('Dashboard', '/dashboard', <MailOutlined />),
		// getItems('Mails', '/mails', <MailOutlined />),
		// getItems('Home', '/home', <AppstoreOutlined />),
		// getItems('About', '/about', <ContainerOutlined />),
		// getItems('Contact', '/contact', <DesktopOutlined />),
		// getItems('Dashboard', '/dashboard', <MailOutlined />),
		// getItems('Mails', '/mails', <MailOutlined />),
		// getItems('Home', '/home', <AppstoreOutlined />),
		// getItems('About', '/about', <ContainerOutlined />),
		// getItems('Contact', '/contact', <DesktopOutlined />),
		// getItems('Dashboard', '/dashboard', <MailOutlined />),
		// getItems('Mails', '/mails', <MailOutlined />),
		// getItems('Home', '/home', <AppstoreOutlined />),
		// getItems('About', '/about', <ContainerOutlined />),
		// getItems('Contact', '/contact', <DesktopOutlined />),
		// getItems('Dashboard', '/dashboard', <MailOutlined />),
		// getItems('Mails', '/mails', <MailOutlined />),
	];

	// const data = [
	// 	...items,
	// 	{
	// 		key: '',
	// 		label: '',
	// 		icon: (
	// 			<button
	// 				onClick={logout}
	// 				style={{
	// 					border: 'none',
	// 					backgroundColor: 'transparent',
	// 					padding: '0',
	// 				}}
	// 			>
	// 				<AppstoreOutlined color="red" />
	// 			</button>
	// 		),
	// 	},
	// ];

	return (
		<div>
			<div style={{ color: 'red', fontSize: '15px' }}> Logo</div>
			<Menu
				onClick={handleClick}
				theme="light"
				mode="inline"
				defaultSelectedKeys={['1']}
				items={items}
			/>
		</div>
	);
};

export default SideMenu;
