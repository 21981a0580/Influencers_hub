import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="pt-10 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-teal-600 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg">We’re here to help and answer any questions you might have.</p>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get In Touch</h2>
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-teal-600 text-xl mt-1 mr-4" />
              <p>123 Influencer Street, Creator City, IN 560001</p>
            </div>
            <div className="flex items-start">
              <FaPhoneAlt className="text-teal-600 text-xl mt-1 mr-4" />
              <p>+91 90005 24501</p>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="text-teal-600 text-xl mt-1 mr-4" />
              <p>support@influencerhub.com</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-3">Prefer to talk with us?</p>
            <a
              href="mailto:support@influencerhub.com"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition"
            >
              Email Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-teal-600 text-white text-center py-8">
        <p>&copy; 2025 Influencer Hub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ContactUs;
