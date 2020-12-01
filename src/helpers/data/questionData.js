import axios from 'axios';

const baseUrl = 'https://prept-142e8.firebaseio.com';

const getQuestions = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/prept.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const createFlashCard = (data) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/prept.json`, data)
    .then((response) => {
      const update = { firebaseKey: response.data.name };
      axios.patch(`${baseUrl}/prept/${response.data.name}.json`, update)
        .then((patchResponse) => {
          resolve(patchResponse);
        }).catch((error) => console.warn(error));
    });
});

const updateFlashCard = (dataObject) => new Promise((resolve, reject) => {
  axios.patch(`${baseUrl}/prept/${dataObject.firebaseKey}.json`, dataObject).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const deleteFlashCard = (cardId) => axios.delete(`${baseUrl}/prept/${cardId}.json`);

export default {
  getQuestions,
  createFlashCard,
  updateFlashCard,
  deleteFlashCard,
};
