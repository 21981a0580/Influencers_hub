import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InfluencerSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    instagramUsername: '',
    youtubeChannel: '',
    instagramFollowers: '',
    youtubeSubscribers: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // TODO: Send formData to backend
    navigate('/influencer-dashboard');
  };

  return (
    <div className="mt-11 min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-300">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-xl">
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">Create Influencer Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400"
              placeholder="jane@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400"
              placeholder="********"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Instagram Username</label>
              <input
                type="text"
                name="instagramUsername"
                value={formData.instagramUsername}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400"
                placeholder="@yourhandle"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Instagram Followers</label>
              <input
                type="number"
                name="instagramFollowers"
                value={formData.instagramFollowers}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400"
                placeholder="e.g. 12000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">YouTube Channel</label>
              <input
                type="text"
                name="youtubeChannel"
                value={formData.youtubeChannel}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400"
                placeholder="Your Channel Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">YouTube Subscribers</label>
              <input
                type="number"
                name="youtubeSubscribers"
                value={formData.youtubeSubscribers}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400"
                placeholder="e.g. 5000"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white font-semibold py-2 mt-4 rounded-md hover:bg-pink-700"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/loginInf" className="text-pink-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default InfluencerSignup;
