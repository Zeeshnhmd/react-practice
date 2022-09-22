import './App.css';
import Search1 from './FilterSearch/Search1';
import Search2 from './FilterSearch/Search2';
import { useEffect, useState } from 'react';
import { Users } from './FilterSearch/users';
import Button from './button/Button';
import Pagination from './Pagination/Pagination';
import Parent from './propsPassing/Parent';
import Fetch from './FetchData/Fetch';
import ApexChart from './ApexChart/ApexChart';
import ReactPagination from './ReactPagination/ReactPagination';
import ReducerHook from './Hooks/UseReducer';
import CollapseLayout from './AntDesign/Layout/CollapseLayout';

import Contents from './AntDesign/Contents';

function App() {
	const [query, setQuery] = useState('');

	// method for search
	const search1 = (data) => {
		return data.filter((item) => item.first_name.toLowerCase().includes(query));
	};

	// method for search 2
	const search2 = (data) => {
		return data.filter(
			(item) =>
				item.first_name.toLowerCase().includes(query) ||
				item.last_name.toLowerCase().includes(query) ||
				item.email.toLowerCase().includes(query)
		);
	};

	// easy method for search2
	const keys = ['first_name', 'last_name', 'email', 'gender'];

	const searchEastMethod = (data) => {
		return data.filter((item) =>
			keys.some((key) => item[key].toLowerCase().includes(query))
		);
	};

	return (
		<div className="App">
			{/* <input
				className="search"
				type="text"
				placeholder="Search..."
				onChange={(e) => setQuery(e.target.value)}
			/> */}
			{/* <Search1 data={search1(Users)} /> */}
			{/* <Search2 data={searchEastMethod(Users)} /> */}

			{/* <Button /> */}
			{/* <Pagination /> */}
			{/* <Parent /> */}
			{/* <Fetch /> */}
			{/* <ApexChart /> */}
			{/* <ReactPagination /> */}
			{/* <ReducerHook /> */}
			{/* <CollapseLayout /> */}
			<Contents />
		</div>
	);
}

export default App;
