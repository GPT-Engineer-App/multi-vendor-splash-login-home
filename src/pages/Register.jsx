import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleRegister = () => {
    // Handle registration logic here
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 shadow-lg rounded-md">
        <div className="mb-4 text-center">
          <img src="/path/to/logo.png" alt="Company Logo" className="mx-auto mb-4" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="firstname">First Name</label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="lastname">Last Name</label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address</label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            <span className="ml-2">I agree to the Terms and Service</span>
          </label>
        </div>
        <button className="w-full py-2 bg-blue-500 text-white rounded-md" onClick={handleRegister}>Register</button>
        <div className="mt-4 text-center">
          <a href="/login" className="text-blue-500">Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;