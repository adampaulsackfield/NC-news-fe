import React from 'react';
import Moment from 'react-moment';

const Article = ({
	article: { author, comment_count, created_at, title, topic, votes },
}) => {
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
						Comments: <span className='text-light'>{comment_count}</span>
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
};

export default Article;