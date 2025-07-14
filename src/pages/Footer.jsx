import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#071400] text-white pt-12 pb-6 px-6 md:px-16 lg:px-24 xl:px-32">
      {/* CTA Section */}
      <div className="bg-[#063509] rounded-xl p-6 md:p-10 mb-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Reach Your Requirement Goals Right on Schedule
        </h2>
        <p className="max-w-xl mx-auto mb-5 text-gray-300">
          Sign up, complete your profile, and start browsing projects. Submit
          proposals and communicate with clients to get hired.
        </p>
        <button className="bg-[#05af2b] hover:bg-[#049424] transition px-6 py-2 text-sm font-medium rounded-full">
          Get Started
        </button>
      </div>

      {/* Main Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm mb-10">
        {/* Branding */}
        <div>
          <h3 className="text-lg font-bold mb-3">QUANTUMEDGE SOFTWARE</h3>
          <p className="text-gray-400">
            Delivering technology solutions that empower your business future.
          </p>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold text-white mb-3">About</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Become Seller</a>
            </li>
            <li>
              <a href="#">ProProJobs</a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold text-white mb-3">Categories</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#">Design & Creative</a>
            </li>
            <li>
              <a href="#">Development & IT</a>
            </li>
            <li>
              <a href="#">Music & Audio</a>
            </li>
            <li>
              <a href="#">Programming & Tech</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-white mb-3">Support</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms & Services</a>
            </li>
          </ul>
        </div>

        {/* Popular Post */}
        <div>
          <h4 className="font-semibold text-white mb-3">Our Popular Post</h4>
          <div className="space-y-3 text-gray-300">
            <p className="border-b border-gray-700 pb-2">
              Unveils the Best Canadian Cities for Biking
              <br />
              <span className="text-xs text-gray-400">2025</span>
            </p>
            <p className="border-b border-gray-700 pb-2">
              Unveils the Best Canadian Cities for Biking
              <br />
              <span className="text-xs text-gray-400">2025</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        <p className="text-xs text-gray-400">
          © QuantumEdge Software INC. 2025. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-300 hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
