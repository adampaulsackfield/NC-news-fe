import axios from 'axios';

export const getArticles = () => {
	const ENDPOINT = 'https://obscure-lowlands-69895.herokuapp.com/api';

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
