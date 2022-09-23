import { NavLink } from 'react-router-dom';
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { BiAnalyse, BiSearch } from 'react-icons/bi';
import { BiCog } from 'react-icons/bi';
import { AiFillHeart, AiTwotoneFileExclamation } from 'react-icons/ai';
import { BsCartCheck } from 'react-icons/bs';
import { useState } from 'react';
import SidebarMenu from '../SideBarMenu/SideBarMenu';
import './SideBar.css';

const SideBar = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const routes = [
		{
			path: '/',
			name: 'Dashboard',
			icon: <FaHome />,
		},
		{
			path: '/users',
			name: 'Users',
			icon: <FaUser />,
		},
		{
			path: '/messages',
			name: 'Messages',
			icon: <MdMessage />,
		},
		{
			path: '/analytics',
			name: 'Analytics',
			icon: <BiAnalyse />,
		},
		{
			path: '/file-manager',
			name: 'File Manager',
			icon: <AiTwotoneFileExclamation />,
			subRoutes: [
				{
					path: '/settings/profile',
					name: 'Profile ',
					icon: <FaUser />,
				},
				{
					path: '/settings/2fa',
					name: '2FA',
					icon: <FaLock />,
				},
				{
					path: '/settings/billing',
					name: 'Billing',
					icon: <FaMoneyBill />,
				},
			],
		},
		{
			path: '/order',
			name: 'Order',
			icon: <BsCartCheck />,
		},
		{
			path: '/settings',
			name: 'Settings',
			icon: <BiCog />,
			exact: true,
			subRoutes: [
				{
					path: '/settings/profile',
					name: 'Profile ',
					icon: <FaUser />,
				},
				{
					path: '/settings/2fa',
					name: '2FA',
					icon: <FaLock />,
				},
				{
					path: '/settings/billing',
					name: 'Billing',
					icon: <FaMoneyBill />,
				},
			],
		},
		{
			path: '/saved',
			name: 'Saved',
			icon: <AiFillHeart />,
		},
	];

	return (
		<div>
			<div className="main-container">
				<div className={`sidebar `}>
					<div className="top_section">
						{isOpen && <h1 className="logo">DoSomeCoding</h1>}

						<div className="bars">
							<FaBars onClick={toggle} />
						</div>
					</div>
					{/* <div className="search">
						<div className="search_icon">
							<BiSearch />
						</div>
						<AnimatePresence>
							{isOpen && (
								<motion.input
									initial="hidden"
									animate="show"
									exit="hidden"
									variants={inputAnimation}
									type="text"
									placeholder="Search"
								/>
							)}
						</AnimatePresence>
					</div> */}
					<section className="routes">
						{routes.map((route, index) => {
							if (route.subRoutes) {
								return (
									<SidebarMenu
										setIsOpen={setIsOpen}
										route={route}
										isOpen={isOpen}
									/>
								);
							}

							return (
								<NavLink
									to={route.path}
									key={index}
									className="link"
									activeClassName="active"
								>
									<div className="icon">{route.icon}</div>
									<>{isOpen && <div className="link_text">{route.name}</div>}</>
								</NavLink>
							);
						})}
					</section>
				</div>

				<main>{children}</main>
			</div>
		</div>
	);
};

export default SideBar;
