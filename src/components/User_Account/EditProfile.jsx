import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const EditProfile = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        profileImage: ''
    });
    const [message, setMessage] = useState('');
    const [preview, setPreview] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/user/users/${userId}`);
                const { username, email, profileImage } = res.data;
                setFormData({
                    username: username || '',
                    email: email || '',
                    password: '',
                    profileImage: profileImage || ''
                });
                setPreview(profileImage ? `http://localhost:3000/${profileImage}` : '');
            } catch (err) {
                console.error('Error fetching user data:', err);
            }
        };

        fetchUserData();
    }, [userId]);

    const { username, email, password } = formData;

    const onChange = (e) => {
        if (e.target.name === 'profileImage') {
            const file = e.target.files[0];
            setFormData({ ...formData, profileImage: file });
            setPreview(URL.createObjectURL(file));
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('username', formData.username);
        data.append('email', formData.email);
        data.append('password', formData.password);
        data.append('profileImage', formData.profileImage);

        try {
            const res = await axios.put(`http://localhost:3000/user/users/${userId}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate('/');
            setMessage(res.data.message);
        } catch (err) {
            console.error('Error updating profile:', err);
            setMessage(err.response?.data?.error || 'Error updating profile');
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://img.freepik.com/premium-photo/illustration-fitness-equipments-design-background_916191-36137.jpg?w=996')",
            }}
        >
            <div className="min-h-screen flex items-center justify-center px-4 bg-pink-100/70 backdrop-blur-sm">
                <div className="w-full max-w-lg bg-white/90 rounded-2xl shadow-xl p-8 border border-pink-200">
                    <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">Update Profile</h2>

                    <form onSubmit={onSubmit}>
                        {/* Image Upload */}
                        <div className="mb-6">
                            {preview && (
                                <img
                                    src={preview}
                                    alt="Profile Preview"
                                    className="w-full h-56 object-cover rounded-xl mb-4 border border-pink-200"
                                />
                            )}
                            <input
                                type="file"
                                name="profileImage"
                                accept="image/*"
                                onChange={onChange}
                                className="w-full px-4 py-2 bg-pink-100 rounded-lg text-gray-700 focus:outline-pink-300"
                            />
                        </div>

                        {/* Username */}
                        <div className="mb-4">
                            <label className="block text-pink-600 font-medium mb-1">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={onChange}
                                className="w-full px-4 py-2 bg-pink-100 rounded-lg text-gray-800 focus:outline-pink-300"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-pink-600 font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChange}
                                className="w-full px-4 py-2 bg-pink-100 rounded-lg text-gray-800 focus:outline-pink-300"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-6">
                            <label className="block text-pink-600 font-medium mb-1">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    className="w-full px-4 py-2 bg-pink-100 rounded-lg text-gray-800 focus:outline-pink-300"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-pink-500"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-pink-300 text-white font-semibold rounded-xl hover:bg-pink-400 transition duration-300"
                        >
                            Save Changes
                        </button>
                    </form>

                    {/* Message */}
                    {message && (
                        <p className="mt-4 text-center text-red-500 font-medium">{message}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
