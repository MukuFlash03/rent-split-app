import React from 'react';
import Link from 'next/link';

const Groups: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-2xl font-bold mb-2 text-gray-900">Groups</h1>
            <p className="text-gray-900">Manage your groups here.</p>
            <Link href="/dashboard" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Back to Dashboard</Link>
        </div>
    );
};

export default Groups;