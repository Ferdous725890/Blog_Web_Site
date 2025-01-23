import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black/40 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">ReadNest</h1>
            <p className="text-sm">© 2025 Readnest. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
            <a href="/Profile" className="hover:text-gray-400">
              Profile
            </a>
            <a href="/about" className="hover:text-gray-400">
              About
            </a>
            <a href="/contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>

          <div className="mt-4 md:mt-0">
            <p className="text-sm mb-2">Follow us on:</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-400">
                Facebook
              </a>
              <a href="https://twitter.com" className="hover:text-gray-400">
                Twitter
              </a>
              <a href="https://instagram.com" className="hover:text-gray-400">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
