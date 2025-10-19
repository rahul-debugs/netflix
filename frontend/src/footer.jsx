import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-3xl font-bold mb-2">Your Logo</div>
          <p className="text-gray-400 text-sm">Tagline goes here</p>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {/* About Us */}
          <div className="w-64">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-400 text-sm">
              We create amazing experiences for our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-64">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="w-64">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}