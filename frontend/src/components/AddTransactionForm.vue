<template>
  <form @submit="submitForm">
    <input type="text" v-model="title" placeholder="Title" />
    <input type="number" v-model="amount" placeholder="Amount" />
    <input type="text" v-model="category" placeholder="Category" />
    <button type="submit">Add Transaction</button>
  </form>
</template>

<script>
import Vue from 'vue';
import transactionService from '../path/to/transactionService';

export default Vue.component('AddTransactionForm', {
  data() {
    return {
      title: '',
      amount: '',
      category: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        await transactionService.addTransaction({
          title: this.title,
          amount: this.amount,
          category: this.category,
        });
        // Optionally, you can reset the form values here
      } catch (error) {
        console.error('Error adding transaction:', error.message);
        // Optionally, you can display an error message to the user here
      }
    },
  },
});
</script>