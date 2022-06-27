import '../App.css';

const Search2 = ({ data }) => {
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>Surename</th>
						<th>Email</th>
						<th>Gender</th>
					</tr>
					{data.map((item) => (
						<tr key={item.id}>
							<td>{item.first_name}</td>
							<td>{item.last_name}</td>
							<td>{item.email}</td>
							<td>{item.gender}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Search2;
