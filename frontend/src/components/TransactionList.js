import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('/api/transactions')
      .then(response => {
        setTransactions(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
  }, []);

  return (
    <div>
      <h1>Transaction List</h1>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {JSON.stringify(transaction)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;