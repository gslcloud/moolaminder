<template>
  <div>
    <h1>Transactions</h1>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id">
          <td>{{ transaction.title }}</td>
          <td>{{ transaction.amount }}</td>
          <td>{{ transaction.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getTransactions } from '../transactionService';

export default {
  data() {
    return {
      transactions: [],
    };
  },
  mounted() {
    getTransactions()
      .then((transactions) => {
        this.transactions = transactions;
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error);
      });
  },
};
</script>