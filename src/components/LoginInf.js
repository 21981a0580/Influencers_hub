import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginInf = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login validation (replace with real backend auth logic)
    if (email === 'influencer@example.com' && password === 'password123') {
      navigate('/influencer-dashboard'); // redirect to dashboard
    } else {
      alert('Invalid credentials! Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
        "url('https://www.smallbusiness.wa.gov.au/sites/default/files/media-library/images/influencer-marketing.jpg')",

      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-4">Influencer Login</h2>
        <p className="text-center text-gray-600 mb-6">Welcome back! Please login to continue.</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="you@brand.co"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="********"
            />
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <label>
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <a href="/forgot-password" className="text-pink-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Login
          </button>
        </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
            New influencer?{' '}
            <a href="/signupinf" className="text-pink-600 hover:underline">
                Create account
            </a>
            </p>


      </div>
    </div>
  );
};

export default LoginInf;
