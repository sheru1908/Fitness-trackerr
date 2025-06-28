import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaCamera, FaEye, FaEyeSlash } from 'react-icons/fa';
import BgVideo from '../../assets/videos/reg.mp4';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        profileImage: ''
    });
    const [preview, setPreview] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const { username, email, password } = formData;

    const onChange = e => {
        if (e.target.name === 'profileImage') {
            const file = e.target.files[0];
            setFormData({ ...formData, profileImage: file });
            setPreview(URL.createObjectURL(file));
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!username) newErrors.username = 'Username is required';
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Za-z]/.test(email.split('@')[0])) {
            newErrors.email = 'The first character of the email username must be a letter';
        }
        if (!password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const onSubmit = async e => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            Object.values(validationErrors).forEach(error => toast.error(error));
            return;
        }

        const data = new FormData();
        data.append('username', formData.username);
        data.append('email', formData.email);
        data.append('password', formData.password);
        data.append('profileImage', formData.profileImage);

        try {
            const res = await axios.post('http://localhost:3000/user/create/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            navigate('/');
            toast.success(res.data.message);
        } catch (err) {
            toast.error(err.response.data.error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
            {/* <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay muted loop>
                <source src={BgVideo} type="video/mp4" />
            </video> */}

            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-0" />

            <div className="relative p-8 rounded-lg shadow-2xl max-w-md w-full backdrop-blur-md bg-black bg-opacity-60 z-10">
                <h2 className="text-center text-3xl font-extrabold text-pink-400 mb-4">Register</h2>
                <form onSubmit={onSubmit}>
                    {/* Preview image */}
                    {/* {preview && (
                        <img src={preview} alt="Profile Preview" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                    )} */}

                    {/* Upload Button */}
                    {/* <label htmlFor="profileImage" className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center border border-pink-400 cursor-pointer hover:bg-pink-200/20 transition">
                        <span className="text-pink-300">
                            <FaCamera size={30} />
                        </span>
                        <input
                            type="file"
                            id="profileImage"
                            name="profileImage"
                            accept="image/*"
                            onChange={onChange}
                            className="hidden"
                        />
                    </label> */}

                    {/* Username */}
                    <div className="mb-4">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={onChange}
                            className="w-full px-3 py-2 border border-pink-500 placeholder-pink-300 text-white bg-transparent rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                            required
                        />
                        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            value={email}
                            onChange={onChange}
                            className="w-full px-3 py-2 border border-pink-500 placeholder-pink-300 text-white bg-transparent rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div className="mb-4 relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={onChange}
                            className="w-full px-3 py-2 border border-pink-500 placeholder-pink-300 text-white bg-transparent rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                            required
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute top-0 right-0 mr-4 mt-3 text-pink-300"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    {/* Submit */}
                    <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-200">
                        Register
                    </button>
                </form>

                {/* Link to Login */}
                <div className="text-center mt-4">
                    <p className="text-pink-200">
                        Already have an account? <Link to="/" className="text-pink-400 hover:underline">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
