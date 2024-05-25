import Link from 'next/link';
import React from 'react';

const Settings: React.FC = () => {
    return (
        <div>
            <h1>Settings</h1>
            <p>Adjust your account settings here.</p>
            <Link href="/dashboard">Back to Dashboard</Link>
        </div>
    );
};

export default Settings;