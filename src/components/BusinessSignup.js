// src/components/BusinessSignup.js
import React, { useState } from 'react';

const BusinessSignup = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    location: '',
    email: '',
    password: '',
    confirmPassword: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple password check
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Business Signup Data:', formData);
    // Submit to backend or Firebase here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Business Partner Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          placeholder="Business Name"
          required
          className="w-full p-2 border rounded"
        />
        
        <select
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select Business Type</option>
          <option value="Fashion">Fashion</option>
          <option value="Technology">Technology</option>
          <option value="Food">Food</option>
          <option value="Health & Wellness">Health & Wellness</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Business Location (City, State)"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create Password"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
          className="w-full p-2 border rounded"
        />

        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          placeholder="Tell us more about your business (optional)"
          rows="3"
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default BusinessSignup;
