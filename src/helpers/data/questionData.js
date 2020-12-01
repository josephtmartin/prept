import axios from 'axios';

const baseUrl = 'https://prept-142e8.firebaseio.com';

const getQuestions = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/-MNQQ0xNh4gVeGkGf_46.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const createFlashCard = (data) => axios.post(`${baseUrl}/-MNQQ0xNh4gVeGkGf_46.json`, data).then((response) => {
  const update = { firebaseKey: response.data.name };
  axios.patch(`${baseUrl}/-MNQQ0xNh4gVeGkGf_46/${response.data.name}.json`, update)
    .catch((error) => console.warn(error));
});

export default { getQuestions, createFlashCard };
