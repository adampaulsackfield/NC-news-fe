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

export const addComment = (article_id, comment) => {
	const ENDPOINT = 'https://obscure-lowlands-69895.herokuapp.com/api';

	const promise = new Promise((resolve, reject) => {
		axios
			.post(`${ENDPOINT}/articles/${article_id}/comments`, comment)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});

	return promise;
};

export const deleteComment = (comment_id) => {
	const ENDPOINT = 'https://obscure-lowlands-69895.herokuapp.com/api';

	const promise = new Promise((resolve, reject) => {
		axios
			.delete(`${ENDPOINT}/comments/${comment_id}`)
			.then((res) => {
				console.log(res.data, '<<<');
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});

	return promise;
};
