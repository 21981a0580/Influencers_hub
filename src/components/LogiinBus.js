import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated to useNavigate

const LogiinBus = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); // Using useNavigate for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a delay for animation
    setTimeout(() => {
      // After the animation, navigate to the dashboard or home page
      navigate('/dashboard'); // Change to your desired path
    }, 1000); // Adjust the time for animation duration
  };

  return (
    <div
      className="mt-8 bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://www.smallbusiness.wa.gov.au/sites/default/files/media-library/images/influencer-marketing.jpg')", // Replace with your image URL
      }}
    >
      {/* Container */}
      <div
        className={`bg-white bg-opacity-80 shadow-lg rounded-lg max-w-md w-full p-8 transition-all duration-700 ${
          isSubmitting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-teal-600">Partner Portal</h1>
          <p className="text-gray-500 text-lg">Login to access your business partner dashboard</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Business Email</label>
            <input
              type="email"
              placeholder="you@business.com"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="********"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="h-4 w-4 text-teal-500 border-gray-300 rounded" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember Me</label>
            </div>
            <a href="/forgot-password" className="text-sm text-teal-600 hover:text-teal-700">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 text-white bg-teal-600 hover:bg-teal-700 rounded-md text-lg font-semibold transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Don't have an account? <a href="/signupbusiness" className="text-teal-600 hover:text-teal-700">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LogiinBus;
