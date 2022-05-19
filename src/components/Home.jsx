import React from 'react';

import news from '../assets/news.png';

const Home = () => {
	return (
		<main className='min-h-screen p-4 md:p-0'>
			<div className='flex flex-col'>
				<h1 className='text-3xl font-serif tracking-wider text-center border-b-2 border-light pb-2 mb-6 mt-14 md:text-5xl md:tracking-widest md:mb-10 md:pb-6'>
					Welcome to NC News
				</h1>
				<p className='font-light text-center text-lg md:text-2xl md:tracking-wide md:leading-relaxed'>
					<span className='text-light'>NC News</span> is a Full-Stack
					Application for news articles. You can filter by topic, create, read,
					update and delete articles. List users and features mock login
					functionality. We also have error handling and a notifications system.
				</p>
				<img src={news} alt='Newspaper icon' className='w-6/12 mx-auto mt-10' />
			</div>
		</main>
	);
};

export default Home;
