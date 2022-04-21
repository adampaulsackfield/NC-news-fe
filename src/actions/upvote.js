import axios from 'axios';

export const upvote = (article_id) => {
	const ENDPOINT = 'https://obscure-lowlands-69895.herokuapp.com/api';

	const promise = new Promise((resolve, reject) => {
		axios
			.patch(`${ENDPOINT}/articles/${article_id}`, { inc_votes: 1 })
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});

	return promise;
};
