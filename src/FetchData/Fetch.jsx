import React, { useEffect, useState } from 'react';

const FetchData = () => {
	const [user, setUser] = useState(null);
	const [fetchError, setFetchError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [post, setPost] = useState([]);
	const [comment, setComment] = useState([]);
	const [album, setAlbum] = useState([]);

	useEffect(() => {
		usingAsyncAwait();
		usingThen();
	}, []);

	// Fetch data using async await

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

	//  Fetch data using then

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

	// FetchAll data

	const fetchAllData = async () => {
		const posts = fetch(
			'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10'
		).then((res) => res.json());

		const comments = fetch(
			'https://jsonplaceholder.typicode.com/comments?_start=0&_limit=10'
		).then((res) => res.json());

		const albums = fetch(
			'https://jsonplaceholder.typicode.com/albums?_start=0&_limit=10'
		).then((res) => res.json());

		return Promise.all([posts, comments, albums]);
	};

	useEffect(() => {
		fetchAllData().then((res) => {
			const postData = res[0];
			const commentData = res[1];
			const albumData = res[2];

			setPost(postData);
			setComment(commentData);
			setAlbum(albumData);
		});
	}, []);

	return (
		<>
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

			{/* FetchAll */}
			<div style={{ display: 'flex', gap: '20px', marginTop: '50px' }}>
				<div style={{ border: '1px solid red', padding: '10px' }}>
					{post.map((al) => (
						<p> {al.title}</p>
					))}
				</div>
				<div style={{ border: '1px solid green', padding: '10px' }}>
					{comment.map((al) => (
						<p> {al.name}</p>
					))}
				</div>
				<div style={{ border: '1px solid blue', padding: '10px' }}>
					{album.map((al) => (
						<p> {al.title}</p>
					))}
				</div>
			</div>
		</>
	);
};

export default FetchData;

// const ErrorDetail = () => {
// 	return <p>Did not received expected data.</p>;
// };
