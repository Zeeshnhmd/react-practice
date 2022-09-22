import React, { Children, useState } from 'react';

import { Menu, Button, Layout } from 'antd';
import SideMenu from './SideMenu';
const { Sider, Content } = Layout;

const CollapseLayout = ({ children }) => {
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<>
			<Layout hasSider>
				<Sider
					style={{
						backgroundColor: 'white',
						overflow: 'auto',
						height: '100vh',
						position: 'fixed',
						left: 0,
						top: 0,
						bottom: 0,
					}}
					trigger={trigger}
					collapsible
					collapsed={collapsed}
					onCollapse={(value) => setCollapsed(value)}
				>
					<SideMenu logout={toggleCollapsed} />
				</Sider>
				<Layout className="site-layout">
					<Content
						className="site-layout-background"
						style={{
							margin: '24px 16px',
							padding: 24,
							minHeight: 280,
							overflow: 'initial',
						}}
					>
						{children}
					</Content>
				</Layout>
			</Layout>
		</>
	);
};

export default CollapseLayout;

const trigger = () => {
	return <button>Hi </button>;
};
