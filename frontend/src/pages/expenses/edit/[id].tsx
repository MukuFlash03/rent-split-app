import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const EditExpense: React.FC = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchExpense = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/expenses/${id}`);
                setDescription(response.data.description);
                setAmount(response.data.amount);
            } catch (error) {
                console.error('Error fetching expense:', error);
            }
        };
        if (id) {
            console.log(`Expense ID in PUT: ${id}`);
            fetchExpense();
        }
    }, [id]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Submitting for ID:', id);
        try {
            await axios.put(`http://localhost:5000/api/expenses/${id}`, { description, amount: Number(amount) });
            router.push('/expenses');
        } catch (error) {
            console.error('Error updating expense:', error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-2xl font-bold mb-4 text-gray-900">Edit Expense</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update Expense</button>
            </form>
        </div>
    );
};

export default EditExpense;