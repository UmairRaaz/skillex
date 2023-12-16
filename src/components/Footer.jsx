"use client";
import { CiFacebook, CiLinkedin, CiInstagram } from "react-icons/ci";
import { FaBehance, FaDribbble } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="text-gray-800  py-8">
      <div className=" w-[80%] mx-auto grid grid-cols-1 justify-center md:grid-cols-3 items-center ">
        {/* Company Name */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <h1 className="text-2xl text-center md:text-left font-bold">
            Skillex
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-1/2 lg:w-2/4 mt-4 md:mt-0">
          <nav className="flex flex-wrap justify-center md:justify-end">
            <a href="#home" className="text-gray-800 px-3 py-2 hover:text-gray-800">
              Home
            </a>
            <a href="#about" className="text-gray-800 px-3 py-2 hover:text-gray-800">
              About
            </a>
            <a href="#courses" className="text-gray-800 px-3 py-2 hover:text-gray-800">
              Courses
            </a>
            <a href="#reviews" className="text-gray-800 px-3 py-2 hover:text-gray-800">
              Reviews
            </a>
          </nav>
        </div>

        <div className="mt-10 md:mt-0">
          <h3 className="text-xl font-bold mb-2 text-center md:text-left">
            Join Our Community
          </h3>
          <form className="flex" action="#" method="post">
            <input
              className="w-full p-2  border border-gray-300 focus:outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
            <button
              className="bg-[#8abe75] hover:bg-[#fdb17b] transition ease-in-out text-[#1a1b28] font-bold uppercase px-4 "
              type="submit"
            >
              GO
            </button>
          </form>
        </div>
      </div>
      <div className="w-[80%] mx-auto flex md:flex-row flex-col gap-5 md:gap-0 justify-between mt-10 pt-5 md:pt-10 items-center border-t border-gray-300">
        {/* Left side - Copyright */}
        <div>
          <p>&copy; 2023 Copyright Reserved</p>
        </div>

        {/* Right side - Social Media Icons */}
        <div className="flex space-x-4  ">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <CiFacebook
              size={30}
              className="border border-gray-300 rounded-full p-1"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <CiInstagram
              size={30}
              className="border border-gray-300 rounded-full p-1"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <CiLinkedin
              size={30}
              className="border border-gray-300 rounded-full p-1"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaBehance
              size={30}
              className="border border-gray-300 rounded-full p-1"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaDribbble
              size={30}
              className="border border-gray-300 rounded-full p-1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
