import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const storedUser = JSON.parse(localStorage.getItem('user'));
                if (storedUser) {
                    setUser(storedUser);
                    setLoading(false);
                } else {
                    setError('No user data found in localStorage');
                }
            } catch (error) {
                setError('Error fetching user data');
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const imageSrc = user?.profileImage
        ? `http://localhost:3000/${user.profileImage}`
        : `https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg`;

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center w-full bg-pink-100/80 px-4 py-12"
            style={{
                backgroundImage: "url('https://img.freepik.com/premium-photo/illustration-fitness-equipments-design-background_916191-36137.jpg?w=996')",
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay'
            }}
        >
            <h2 className="text-4xl font-bold text-pink-600 mb-6 drop-shadow-md">User Profile</h2>

            {loading ? (
                <p className="text-lg text-gray-700">Loading...</p>
            ) : user ? (
                <div className="w-full max-w-md bg-white/90 border border-pink-200 rounded-2xl shadow-lg overflow-hidden">
                    <div className="h-64 w-full">
                        <img
                            src={imageSrc}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-t-2xl"
                            onError={(e) => e.currentTarget.src = 'default-profile.png'}
                        />
                    </div>
                    <div className="p-6 text-gray-700">
                        <p className="text-lg font-semibold mb-2">
                            <strong>Username:</strong> {user.username}
                        </p>
                        <p className="text-lg font-semibold mb-6">
                            <strong>Email:</strong> {user.email}
                        </p>
                        <Link to={`/update/${user._id}`}>
                            <button className="w-full bg-pink-300 hover:bg-pink-400 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200">
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <p className="text-lg text-red-600">{error}</p>
            )}
        </div>
    );
};

export default ProfilePage;
