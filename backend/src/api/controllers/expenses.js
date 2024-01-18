const Expense = require('../../models/Expense');

async function updateExpense(req, res) {
  try {
    const { id } = req.params;
    const { description, amount, category } = req.body;

    if (!description || !amount || !category) {
      return res.status(400).json({ message: 'Please provide all necessary fields.' });
    }

    const expense = await Expense.findById(id);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    expense.description = description;
    expense.amount = amount;
    expense.category = category;

    await expense.save();

    return res.json(expense);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  updateExpense,
};