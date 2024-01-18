
const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transactionController');

// GET /api/transactions
router.get('/', transactionController.getTransactions);

// POST /api/transactions
router.post('/', transactionController.createTransaction);

module.exports = router;
