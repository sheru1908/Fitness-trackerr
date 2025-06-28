import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Db from './components/Db';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

import Login from './components/User_Account/Login';
import Register from './components/User_Account/Register';
import ProfilePage from './components/User_Account/ProfilePage';
import Profile from './components/User_Account/Profile';
import EditProfile from './components/User_Account/EditProfile';
import Website from './components/Website';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profilepage" element={<ProtectedRoute element={ProfilePage} />} />
            <Route path="/profile" element={<ProtectedRoute element={Profile} />} />
            <Route path="/update/:userId" element={<ProtectedRoute element={EditProfile} />} />
            <Route path="/db/*" element={<ProtectedRoute element={Db} />} />
            <Route path="/web" element={<Website />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
