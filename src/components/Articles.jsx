import React, { useState, useEffect } from 'react';
import { getArticles } from '../actions/articles';

const Articles = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		getArticles()
			.then((data) => {
				console.log(data.articles);
				setArticles([...data.articles]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className='h-screen'>
			<h1>Articles</h1>

			{articles &&
				articles.map((article) => {
					return <p>Article: {article.article_id}</p>;
				})}
		</div>
	);
};

export default Articles;
