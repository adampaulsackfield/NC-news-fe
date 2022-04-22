import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// TODO - Links for username, title and buttons for removing and viewing

import { getArticles, getSortedArticles } from '../actions/api';
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

	const sortArticles = (e) => {
		getSortedArticles(e.target.name)
			.then((data) => {
				setArticles([...data.articles]);
			})
			.catch((err) => {
				toast.error('Failed to load articles. Please refresh the page.', {
					theme: 'dark',
				});
				console.log(err);
			});
	};

	return (
		<div className='min-h-screen h-full'>
			<h1 className='text-4xl text-center font-serif font-light tracking-wider mb-8'>
				Articles Listing
			</h1>

			<div className='text-center'>
				<h1 className='text-xl mb-2'>Filter Articles</h1>

				<button
					onClick={(e) => handleTopicSelector(e)}
					name='all'
					className='text-light px-2 py-1 border-2 border-light inline rounded-lg mr-2 transition ease-in duration-200 hover:scale-110'
				>
					All
				</button>

				<button
					onClick={(e) => handleTopicSelector(e)}
					name='coding'
					className='text-light px-2 py-1 border-2 border-light inline rounded-lg mr-2 transition ease-in duration-200 hover:scale-110'
				>
					Coding
				</button>

				<button
					onClick={(e) => handleTopicSelector(e)}
					name='cooking'
					className='text-light px-2 py-1 border-2 border-light inline rounded-lg mr-2 transition ease-in duration-200 hover:scale-110'
				>
					Cooking
				</button>

				<button
					onClick={(e) => handleTopicSelector(e)}
					name='football'
					className='text-light px-2 py-1 border-2 border-light inline rounded-lg transition ease-in duration-200 hover:scale-110'
				>
					Football
				</button>
			</div>

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
						if (selectedTopic === 'all') {
							return (
								<ArticleCard
									key={article.article_id}
									article={article}
									loggedIn={loggedIn}
								/>
							);
						} else {
							if (article.topic === selectedTopic) {
								return <ArticleCard article={article} loggedIn={loggedIn} />;
							} else {
								return null;
							}
						}
					})}
			</div>
		</div>
	);
};

export default Articles;
