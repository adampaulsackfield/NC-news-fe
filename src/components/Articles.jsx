import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

// TODO - Links for username, title and buttons for removing and viewing

import { getArticles } from '../actions/api';
import ArticleCard from './ArticleCard';
import TopicFilter from './TopicFilter';

const Articles = ({ loggedIn }) => {
	const { topic } = useParams();

	const [articles, setArticles] = useState([]);
	const [sortBy, setSortBy] = useState('none');

	useEffect(() => {
		getArticles(sortBy, topic)
			.then((data) => {
				setArticles([...data.articles]);
			})
			.catch((err) => {
				toast.error('Failed to load articles. Please refresh the page.', {
					theme: 'dark',
				});
				console.log(err);
			});
	}, [sortBy, topic]);

	const sortArticles = (e) => {
		setSortBy(e.target.name);
	};

	return (
		<div className='min-h-screen h-full'>
			<h1 className='text-4xl text-center font-serif font-light tracking-wider mb-8'>
				Articles Listing
			</h1>

			<TopicFilter />

			<div className='text-center mt-2'>
				<h1 className='text-xl mb-2'>Sort Articles</h1>

				<button
					onClick={(e) => sortArticles(e)}
					name='article_id'
					className='text-light px-2 py-1 border-2 border-light inline rounded-lg mr-2 transition ease-in duration-200 hover:scale-110'
				>
					Article ID
				</button>

				<button
					onClick={(e) => sortArticles(e)}
					name='created_at'
					className='text-light px-2 py-1 border-2 border-light inline rounded-lg mr-2 transition ease-in duration-200 hover:scale-110'
				>
					Created At
				</button>

				<button
					onClick={(e) => sortArticles(e)}
					name='title'
					className='text-light px-2 py-1 border-2 border-light inline rounded-lg mr-2 transition ease-in duration-200 hover:scale-110'
				>
					Title
				</button>

				<button
					onClick={(e) => sortArticles(e)}
					name='votes'
					className='text-light px-2 py-1 border-2 border-light inline rounded-lg mr-2 transition ease-in duration-200 hover:scale-110'
				>
					Votes
				</button>
			</div>

			<div className='grid grid-cols-1 gap-4'>
				{articles &&
					articles.map((article) => {
						return (
							<ArticleCard
								key={article.article_id}
								article={article}
								loggedIn={loggedIn}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default Articles;
