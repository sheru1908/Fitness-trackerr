import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import BgVideo from '../../assets/videos/ll.mp4';
import '../User_Account/Login.css';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { useAuth } from '../../AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const { email, password } = formData;
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false); 
    const { login } = useAuth();

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const res = await axios.post('http://localhost:3000/user/login', formData);
            const { token, user } = res.data;
            login(user, token);
            navigate('/web');
            toast.success(`Welcome, ${user.username}!`);
        } catch (err) {
            if (err.response && err.response.data) {
                toast.error(err.response.data.error); 
            } else {
                toast.error('An error occurred. Please try again.'); 
            }
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8 login-container">
            {/* <video 
                className="absolute top-0 left-0 w-full h-full object-cover z-0" 
                autoPlay 
                muted 
                loop
            >
                <source src={BgVideo} type="video/mp4" />
            </video> */}

            {/* Pinkish Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-0" />

            <div className="relative max-w-md w-full rounded-lg overflow-hidden z-10 backdrop-blur-md bg-black bg-opacity-60 shadow-2xl">
                <div className="px-6 py-8">
                    <h2 className="text-center text-3xl font-extrabold text-pink-400 mb-6">Login</h2>
                    <form className="space-y-6" onSubmit={onSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full px-3 py-2 border border-pink-500 placeholder-pink-300 text-white bg-transparent rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={onChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete="current-password"
                                        required
                                        className="w-full px-3 py-2 border border-pink-500 placeholder-pink-300 text-white bg-transparent rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                                        placeholder="Password"
                                        value={password}
                                        onChange={onChange}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute top-0 right-0 mr-4 mt-3 text-pink-300"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                    </form>

                    <div className="text-center mt-6">
                        <p className="text-pink-200">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-pink-400 hover:underline">Register here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
