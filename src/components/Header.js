import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-gray-700 flex justify-between fixed top-0 w-full z-50 px-4 py-2 text-white">
            <div className="flex items-center">
                <img
                    className="w-14 h-12 rounded"
                    alt="logo"
                    src="https://static.vecteezy.com/system/resources/previews/000/390/524/original/modern-company-logo-design-vector.jpg"
                />
            </div>
            <div className="flex items-center">
                <input
                    className="border border-yellow-300 rounded-md px-2 py-1 text-black"
                    type="text"
                    placeholder="Search your influencer"
                />
            </div>
            <div className="flex items-center">
                <ul className="flex space-x-6 font-medium">
                    <Link to="/"><li className="hover:text-yellow-300 cursor-pointer">Home</li></Link>
                    <Link to="/discover"><li className="hover:text-yellow-300 cursor-pointer">Discover</li></Link>
                    <Link to="/about"><li className="hover:text-yellow-300 cursor-pointer">About Us</li></Link>
                    <Link to="/contact"><li className="hover:text-yellow-300 cursor-pointer">Contact Us</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;
