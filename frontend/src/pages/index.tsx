import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Rent Split</h1>
            <p className="mb-8">Manage your rental expenses easily.</p>
            <div className="space-x-4">
                <Link href="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</Link>
                <Link href="/login" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</Link>
            </div>
        </div>
    );
};

export default Home;