const getExpenses = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const pageNumber = parseInt(page);
    const pageSize = parseInt(limit);

    if (isNaN(pageNumber) || isNaN(pageSize)) {
      return res.status(400).json({ error: 'Invalid page or limit parameter' });
    }

    const skip = (pageNumber - 1) * pageSize;

    const expenses = await Expense.find()
      .skip(skip)
      .limit(pageSize);

    const totalExpenses = await Expense.countDocuments();

    const response = {
      expenses,
      page: pageNumber,
      limit: pageSize,
      totalPages: Math.ceil(totalExpenses / pageSize),
      totalExpenses
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getExpenses;