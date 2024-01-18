const Transaction = require('../../models/Transaction');

async function getTransactions(req, res) {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve transactions' });
  }
}

module.exports = getTransactions;