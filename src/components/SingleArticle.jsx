import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getArticle } from '../actions/article';
import { getComments, addComment } from '../actions/comments';
import { upvote } from '../actions/upvote';
import Comment from './Comment';
import { FaAngleUp } from 'react-icons/fa';
import { UserContext } from '../context/UserContext';

// TODO - Implement downvote

const SingleArticle = ({ loggedIn }) => {
	const { article_id } = useParams();
	const [article, setArticle] = useState({});
	const [comments, setComments] = useState([]);
	const [articleVotes, setArticleVotes] = useState(0);
	const [formData, setFormData] = useState({
		username: '',
		body: '',
	});
	const userValues = useContext(UserContext);

	const handleUpvote = () => {
		if (!loggedIn) {
			toast.warning('You must be logged in to upvote articles');
		} else {
			upvote(article_id)
				.then((data) => {
					toast.success('Upvote successful');
				})
				.catch((err) => {
					toast.error('Upvote failed');
					console.log(err);
				});
			setArticleVotes(1);
		}
	};

	const onChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (!loggedIn) {
			toast.warning('You must be logged in to comment');
		} else {
			formData.username = userValues.user.username;

			addComment(article.article_id, formData)
				.then((data) => {
					toast.success('Comment added successfully');

					setComments([...comments, data.comment]);

					setFormData({
						username: '',
						body: '',
					});
				})
				.catch((err) => {
					toast.error('Comment failed to be added');
					console.log(err);
				});
		}
	};

	useEffect(() => {
		getArticle(article_id)
			.then((data) => {
				setArticle(data.article);
			})
			.then(() => {
				getComments(article_id).then((data) => {
					setComments([...data.comments]);
				});
			})
			.catch((err) => {
				toast.error('Failed to load article data. Please refresh the page.');
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
									{article.votes + articleVotes}
									<button onClick={handleUpvote} className='ml-2'>
										<FaAngleUp className='text-light' />
									</button>
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
										{comments &&
											comments.map((comment) => {
												return <Comment comment={comment} />;
											})}
										<form className='flex' onSubmit={(e) => onSubmitHandler(e)}>
											<input
												className='w-full p-4 border-t mr-0 border-b border-l text-dark border-light bg-white'
												placeholder='Write a comment...'
												name='body'
												value={formData.body}
												onChange={(e) => onChangeHandler(e)}
											/>
											<button className='px-2 bg-light  text-white font-bold p-4 uppercase border-light border-t border-b border-r transition ease-in duration-200 hover:scale-105'>
												Comment
											</button>
										</form>
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
