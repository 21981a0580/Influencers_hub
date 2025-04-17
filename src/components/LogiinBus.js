import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginBus = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Dummy credentials for Business Partner Login
  const dummyCredentials = {
    email: 'partner@example.com',  // business partner email
    password: 'partner123',  // business partner password
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login validation (replace with real backend auth logic)
    if (email === dummyCredentials.email && password === dummyCredentials.password) {
      navigate('/BusinessPartnerDashBoard'); // Redirect to Business Partner Dashboard
    } else {
      alert('Invalid credentials! Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.smallbusiness.wa.gov.au/sites/default/files/media-library/images/influencer-marketing.jpg')", // Change background image as necessary
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-teal-600 text-center mb-4">Business Partner Login</h2>
        <p className="text-center text-gray-600 mb-6">Welcome back! Please login to continue.</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="********"
            />
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <label>
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <a href="/forgot-password" className="text-teal-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          New business partner?{' '}
          <a href="/signupbusiness" className="text-teal-600 hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginBus;
