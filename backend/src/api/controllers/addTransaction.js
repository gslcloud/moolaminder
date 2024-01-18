import Transaction from '../models/Transaction';

function addTransaction(req, res) {
  const { title, amount, category } = req.body;

  const newTransaction = new Transaction({
    title,
    amount,
    category
  });

  newTransaction.save()
    .then(() => {
      res.status(201).json({ message: 'Transaction added successfully.' });
    })
    .catch((error) => {
      console.error('Error adding transaction:', error.message);
      res.status(500).json({ error: 'An error occurred while adding the transaction.' });
    });
}

export default addTransaction;