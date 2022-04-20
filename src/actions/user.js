import axios from 'axios';

export const getUsers = () => {
	const ENDPOINT = 'https://obscure-lowlands-69895.herokuapp.com/api';

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
