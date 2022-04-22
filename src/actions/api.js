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
	return axios.get(`${ENDPOINT}/articles`).then((res) => {
		return res.data;
	});
};

export const getSortedArticles = (sortBy) => {
	return axios.get(`${ENDPOINT}/articles?sort_by=${sortBy}`).then((res) => {
		return res.data;
	});
};

// Comments
// ========
export const getComments = (article_id) => {
	return axios
		.get(`${ENDPOINT}/articles/${article_id}/comments`)
		.then((res) => {
			return res.data;
		});
};

export const addComment = (article_id, comment) => {
	return axios
		.post(`${ENDPOINT}/articles/${article_id}/comments`, comment)
		.then((res) => {
			return res.data;
		});
};

export const deleteComment = (comment_id) => {
	return axios.delete(`${ENDPOINT}/comments/${comment_id}`).then((res) => {
		console.log(res.data, '<<<');
		return res.data;
	});
};

// Voting
// ======
export const upvote = (article_id) => {
	return axios
		.patch(`${ENDPOINT}/articles/${article_id}`, { inc_votes: 1 })
		.then((res) => {
			return res.data;
		});
};

// Users
// =====
export const getUsers = () => {
	return axios.get(`${ENDPOINT}/users`).then((res) => {
		return res.data;
	});
};
