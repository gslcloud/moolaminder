import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Transactions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError('');

    axios
      .get('/api/transactions')
      .then((response) => {
        setTransactions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch transactions');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Transactions</h2>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>User: {transaction.user}</p>
          <p>Amount: {transaction.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
```

frontend/src/components/CreateTransaction.js
```
import React, { useState } from 'react';
import axios from 'axios';

const CreateTransaction = () => {
  const [user, setUser] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user || !amount) {
      setError('Please enter a user and amount');
      return;
    }

    axios
      .post('/api/transactions', { user, amount })
      .then(() => {
        setSuccess(true);
        setUser('');
        setAmount('');
        setError('');
      })
      .catch((error) => {
        setError('Failed to create transaction');
      });
  };

  return (
    <div>
      <h2>Create Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">User:</label>
          <input
            type="text"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>Transaction created successfully</div>}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTransaction;