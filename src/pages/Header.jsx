import React, { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [freelancerOpen, setFreelancerOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-[#063509] text-white relative z-50">
      {/* Logo + Title */}
      <a href="/" className="flex flex-col items-start leading-tight">
        <span className="text-xl font-extrabold tracking-wide">
          QUANTUMEDGE
        </span>
        <span className="text-sm font-semibold tracking-wide text-gray-300">
          SOFTWARE
        </span>
      </a>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-6">
        <a href="#" className="hover:text-[#05af2b] transition">
          Categories
        </a>

        {/* Search Bar */}
        <form className="hidden lg:flex items-center gap-2 bg-white rounded-full px-3 py-1 text-black">
          <select
            name="category"
            className="bg-white text-sm px-3 py-1 rounded-full border border-gray-300 focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="web">Web Development</option>
            <option value="design">Design</option>
            <option value="writing">Writing</option>
            <option value="seo">SEO</option>
            <option value="marketing">Marketing</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="outline-none px-2 py-1 w-48 text-sm"
          />
          <button
            type="submit"
            className="text-white bg-[#05af2b] hover:bg-[#049126] rounded-full px-4 py-1 text-sm"
          >
            Search
          </button>
        </form>

        <a
          href="#"
          className="text-sm font-medium px-4 py-2 border border-[#05af2b] hover:border-[#05af2b] hover:text-[#05af2b] rounded-full transition"
        >
          Become a Seller
        </a>
        <Link
          to={"/login"}
          className="text-sm font-medium px-4 py-2 hover:text-[#05af2b] transition"
        >
          Login
        </Link>
        <Link
          to={"/register"}
          className="text-sm font-medium px-4 py-2 rounded-full bg-[#05af2b] hover:bg-[#049126] text-white transition"
        >
          Register
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="sm:hidden text-white"
      >
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
          <rect width="24" height="2" fill="currentColor" />
          <rect y="8" width="24" height="2" fill="currentColor" />
          <rect y="16" width="24" height="2" fill="currentColor" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-[#071400] shadow-md flex flex-col gap-3 px-6 py-5 sm:hidden z-40">
          {/* Mobile Search Form */}
          <form className="flex flex-col gap-2 bg-white rounded p-3">
            <select
              name="category"
              className="border border-gray-300 px-3 py-2 rounded text-sm"
              defaultValue=""
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="web">Web Development</option>
              <option value="design">Design</option>
              <option value="writing">Writing</option>
              <option value="seo">SEO</option>
              <option value="marketing">Marketing</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 px-3 py-2 rounded text-sm"
            />
            <button
              type="submit"
              className="bg-[#05af2b] text-white rounded py-2 text-sm hover:bg-[#049126]"
            >
              Search
            </button>
          </form>

          <a href="#" className="text-white">
            Categories
          </a>

          {/* Freelancer Dropdown */}
          <div>
            <button
              onClick={() => setFreelancerOpen(!freelancerOpen)}
              className="text-white flex items-center gap-1"
            >
              Freelancer
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  freelancerOpen ? "rotate-180" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {freelancerOpen && (
              <div className="bg-white text-black rounded mt-1 shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Dashboard
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  My Jobs
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </a>
              </div>
            )}
          </div>

          <a href="#" className="text-white">
            Become a Seller
          </a>
          <a href="#" className="text-white">
            Login
          </a>
          <a href="#" className="text-white">
            Register
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
