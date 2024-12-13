import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white">
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center">
          <img
            src="school-logo.png"
            alt="School Logo"
            className="w-12 h-12 mr-2"
          />
          <span className="text-lg font-bold">Shree Badimalika Secondary School</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:underline">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:underline">
            <i className="fab fa-youtube"></i>
          </a>
          <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
            Admission Open
          </button>
        </div>
      </div>
      <div className="bg-white text-black">
        <nav className="flex justify-center space-x-8 p-4 text-sm font-medium">
          <a href="#" className="hover:underline">HOME</a>
          <a href="#" className="hover:underline">ABOUT US</a>
          <a href="#" className="hover:underline">ACTIVITIES</a>
          <a href="#" className="hover:underline">TEAM</a>
          <a href="#" className="hover:underline">NOTICE</a>
          <a href="#" className="hover:underline">VACANCY</a>
          <a href="#" className="hover:underline">BLOG</a>
          <a href="#" className="hover:underline">CONTACT US</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
