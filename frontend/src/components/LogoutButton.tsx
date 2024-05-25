import { useRouter } from 'next/router';

const LogoutButton: React.FC = () => {
    const router = useRouter();

    const handleLogout = () => {
        // Assuming you're using localStorage to store the token
        localStorage.removeItem('token');

        // Redirect to the login page or home page after logout
        router.push('/login');
    };

    return (
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Logout
        </button>
    );
};

export default LogoutButton;