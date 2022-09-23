import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from './Components/SideBar/SideBar';
import {
	Analytics,
	Dashboard,
	Filemanager,
	Messages,
	Order,
	Saved,
	Settings,
	User,
} from './Pages';

const MainDashboard = () => {
	return (
		<div>
			<SideBar>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/analytics" element={<Analytics />} />
					<Route path="/filemanager" element={<Filemanager />} />
					<Route path="/messages" element={<Messages />} />
					<Route path="/order" element={<Order />} />
					<Route path="/saved" element={<Saved />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/users" element={<User />} />
				</Routes>
			</SideBar>
		</div>
	);
};

export default MainDashboard;
