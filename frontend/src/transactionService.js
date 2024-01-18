// Import the necessary libraries
import axios from 'axios';

// Define the API endpoints
const API_URL = '/api/v1/transactions';

// Function to fetch transactions
export async function getTransactions() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch transactions.');
  }
}

// Function to create a transaction
export async function createTransaction(transaction) {
  try {
    const response = await axios.post(API_URL, transaction);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create transaction.');
  }
}

// Function to update a transaction
export async function updateTransaction(transaction) {
  try {
    const response = await axios.put(`${API_URL}/${transaction.id}`, transaction);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update transaction.');
  }
}

// Function to delete a transaction
export async function deleteTransaction(transactionId) {
  try {
    const response = await axios.delete(`${API_URL}/${transactionId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete transaction.');
  }
}