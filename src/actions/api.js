import axios from 'axios';

const ENDPOINT = 'https://obscure-lowlands-69895.herokuapp.com/api';

// Articles
// ========
export const getArticle = (article_id) => {
	return axios.get(`${ENDPOINT}/articles/${article_id}`).then((res) => {
		return res.data;
	});
};

export const getArticles = () => {
	const promise = new Promise((resolve, reject) => {
		axios
			.get(`${ENDPOINT}/articles`)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});

	return promise;
};

// Comments
// ========
export const getComments = (article_id) => {
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

// Voting
// ======
export const upvote = (article_id) => {
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

// Users
// =====
export const getUsers = () => {
	const promise = new Promise((resolve, reject) => {
		axios
			.get(`${ENDPOINT}/users`)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});

	return promise;
};
