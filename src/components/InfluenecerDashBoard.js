import React, { useState } from 'react';

const InfluencerDashBoard = () => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const businesses = [
    {
      name: 'TechCorp Solutions',
      price: '₹50,000',
      industry: 'Technology',
      location: 'Bangalore, India',
      clientName: 'John Doe',
      description: 'Innovative tech solutions for enterprises.',
      moreInfo: 'TechCorp is focused on AI-based solutions for businesses, offering a range of innovative products to enhance productivity.',
    },
    {
      name: 'Healthy Bites',
      price: '₹25,000',
      industry: 'Food & Beverage',
      location: 'Mumbai, India',
      clientName: 'Sarah Lee',
      description: 'Organic snacks and health products for busy professionals.',
      moreInfo: 'Healthy Bites offers nutritious snack options tailored to health-conscious individuals looking for quick and tasty solutions.',
    },
    {
      name: 'Green Ventures',
      price: '₹40,000',
      industry: 'Environmental',
      location: 'New Delhi, India',
      clientName: 'David Smith',
      description: 'Eco-friendly solutions for sustainable living.',
      moreInfo: 'Green Ventures works towards promoting sustainable living with a focus on eco-friendly products and services for individuals and businesses.',
    },
    {
      name: 'Fashionista',
      price: '₹30,000',
      industry: 'Fashion',
      location: 'Delhi, India',
      clientName: 'Emma White',
      description: 'Trendy fashion accessories for all occasions.',
      moreInfo: 'Fashionista is a leading brand offering a wide range of accessories, from handbags to jewelry, focusing on quality and style.',
    },
    {
      name: 'Adventure Seekers',
      price: '₹45,000',
      industry: 'Travel & Tourism',
      location: 'Goa, India',
      clientName: 'James Brown',
      description: 'Adventures and experiences for thrill-seekers.',
      moreInfo: 'Adventure Seekers provides guided tours and packages for adrenaline enthusiasts, from hiking to scuba diving.',
    },
    {
      name: 'FitnessX',
      price: '₹20,000',
      industry: 'Health & Fitness',
      location: 'Hyderabad, India',
      clientName: 'Lily Adams',
      description: 'Personalized fitness training and wellness solutions.',
      moreInfo: 'FitnessX offers tailored fitness programs, from personal training to group classes, with a focus on well-being.',
    },
    {
      name: 'Eco-Friendly Homes',
      price: '₹60,000',
      industry: 'Real Estate',
      location: 'Chennai, India',
      clientName: 'Michael Davis',
      description: 'Sustainable, energy-efficient housing solutions.',
      moreInfo: 'Eco-Friendly Homes builds homes with an emphasis on renewable energy and sustainable materials for environmentally conscious buyers.',
    },
    {
      name: 'Techno Gadgets',
      price: '₹35,000',
      industry: 'Technology',
      location: 'Pune, India',
      clientName: 'Ava Wilson',
      description: 'Latest gadgets and tech innovations.',
      moreInfo: 'Techno Gadgets is a leading retailer of cutting-edge technology, offering everything from smartwatches to home automation devices.',
    },
    {
      name: 'Beauty & Bliss',
      price: '₹18,000',
      industry: 'Beauty',
      location: 'Mumbai, India',
      clientName: 'Sophia Turner',
      description: 'Organic skincare and beauty products.',
      moreInfo: 'Beauty & Bliss offers a range of organic, cruelty-free beauty products designed to cater to every skin type and concern.',
    },
    {
      name: 'Smart Kids',
      price: '₹22,000',
      industry: 'Education',
      location: 'Bangalore, India',
      clientName: 'Oliver Harris',
      description: 'Interactive learning for children.',
      moreInfo: 'Smart Kids focuses on educational toys and interactive learning tools to help children develop essential skills.',
    },
    {
      name: 'Pet Care Pro',
      price: '₹40,000',
      industry: 'Pets',
      location: 'Kolkata, India',
      clientName: 'Emily Clark',
      description: 'Premium products and services for pets.',
      moreInfo: 'Pet Care Pro offers a wide variety of pet care products, from food to grooming, ensuring pets receive the best care.',
    },
    {
      name: 'Digital Dreams',
      price: '₹55,000',
      industry: 'Digital Marketing',
      location: 'Delhi, India',
      clientName: 'Henry Miller',
      description: 'Cutting-edge digital marketing strategies.',
      moreInfo: 'Digital Dreams provides comprehensive digital marketing solutions, including SEO, social media marketing, and brand management.',
    },
    {
      name: 'Gourmet Grub',
      price: '₹28,000',
      industry: 'Food Delivery',
      location: 'Mumbai, India',
      clientName: 'Isabella Walker',
      description: 'Gourmet meals delivered to your door.',
      moreInfo: 'Gourmet Grub specializes in high-end, chef-prepared meals delivered right to your door, catering to busy professionals.',
    },
    {
      name: 'Smart Home Solutions',
      price: '₹70,000',
      industry: 'Home Automation',
      location: 'Pune, India',
      clientName: 'Alexander Martinez',
      description: 'Innovative solutions for a smarter home.',
      moreInfo: 'Smart Home Solutions offers state-of-the-art home automation systems, from lighting controls to advanced security systems.',
    },
    {
      name: 'Gaming World',
      price: '₹38,000',
      industry: 'Gaming',
      location: 'Chennai, India',
      clientName: 'Charlotte Lee',
      description: 'The ultimate destination for gamers.',
      moreInfo: 'Gaming World is a premier gaming platform that offers the latest games, consoles, and accessories for gaming enthusiasts.',
    },
  ];

  const handleViewDetails = (business) => {
    setSelectedBusiness(business);
  };

  const handleCloseDetails = () => {
    setSelectedBusiness(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 p-8">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Influencer Dashboard</h2>
        <p className="text-center text-gray-600 mb-10">
          Discover businesses that are perfect for influencer marketing campaigns. Click on a business to explore more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{business.name}</h3>
              <p className="text-md text-gray-500 mb-2">{business.industry}</p>
              <p className="text-sm text-gray-400 mt-2">{business.description}</p>
              <p className="text-sm text-gray-600 mt-2">Client: {business.clientName}</p>
              <p className="text-sm text-gray-600">Location: {business.location}</p>
              <p className="mt-2 text-xl font-semibold text-teal-600">Price: {business.price}</p>
              <button
                onClick={() => handleViewDetails(business)}
                className="mt-4 bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition duration-200"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {selectedBusiness && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{selectedBusiness.name}</h3>
              <p className="text-lg text-gray-600 mb-2">Industry: {selectedBusiness.industry}</p>
              <p className="text-lg text-gray-600 mb-4">Client: {selectedBusiness.clientName}</p>
              <p className="text-md text-gray-500 mb-4">{selectedBusiness.moreInfo}</p>
              <button
                onClick={handleCloseDetails}
                className="mt-4 bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfluencerDashBoard;
