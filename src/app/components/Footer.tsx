import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white  w-full p-12  max-w-5xl   ">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024 weraByte. All rights reserved.</p>
        <div>
          <a href="/about" className="text-sm mx-2 hover:text-gray-400">About</a>
          <a href="#" className="text-sm mx-2 hover:text-gray-400">Contact</a>
          <a href="#" className="text-sm mx-2 hover:text-gray-400">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
