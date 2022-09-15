import React, { useEffect, useState } from 'react';

const FetchData = () => {
	const [user, setUser] = useState(null);
	const [fetchError, setFetchError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		usingAsyncAwait();
		usingThen();
	}, []);

	const usingAsyncAwait = async () => {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			);
			if (!response.ok)
				throw new Error(
					`This is an HTTP error, The status is ${response.status}`
				);
			const users = await response.json();
			console.log(users);
			setUser(users);
			setFetchError(null);
		} catch (err) {
			setFetchError(err.message);
			setUser(null);
		} finally {
			setLoading(false);
		}
	};
	const usingThen = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error, The status is ${response.status}`
					);
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setUser(data);
				setFetchError(null);
			})
			.catch((err) => {
				setFetchError(err.message);
				setUser(null);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div>
			{loading && <p>Loading....</p>}
			{fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
			{!fetchError && !loading && (
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
					{user.map((use) => (
						<div
							key={use.id}
							style={{
								border: '1px solid green',
								padding: '10px',
							}}
						>
							<p>{use.name}</p>
							<p>{use.email}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default FetchData;

// const ErrorDetail = () => {
// 	return <p>Did not received expected data.</p>;
// };
