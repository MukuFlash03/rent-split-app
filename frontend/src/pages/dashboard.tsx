import React from 'react';
import Link from 'next/link';
import LogoutButton from '../components/LogoutButton';

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-2xl font-bold mb-2 text-gray-900">Dashboard</h1>
            <p className="text-gray-900">Welcome to your dashboard.</p>
            <div className="mt-4">
                <Link href="/expenses" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Manage Expenses</Link>
                <Link href="/groups" className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Manage Groups</Link>
            </div>
            <LogoutButton />
        </div>
    );
};

export default Dashboard;