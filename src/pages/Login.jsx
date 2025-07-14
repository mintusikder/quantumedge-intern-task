import { useState } from "react";
import { Link } from "react-router";
import { FiMail, FiLock } from "react-icons/fi";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import logredimg from "../assets/img/logregimg.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Implement login logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-300">
        {/* Left Section (Login Form) */}
        <div className="w-full bg-gradient-to-r from-[#112c03] to-[#073a0b] md:w-1/2 p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-sm mb-6">
            Don't have an account?{" "}
            <Link to="/register" className="underline text-[#049424] font-medium">
              Register
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#049424] text-gray-200 bg-transparent"
              />
            </div>

            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#049424] text-gray-200 bg-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#05af2b] hover:bg-[#049424] py-2 rounded font-semibold transition"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="mb-2">Or sign in with</p>
            <div className="flex justify-center gap-4 text-lg">
              <button className="bg-white text-[#05af2b] p-2 rounded-full hover:bg-gray-200">
                <FaGoogle />
              </button>
              <button className="bg-white text-[#05af2b] p-2 rounded-full hover:bg-gray-200">
                <FaFacebookF />
              </button>
              <button className="bg-white text-[#05af2b] p-2 rounded-full hover:bg-gray-200">
                <FaGithub />
              </button>
            </div>
          </div>

          <p className="text-xs text-white mt-6 leading-6">
            By signing in, you agree to the Fiverr Terms of Service. Read our{" "}
            <span className="underline text-[#049424]">Privacy Policy</span> to learn how we use your data.
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="hidden md:block w-full md:w-1/2">
          <img
            src={logredimg}
            alt="Login Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
