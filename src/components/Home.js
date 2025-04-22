import { Link } from "react-router-dom";
import AboutUs from "./Aboutus";
import ContactUs from "./Contactus";
import Discover from "./Discover";

const Home = () => {
  return (
    <div className="w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section
        className="h-screen mt-16 bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://www.smallbusiness.wa.gov.au/sites/default/files/media-library/images/influencer-marketing.jpg')",
        }}
      >
        <div className="bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg text-center max-w-xl w-full border dark:border-gray-700">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Welcome to Influencer Hub
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/loginb">
              <button className="px-5 py-3 border border-cyan-800 dark:border-cyan-500 rounded hover:bg-cyan-800 hover:text-white transition-all ease-in-out duration-300">
                Login As a Business Partner
              </button>
            </Link>
            <Link to="/loginInf">
              <button className="px-5 py-3 border border-yellow-800 dark:border-yellow-500 rounded hover:bg-yellow-800 hover:text-white transition-all ease-in-out duration-300">
                Login As an Influencer
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="w-full bg-gray-50 dark:bg-gray-800 py-16">
        <Discover />
      </section>

      {/* About Section */}
      <section className="w-full bg-white dark:bg-gray-900 py-16">
        <AboutUs />
      </section>

      {/* Contact Section */}
      <section className="w-full bg-gray-50 dark:bg-gray-800 py-16">
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;
