import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import { toast } from 'react-toastify';

// TODO - Links for username, title and buttons for removing and viewing

import { getArticles } from '../actions/articles';

const Articles = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		getArticles()
			.then((data) => {
				setArticles([...data.articles]);
			})
			.catch((err) => {
				toast.error('Failed to load articles. Please refresh the page.');
				console.log(err);
			});
	}, []);

	return (
		<div className='h-full'>
			<h1>Articles</h1>

			<div className='grid grid-cols-1 gap-4'>
				{articles &&
					articles.map((article) => {
						const { author, comment_count, created_at, title, topic, votes } =
							article;

						return (
							<div class='p-6'>
								<div className='bg-white p-6 rounded-lg'>
									<h3 className='text-light mb-2 text-sm font-bold'>
										<img
											src='https://placeholder.pics/svg/35x35'
											alt=''
											className='inline mr-2'
										/>
										{author}
									</h3>
									<h2 className='text-lg mb-2 text-dark font-serif md:mb-6 md:text-2xl'>
										{title}
									</h2>
									<p className='text-dark px-2 py-1 border-2 border-light inline rounded-lg md:px-4 md:py-2'>
										{topic}
									</p>
									<div className='flex flex-col text-dark mt-4 md:flex-row'>
										<p className='md:mr-4'>
											Votes: <span className='text-light'>{votes}</span>
										</p>
										<p className='md:mr-4'>
											Comments:{' '}
											<span className='text-light'>{comment_count}</span>
										</p>
										<p className='md:mr-4'>
											Created At:{' '}
											<Moment format='DD/MM/YYYY HH:mm' className='text-light'>
												{created_at}
											</Moment>
										</p>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Articles;
