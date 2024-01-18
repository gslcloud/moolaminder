import axios from 'axios';

function getTransactions() {
  return axios.get('/api/transactions')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export default getTransactions;