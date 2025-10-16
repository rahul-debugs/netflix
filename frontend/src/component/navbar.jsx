import React, { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Movies', href: '/movies' },
  { name: 'TV Shows', href: '#' },
  { name: 'Live', href: '#' },
  { name: 'Subscription', href: '#' },
];

function Navbars() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed top-0 w-full z-10 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h3 className="text-xl font-bold text-white no-underline">NetStream</h3>

          <div className="hidden lg:flex lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative text-white text-sm font-medium no-underline py-2
                           after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-red-600 
                           after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:block relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white border border-gray-700 placeholder-gray-400 
                           rounded-full py-1.5 pl-10 pr-4 focus:outline-none focus:ring-2 
                           focus:ring-red-600 w-40 md:w-56 text-sm"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            <button className="p-2 rounded-full text-gray-300 hover:bg-gray-700 transition duration-150 ease-in-out">
              <User className="h-5 w-5" />
            </button>

            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-700">
          <div className="relative mb-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-white border border-gray-700 placeholder-gray-400 
                         rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 
                         focus:ring-red-600 w-full text-sm"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-800 no-underline"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbars;
