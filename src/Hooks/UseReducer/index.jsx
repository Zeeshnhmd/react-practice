import React from 'react';
import axios from 'axios';
import { useReducer } from 'react';
import { useEffect } from 'react';

const initialState = {
	loading: true,
	post: [],
	error: '',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return {
				loading: false,
				post: action.payload,
				error: '',
			};
		case 'FETCH_ERROR':
			return {
				loading: false,
				post: [],
				error: 'Something went wrong',
			};
		default:
			return state;
	}
};
const ReducerHook = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: 'FETCH_ERROR' });
			});
	}, []);
	return (
		<div>
			{/* {state.loading ? 'Loading...' : state.post.title} */}
			{state.loading ? 'Loading...' : state.post.map((po) => <p>{po.title}</p>)}
			{state.error && state.error}
		</div>
	);
};

export default ReducerHook;
