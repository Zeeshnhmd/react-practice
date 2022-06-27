import React from 'react';
import '../App.css';

const Search1 = ({ data }) => {
	return (
		<div>
			<ul className="list">
				{data.map((item) => (
					<li key={item.id} className="listItem">
						{item.first_name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Search1;
