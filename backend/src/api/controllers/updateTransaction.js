const Transaction = require('../models/Transaction');

// Update a transaction by id
const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, amount } = req.body;

    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      { category, amount },
      { new: true }
    );

    if (!updatedTransaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json(updatedTransaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = updateTransaction;
