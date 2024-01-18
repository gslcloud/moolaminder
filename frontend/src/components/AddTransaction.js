import React, { useState } from 'react';
import axios from 'axios';

function AddTransaction() {
  const [user, setUser] = useState('');
  const [amount, setAmount] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'user') {
      setUser(value);
    } else if (name === 'amount') {
      setAmount(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/api/transactions', { user, amount });
      setUser('');
      setAmount('');
      console.log('Transaction added successfully');
    } catch (error) {
      console.error('Failed to add transaction:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user">User:</label>
        <input
          type="text"
          id="user"
          name="user"
          value={user}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={amount}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransaction;