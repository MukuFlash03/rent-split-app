import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Expense {
    _id: string;
    description: string;
    amount: number;
}

const Expenses: React.FC = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/expenses');
            console.log(response.data);  // Check the structure and presence of `_id`
            setExpenses(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching expenses:', error);
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`http://localhost:5000/api/expenses/${id}`);
            setExpenses(expenses.filter(expense => expense._id !== id));
        } catch (error) {
            console.error('Error deleting expense:', error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-2xl font-bold mb-4 text-gray-900">Expenses</h1>
            <Link href="/expenses/add" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add New Expense</Link>
            {loading ? (
                <p className="text-gray-900">Loading expenses...</p>
            ) : (
                <ul className="list-disc pl-5">
                    {expenses.map(expense => {
                        console.log(`Expense ID: ${expense._id}`);
                        return (
                            <li key={expense._id} className="mt-2 text-gray-900">
                                {expense.description} - ${expense.amount}
                                <button onClick={() => handleDelete(expense._id)} className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                                <Link href={`/expenses/edit/${expense._id}`} className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</Link>
                            </li>
                        );
                    })}
                </ul>
            )}
            <Link href="/dashboard" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Back to Dashboard</Link>
        </div>
    );
};

export default Expenses;
