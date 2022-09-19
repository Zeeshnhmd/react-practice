import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = () => {
	const [items, setItems] = useState([]);

	// to get the total page in pagination
	const [pageCount, setPageCount] = useState(0);
	let limit = 10;
	let page = 1;
	useEffect(() => {
		const getComments = async () => {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`
			);
			const data = await res.json();

			// To get the total number of page

			const total = res.headers.get('x-total-count');

			setPageCount(Math.ceil(total / limit));
			console.log(Math.ceil(total / limit));
			console.log(total);

			setItems(data);
			console.log(data);
		};
		getComments();
	}, []);

	const fetchComments = async (currentPage) => {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
		);
		const data = await res.json();
		return data;
	};

	// Adding "data" in the parameter to get which page is clicked
	const handlePageClick = async (data) => {
		// console.log(data);

		// adding "data.selected" to get the integer value of which page is clicked and "+1" to increment the clicked value by 1

		console.log(data.selected + 1);
		let currentPage = data.selected + 1;

		const commentsFromServer = await fetchComments(currentPage);
		setItems(commentsFromServer);
	};
	return (
		<>
			<div className="container">
				<div className="row m-2">
					{items?.map((item) => {
						return (
							<div key={item.id} className="col-sm-6 col-md-4 v my-2">
								<div
									className="card shadow-sm w-100"
									style={{ minHeight: 225 }}
								>
									<div className="card-body">
										<h5 className="card-title text-center h2">
											Id :{item.id}{' '}
										</h5>
										<h6 className="card-subtitle mb-2 text-muted text-center">
											{item.email}
										</h6>
										<p className="card-text">{item.body}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<ReactPaginate
				previousLabel={'previous'}
				nextLabel={'next'}
				breakLabel={'...'}
				// number of pages
				pageCount={pageCount}
				// number of pages to display in starting and end
				marginPagesDisplayed={4}
				// number of pages to display when the breakpoint is clicked
				pageRangeDisplayed={3}
				// function for what to do when the page is clicked
				onPageChange={handlePageClick}
				// add className for ul
				containerClassName={'pagination justify-content-center'}
				// add className for li
				pageClassName={'page-item'}
				// add className for a
				pageLinkClassName={'page-link'}
				// break className
				breakClassName={'page-item'}
				// break Link ClassName
				breakLinkClassName={'page-link'}
				// active className
				activeClassName={'active'}
				previousClassName={'page-item'}
				nextClassName={'page-item'}
				previousLinkClassName={'page-link'}
				nextLinkClassName={'page-link'}
			/>
		</>
	);
};

export default Pagination;
