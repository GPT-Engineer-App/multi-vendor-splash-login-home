import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 shadow-lg rounded-md">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email address</label>
          <input className="w-full px-3 py-2 border rounded-md" type="email" id="email" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
          <input className="w-full px-3 py-2 border rounded-md" type="password" id="password" />
        </div>
        <button className="w-full py-2 bg-blue-500 text-white rounded-md" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;