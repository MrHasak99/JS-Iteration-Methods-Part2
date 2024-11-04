const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

const incomeFilter = transactions.filter(function (income) {
  if (income.includes("income")) return true;
});
console.log(incomeFilter);

const expenseFilter = transactions.filter(function (expense) {
  if (expense.includes("expense")) return true;
});
console.log(expenseFilter);

let incomeSum = 0;
incomeFilter.forEach(function (income) {
  incomeSum = incomeSum + income[1];
  return incomeSum;
});
console.log(incomeSum);

let expenseSum = 0;
expenseFilter.forEach(function (expense) {
  expenseSum = expenseSum + expense[1];
  return expenseSum;
});
console.log(expenseSum);

const netTotal = incomeSum - expenseSum;
console.log(netTotal);

const transactionFilter = transactions.filter(function (transaction) {
  if (transaction[1] >= 500) return true;
});
console.log(transactionFilter);
