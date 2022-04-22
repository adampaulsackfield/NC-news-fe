import React, { useContext } from 'react';
import Moment from 'react-moment';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { UserContext } from '../context/UserContext';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { toast } from 'react-toastify';
import { deleteComment } from '../actions/comments';

const Comment = ({ comment, setComments, comments }) => {
	const userValues = useContext(UserContext);

	const handleDeleteComment = () => {
		if (userValues.user.username !== comment.author) {
			toast.error('You can only delete your own comments');
		} else {
			confirmAlert({
				title: 'Delete Comment',
				message: 'Are you sure you want to delete this comment?',
				buttons: [
					{
						label: 'Yes',
						onClick: () => {
							deleteComment(comment.comment_id)
								.then(() => {
									const updatedComments = comments.filter(
										(currentComment) =>
											currentComment.comment_id !== comment.comment_id
									);
									setComments([...updatedComments]);

									toast.success('Comment deleted successfully');
								})
								.catch((err) => {
									toast.error('Failed to delete comment');
									console.log(err);
								});
						},
					},
					{
						label: 'No',
						onClick: () => toast.warning('Comment was not deleted'),
					},
				],
			});
		}
	};

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
					<AiOutlineHeart className='inline text-light text-xl cursor-pointer' />{' '}
					{comment.votes}
				</p>
				<p
					className={
						userValues.user.username !== comment.author ? 'hidden' : undefined
					}
				>
					<FaTrash
						onClick={handleDeleteComment}
						className='text-danger text-xl mt-1 cursor-pointer'
					/>
				</p>
			</div>
		</div>
	);
};

export default Comment;
