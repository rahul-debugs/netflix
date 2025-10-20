import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-gray-400">
      {/* 🔧 Inline CSS reset just for this component */}
      <style>
        {`
          footer a {
            color: inherit !important;
            text-decoration: none !important;
          }
          footer a:hover {
            color: #ffffff !important;
            text-decoration: none !important;
          }
        `}
      </style>

      <div className="max-w-screen-xl mx-auto px-6 py-10 lg:py-12">
        {/* Top Section */}
        <div className="md:flex md:justify-between md:items-start">
          <div className="mb-8 md:mb-0">
            <h1 className="text-3xl font-bold text-white tracking-wide">
              NetStream
            </h1>
            <p className="mt-2 text-sm text-gray-500 max-w-xs">
              Watch your favorite movies, shows, and live entertainment in one
              place.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h2 className="mb-3 text-sm font-semibold text-white uppercase">
                Resources
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Developer API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-sm font-semibold text-white uppercase">
                Follow Us
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Cookies Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-gray-500 text-center sm:text-left">
            © 2025 <span className="text-white font-semibold">NetStream™</span>. All rights reserved.
          </span>

          <div className="flex justify-center sm:justify-end mt-4 sm:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
