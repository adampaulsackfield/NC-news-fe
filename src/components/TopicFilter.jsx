import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getTopics } from '../actions/api';

const TopicFilter = ({ topics, setTopics }) => {
	useEffect(() => {
		getTopics().then((data) => {
			setTopics([...data.topics]);
		});
	}, [setTopics]);

	return (
		<div className='text-center'>
			<h1 className='text-xl mb-2'>Filter Articles</h1>

			<Link
				to='/articles'
				className='text-light px-2 py-1 border-2 border-light inline rounded-lg mr-2 transition ease-in duration-200 hover:scale-110'
			>
				All
			</Link>

			{topics &&
				topics.map((currentTopic) => {
					console.log(currentTopic);
					return (
						<Link
							to={`/articles/topics/${currentTopic.slug}`}
							className='text-light px-2 py-1 border-2 border-light inline rounded-lg mr-2 transition ease-in duration-200 hover:scale-110'
						>
							{currentTopic.slug[0].toUpperCase() + currentTopic.slug.slice(1)}
						</Link>
					);
				})}
		</div>
	);
};

export default TopicFilter;
