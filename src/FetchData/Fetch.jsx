import React, { useEffect, useState } from 'react';

const FetchData = () => {
	const [user, setUser] = useState(null);
	const [fetchError, setFetchError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			);
			if (!response.ok)
				throw new Error(
					`This is an HTTP error, The status is ${response.status}`
				);
			const users = await response.json();
			setUser(users);
			setFetchError(null);
		} catch (err) {
			setFetchError(err.message);
			setUser(null);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			{loading && <p>Loading....</p>}
			{fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
			{!fetchError && !loading && (
				<>
					{user.map((use) => (
						<p>{use.name}</p>
					))}
				</>
			)}
		</div>
	);
};

export default FetchData;

// const ErrorDetail = () => {
// 	return <p>Did not received expected data.</p>;
// };
