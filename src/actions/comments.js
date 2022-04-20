import axios from 'axios';

export const getComments = (article_id) => {
	const ENDPOINT = 'https://obscure-lowlands-69895.herokuapp.com/api';

	const promise = new Promise((resolve, reject) => {
		axios
			.get(`${ENDPOINT}/articles/${article_id}/comments`)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});

	return promise;
};
