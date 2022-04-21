import React from 'react';
import Moment from 'react-moment';
import { AiOutlineHeart } from 'react-icons/ai';

const Comment = ({ comment }) => {
	return (
		<div className='p-2'>
			<h1 className='text-md tracking-wide mb-2'>{comment.body}</h1>
			<div>
				<h2 className='text-light inline'>
					<span className='text-dark'>by </span> {comment.author}{' '}
				</h2>
				<p className='inline'>
					on {''}
					<Moment format='DD/MM/YYYY HH:mm' className='text-light'>
						{comment.created_at}
					</Moment>
				</p>
				<p>
					<AiOutlineHeart className='inline text-light text-xl' />{' '}
					{comment.votes}
				</p>
			</div>
		</div>
	);
};

export default Comment;
