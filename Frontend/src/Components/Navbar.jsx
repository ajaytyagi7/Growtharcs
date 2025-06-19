import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import  Logo from '../Images/logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <nav className="bg-white w-full z-50 shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        {/* Logo */}
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-18" alt="Growtharcs Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Growtharcs</span> */}
        </a>

        {/* Hamburger button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-bold flex flex-col md:flex-row p-4 md:p-0 mt-4 border border-gray-700 rounded-lg  md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <Link to={'/Home'} className="block py-2 px-3  hover:text-blue-700 md:p-0">HOME</Link>
            </li>
            <li>
              <Link to={'/About'} className="block py-2 px-3  hover:text-blue-700 md:p-0">ABOUT US</Link>
            </li>
            <li>
              <Link to={'/Services'} className="block py-2 px-3  hover:text-blue-700 md:p-0">OUR SERVICES</Link>
            </li>
            <li>
              <Link to={'/Blog'} className="block py-2 px-3  hover:text-blue-700 md:p-0">BLOG</Link>
            </li>
            <li>
              <Link to={'/Contact'} className="block py-2 px-3  hover:text-blue-700 md:p-0">CONTACT US</Link>
            </li>
            <li>
              <button
                onClick={toggleSearch}
                className="block py-2 px-3  cursor-pointer hover:text-blue-500 focus:outline-none md:p-0"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1114.65 6.65 7.5 7.5 0 0116.65 16.65z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>

        {/* Search Popup */}
        {isSearchOpen && (
         <div className="fixed inset-0  bg-opacity-0 backdrop-blur-md flex items-center justify-center z-50">
  <div className="bg-amber-100 p-6 rounded-lg shadow-lg relative">
    <input
      type="text"
      className="w-96 p-4 border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder-gray-700 text-black"
      placeholder="Search........"
    />
    <button
      onClick={toggleSearch}
      className="absolute top-2 right-2 bg-black cursor-pointer text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
    >
      <FaTimes />
    </button>
  </div>
</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;