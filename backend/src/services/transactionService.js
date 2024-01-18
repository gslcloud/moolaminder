import axios from 'axios';

function getTransactions() {
  return axios.get('/api/transactions')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching transactions:', error.message);
      throw error;
    });
}

export default getTransactions;