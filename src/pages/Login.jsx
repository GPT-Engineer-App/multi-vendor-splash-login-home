import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [loginValue, setLoginValue] = useState('');

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 shadow-lg rounded-md">
        <div className="mb-4 text-center">
          <img src="/path/to/logo.png" alt="Company Logo" className="mx-auto mb-4" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="loginValue">Email or Phone Number</label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="text"
            id="loginValue"
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
          <input className="w-full px-3 py-2 border rounded-md" type="password" id="password" />
        </div>
        <div className="mb-4 text-center">
          <a href="/forgot-password" className="text-blue-500">Forgot Password?</a>
        </div>
        <button className="w-full py-2 bg-blue-500 text-white rounded-md" onClick={handleLogin}>Login</button>
        <div className="mt-4 text-center">
          <a href="/register" className="text-blue-500">Don't have an account? Register</a>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <button className="p-2 bg-gray-200 rounded-full">
            <FaGoogle size={24} />
          </button>
          <button className="p-2 bg-gray-200 rounded-full">
            <FaApple size={24} />
          </button>
          <button className="p-2 bg-gray-200 rounded-full">
            <FaFacebook size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;