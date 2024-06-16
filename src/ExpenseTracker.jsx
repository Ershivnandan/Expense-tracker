import { useState } from "react";

const ExpenseTracker = () => {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const addExpense = () => {
    if (!input || !amount) {
      return;
    }

    const newExpense = {
      id: expense.length + 1,
      title: input,
      amount: parseFloat(amount),
    };

    setExpense([...expense, newExpense]);
    setInput("");
    setAmount("");
    setTotalExpense(prevTotal => prevTotal + newExpense.amount);
  };

  const deleteExpense = (id) => {
    const deletedExpense = expense.find((expense) => expense.id === id);
    setExpense(expense.filter((expense) => expense.id !== id));
    setTotalExpense(prevTotal => prevTotal - deletedExpense.amount);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 text-white rounded-md shadow-md w-full h-full">
      <h2 className="text-2xl font-bold mb-4">Expense Tracker</h2>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            name="Expense"
            placeholder="Expense Title"
            value={input}
            className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            name="Amount"
            placeholder="Amount"
            value={amount}
            className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={addExpense}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Add Expense
          </button>
        </div>
      </div>
      <h3 className="mt-6 text-xl font-bold">Total Expense: ${totalExpense}</h3>
      <ul className="mt-6 space-y-2">
        {expense.map((expenses) => (
          <li
            className="flex justify-between items-center p-2 bg-gray-700 text-white rounded-md"
            key={expenses.id}
          >
            <div>
              <span className="font-semibold">{expenses.title}</span>:{" "}
              <span>${expenses.amount}</span>
            </div>
            <button
              onClick={() => deleteExpense(expenses.id)}
              className="px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
