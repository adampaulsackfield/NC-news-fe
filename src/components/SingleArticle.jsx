import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getArticle } from '../actions/article';

const SingleArticle = () => {
	const { article_id } = useParams();
	const [article, setArticle] = useState({});

	useEffect(() => {
		getArticle(article_id)
			.then((data) => {
				setArticle(data.article);
			})
			.catch((err) => {
				toast.error('Failed to load article. Please refresh the page.');
				console.log(err);
			});
	}, [article_id]);

	return (
		<div className='min-h-screen pb-20'>
			<h1 className='text-4xl text-white text-center mt-4 mb-8'>
				Single Article
			</h1>

			{article ? (
				<div className='m-4 bg-white overflow-hidden text-dark rounded-lg'>
					<div className='px-4 py-5 sm:px-6'>
						<h3 className='text-lg leading-6 font-medium text-light sm:text-2xl md:text-3xl lg:text-4xl'>
							Article ID: {article_id}
						</h3>
						<p className='mt-1 max-w-2xl text-sm sm:text-lg md:text-xl lg:text-2xl'>
							All article details below
						</p>
					</div>
					<div className='border-t border-light'>
						<dl>
							<div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<dt className='text-sm font-medium sm:text-lg md:text-xl lg:text-2xl'>
									Article Title
								</dt>
								<dd className='mt-1 text-sm sm:text-md md:text-lg lg:text-xl text-dark sm:mt-0 sm:col-span-2'>
									{article.title}
								</dd>
							</div>
							<div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<dt className='text-sm font-medium sm:text-lg md:text-xl lg:text-2xl'>
									Author
								</dt>
								<dd className='mt-1 text-sm sm:text-md md:text-lg lg:text-xl text-light sm:mt-0 sm:col-span-2'>
									{article.author}
								</dd>
							</div>
							<div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<dt className='text-sm font-medium sm:text-lg md:text-xl lg:text-2xl'>
									Topic
								</dt>
								<dd className='mt-1 text-sm sm:text-md md:text-lg lg:text-xl sm:mt-0 sm:col-span-2'>
									<p className='text-dark px-2 py-1 border-2 border-light inline rounded-lg md:px-4 md:py-2'>
										{article.topic}
									</p>
								</dd>
							</div>
							<div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<dt className='text-sm font-medium sm:text-lg md:text-xl lg:text-2xl'>
									Votes
								</dt>
								<dd className='mt-1 text-sm sm:text-md md:text-lg lg:text-xl sm:mt-0 sm:col-span-2'>
									{article.votes}
								</dd>
							</div>
							<div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<dt className='text-sm font-medium sm:text-lg md:text-xl lg:text-2xl'>
									Body
								</dt>
								<dd className='mt-1 text-sm sm:text-md md:text-lg lg:text-xl sm:mt-0 sm:col-span-2'>
									{article.body}
								</dd>
							</div>
							<div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<dt className='text-sm font-medium sm:text-lg md:text-xl lg:text-2xl'>
									Comments
								</dt>
								<dd className='mt-1 text-sm sm:text-md md:text-lg lg:text-xl sm:mt-0 sm:col-span-2'>
									<ul className='border border-light rounded-md divide-y divide-light'>
										<li>comment</li>
										<li>comment</li>
										<li>comment</li>
										<li>comment</li>
									</ul>
								</dd>
							</div>
						</dl>
					</div>
				</div>
			) : (
				<div>
					<h1>Loading...</h1>
				</div>
			)}
		</div>
	);
};

export default SingleArticle;
