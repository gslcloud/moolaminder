const transactionService = require('../services/transactionService');

async function getTransactions(req, res) {
  const response = await transactionService.getTransactions();
  if (response.error) {
    return res.status(500).json(response);
  }
  return res.status(200).json(response);
}

async function createTransaction(req, res) {
  const { user, amount } = req.body;

  if (!user || !amount) {
    return res.status(400).json({
      error: true,
      message: 'User and amount fields are required',
    });
  }

  const response = await transactionService.createTransaction(user, amount);

  if (response.error) {
    return res.status(500).json(response);
  }
  return res.status(201).json(response);
}

module.exports = {
  getTransactions,
  createTransaction,
};