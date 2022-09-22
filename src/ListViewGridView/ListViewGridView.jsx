import React from 'react';
import { useState } from 'react';
import GridView from './GridView/GridView';
import ListView from './ListView/ListView';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Segmented } from 'antd';
import './ListViewGridView.css';

const ListViewGridView = () => {
	const [list, setList] = useState(false);

	const changeLayout = () => {
		setList(!list);
	};

	return (
		<>
			<div className="navbar">
				<h1>GridViewListView</h1>
				<Segmented
					onChange={changeLayout}
					defaultValue="List"
					options={[
						{
							value: 'List',
							icon: <BarsOutlined />,
						},
						{
							value: 'Kanban',
							icon: <AppstoreOutlined />,
						},
					]}
				/>
				{/* <div>
					<div onChange={changeLayout}>
						<BarsOutlined />
					</div>
					<div onChange={changeLayout}>
						<AppstoreOutlined />
					</div>
				</div> */}
			</div>
			<div>{list ? <GridView /> : <ListView />}</div>
		</>
	);
};

export default ListViewGridView;
