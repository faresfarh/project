
import { useState } from 'react';

export default function TransactionList() {
  const [transactions] = useState([
  
    { id: 3, description: 'Library Fee', amount: -50, date: '2024-11-20', type: 'expense' },
    { id: 4, description: 'Research Grant', amount: 300, date: '2024-11-15', type: 'income' },
  ]);

  const totalBalance = transactions.reduce((total, t) => total + t.amount, 0);

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6">Transaction History</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
          
            <th className="p-3">Date</th>
            <th className="p-3">Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b">
              <td className="p-3">{transaction.description}</td>
              <td className={`p-3 ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                ${Math.abs(transaction.amount)}
              </td>
              <td className="p-3">{transaction.date}</td>
              <td className="p-3 capitalize">{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 text-right">
        <h3 className="text-2xl font-bold">Total Balance: ${totalBalance}</h3>
      </div>
    </div>
  );
}
