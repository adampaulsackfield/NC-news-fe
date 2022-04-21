import React, { useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { upvote } from '../actions/api';
import { toast } from 'react-toastify';

// TODO - Styling button on larger screens

const ArticleCard = ({
	article: {
		article_id,
		author,
		comment_count,
		created_at,
		title,
		topic,
		votes,
	},
	loggedIn,
}) => {
	const [articleVotes, setArticleVotes] = useState(0);

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
						<button onClick={handleUpvote}>
							<AiOutlineHeart className='inline text-light text-xl' />{' '}
							<span className='text-light'>{votes + articleVotes}</span>
						</button>
					</p>
					<p className='md:mr-4'>
						Comments: <span className='text-light'>{comment_count}</span>
					</p>
					<p className='md:mr-4'>
						Created At:{' '}
						<Moment format='DD/MM/YYYY HH:mm' className='text-light'>
							{created_at}
						</Moment>
					</p>
					<Link
						to={`/article/${article_id}`}
						className='mt-2 text-center text-white px-2 py-1 bg-light inline rounded-lg transition ease-in duration-200 md:px-4 md:py-2 hover:scale-110'
					>
						View Article
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
