import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// TODO - Links for username, title and buttons for removing and viewing

import { getArticles } from '../actions/api';
import ArticleCard from './ArticleCard';

const Articles = ({ loggedIn }) => {
	const [articles, setArticles] = useState([]);
	const [selectedTopic, setSelectedTopic] = useState('all');

	useEffect(() => {
		getArticles()
			.then((data) => {
				setArticles([...data.articles]);
			})
			.catch((err) => {
				toast.error('Failed to load articles. Please refresh the page.', {
					theme: 'dark',
				});
				console.log(err);
			});
	}, []);

	const handleTopicSelector = (e) => {
		setSelectedTopic(e.target.name);
	};

	return (
		<div className='min-h-screen h-full'>
			<h1 className='text-4xl text-center font-serif font-light tracking-wider mb-8'>
				Articles Listing
			</h1>

			<div className='text-center'>
				<button
					onClick={(e) => handleTopicSelector(e)}
					name='all'
					className='text-light px-2 py-1 border-2 border-light inline rounded-lg mr-2 transition ease-in duration-200 hover:scale-110'
				>
					all
				</button>

				<button
					onClick={(e) => handleTopicSelector(e)}
					name='coding'
					className='text-light px-2 py-1 border-2 border-light inline rounded-lg mr-2 transition ease-in duration-200 hover:scale-110'
				>
					coding
				</button>

				<button
					onClick={(e) => handleTopicSelector(e)}
					name='cooking'
					className='text-light px-2 py-1 border-2 border-light inline rounded-lg mr-2 transition ease-in duration-200 hover:scale-110'
				>
					cooking
				</button>

				<button
					onClick={(e) => handleTopicSelector(e)}
					name='football'
					className='text-light px-2 py-1 border-2 border-light inline rounded-lg transition ease-in duration-200 hover:scale-110'
				>
					football
				</button>
			</div>

			<div className='grid grid-cols-1 gap-4'>
				{articles &&
					articles.map((article) => {
						if (selectedTopic === 'all') {
							return <ArticleCard article={article} loggedIn={loggedIn} />;
						} else if (article.topic === selectedTopic) {
							return <ArticleCard article={article} loggedIn={loggedIn} />;
						} else {
							return null;
							// TODO - Refactor to not use else if
						}
					})}
			</div>
		</div>
	);
};

export default Articles;
