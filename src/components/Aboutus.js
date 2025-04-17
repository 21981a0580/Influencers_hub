import { FaUsers, FaHandshake, FaGlobeAsia } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="pt-10 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-teal-500 to-teal-700 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Discover more about our mission and how we are empowering businesses and creators worldwide.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 lg:px-24 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition duration-300">
            <div className="text-teal-600 text-4xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold mb-2">Find Influencers</h3>
            <p className="text-gray-600">
              Use powerful filters to discover influencers based on niche, location, engagement & more.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition duration-300">
            <div className="text-teal-600 text-4xl mb-4">
              <FaHandshake />
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaborate Seamlessly</h3>
            <p className="text-gray-600">
              Create campaigns and manage collaborations with built-in tools and smart contracts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition duration-300">
            <div className="text-teal-600 text-4xl mb-4">
              <FaGlobeAsia />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600">
              Connect with creators and businesses from different countries to scale your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-3xl font-bold mb-4">Start Discovering Today</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Whether you're a business or a creator, Influencer Hub helps you find the perfect match to grow your impact.
        </p>
        <a
          href="/signup"
          className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
