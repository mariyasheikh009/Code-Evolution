function calculateExpense() {
  const expenses = [
    { category: "Food", amount: 300 },
    { category: "Transport", amount: 150 },
    { category: "Shopping", amount: 400 },
  ];

  // Use reduce() to calculate total expense
  const totalExpense = expenses.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  console.log("Total Expense: ₹" + totalExpense);
}
