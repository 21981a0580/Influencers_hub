import React, { useState } from 'react';

const BusinessPartnerDashboard = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    minInstagramFollowers: 0,
    minYouTubeFollowers: 0,
    influencerType: '',
    minBudget: 0,
  });

  const influencers = [
    { name: 'Alice Johnson', instagramFollowers: 100000, youtubeFollowers: 50000, influencerType: 'Fashion', location: 'Mumbai, India', budget: 25000 },
    { name: 'Ben Lee', instagramFollowers: 300000, youtubeFollowers: 150000, influencerType: 'Technology', location: 'Bangalore, India', budget: 50000 },
    { name: 'Cathy King', instagramFollowers: 150000, youtubeFollowers: 20000, influencerType: 'Food', location: 'Delhi, India', budget: 30000 },
    { name: 'David Smith', instagramFollowers: 50000, youtubeFollowers: 250000, influencerType: 'Technology', location: 'Hyderabad, India', budget: 20000 },
    { name: 'Emma White', instagramFollowers: 200000, youtubeFollowers: 100000, influencerType: 'Fashion', location: 'Mumbai, India', budget: 35000 },
    { name: 'Franklin Turner', instagramFollowers: 80000, youtubeFollowers: 60000, influencerType: 'Food', location: 'Goa, India', budget: 15000 },
    { name: 'Grace Lee', instagramFollowers: 250000, youtubeFollowers: 300000, influencerType: 'Travel', location: 'Chennai, India', budget: 60000 },
    { name: 'Hannah Green', instagramFollowers: 100000, youtubeFollowers: 75000, influencerType: 'Technology', location: 'Kochi, India', budget: 40000 },
    { name: 'Ivy Harris', instagramFollowers: 400000, youtubeFollowers: 100000, influencerType: 'Food', location: 'Pune, India', budget: 45000 },
    { name: 'Jack Miller', instagramFollowers: 120000, youtubeFollowers: 200000, influencerType: 'Travel', location: 'Bangalore, India', budget: 35000 },
    { name: 'Kimberly Adams', instagramFollowers: 220000, youtubeFollowers: 90000, influencerType: 'Fashion', location: 'Delhi, India', budget: 32000 },
    { name: 'Liam Brown', instagramFollowers: 50000, youtubeFollowers: 150000, influencerType: 'Food', location: 'Jaipur, India', budget: 28000 },
    { name: 'Maya Clark', instagramFollowers: 350000, youtubeFollowers: 50000, influencerType: 'Technology', location: 'Noida, India', budget: 37000 },
    { name: 'Nathan Moore', instagramFollowers: 80000, youtubeFollowers: 300000, influencerType: 'Travel', location: 'Kolkata, India', budget: 20000 },
    { name: 'Olivia Carter', instagramFollowers: 150000, youtubeFollowers: 50000, influencerType: 'Food', location: 'Chennai, India', budget: 30000 },
  ];

  const handleFilterChange = (e) => {
    setSelectedFilters({
      ...selectedFilters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredInfluencers = influencers.filter((influencer) => {
    const meetsInstagram = influencer.instagramFollowers >= selectedFilters.minInstagramFollowers;
    const meetsYouTube = influencer.youtubeFollowers >= selectedFilters.minYouTubeFollowers;
    const meetsType = selectedFilters.influencerType ? influencer.influencerType === selectedFilters.influencerType : true;
    const meetsBudget = influencer.budget >= selectedFilters.minBudget;

    return meetsInstagram && meetsYouTube && meetsType && meetsBudget;
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 p-8">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Business Partner Dashboard</h2>
        <p className="text-center text-gray-600 mb-10">
          Filter influencers by their social media presence, influencer type, and budget.
        </p>

        {/* Filter Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Minimum Instagram Followers</label>
              <input
                type="number"
                name="minInstagramFollowers"
                value={selectedFilters.minInstagramFollowers}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter number of followers"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Minimum YouTube Followers</label>
              <input
                type="number"
                name="minYouTubeFollowers"
                value={selectedFilters.minYouTubeFollowers}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter number of followers"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Influencer Type</label>
              <select
                name="influencerType"
                value={selectedFilters.influencerType}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">Any</option>
                <option value="Fashion">Fashion</option>
                <option value="Technology">Technology</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Minimum Budget</label>
              <input
                type="number"
                name="minBudget"
                value={selectedFilters.minBudget}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter minimum budget"
              />
            </div>
          </div>
        </div>

        {/* Influencer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInfluencers.length === 0 ? (
            <p className="text-xl text-gray-500 text-center w-full">No influencers found with the selected filters.</p>
          ) : (
            filteredInfluencers.map((influencer, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{influencer.name}</h3>
                <p className="text-md text-gray-500 mb-2">Influencer Type: {influencer.influencerType}</p>
                <p className="text-sm text-gray-400 mt-2">Location: {influencer.location}</p>
                <p className="text-sm text-gray-600 mt-2">Instagram Followers: {influencer.instagramFollowers}</p>
                <p className="text-sm text-gray-600 mt-2">YouTube Followers: {influencer.youtubeFollowers}</p>
                <p className="mt-2 text-xl font-semibold text-teal-600">Budget: ₹{influencer.budget}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessPartnerDashboard;
