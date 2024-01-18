const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// GET /api/transactions
router.get('/', async (req, res) => {
  try {
    const { sort, page, limit } = req.query;
    const skip = (page - 1) * limit;
    const transactions = await Transaction.find()
      .skip(skip)
      .limit(limit)
      .sort(sort);

    res.json(transactions);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch transactions.' });
  }
});

// POST /api/transactions
router.post('/', async (req, res) => {
  try {
    const { title, amount } = req.body;

    if (!title || !amount) {
      return res.status(400).json({ error: 'Title and amount are required fields.' });
    }

    const newTransaction = new Transaction({ title, amount });
    const savedTransaction = await newTransaction.save();

    res.status(201).json(savedTransaction);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to create transaction.' });
  }
});

// PUT /api/transactions/:id
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, amount } = req.body;

    if (!title || !amount) {
      return res.status(400).json({ error: 'Title and amount are required fields.' });
    }

    const updatedTransaction = await Transaction.findByIdAndUpdate(id, { title, amount }, { new: true });

    if (!updatedTransaction) {
      return res.status(404).json({ error: 'Transaction not found.' });
    }

    res.json(updatedTransaction);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to update transaction.' });
  }
});

// DELETE /api/transactions/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTransaction = await Transaction.findByIdAndDelete(id);

    if (!deletedTransaction) {
      return res.status(404).json({ error: 'Transaction not found.' });
    }

    res.json(deletedTransaction);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to delete transaction.' });
  }
});

module.exports = router;
```
