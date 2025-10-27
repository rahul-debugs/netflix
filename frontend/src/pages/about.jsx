import React from "react";
import { motion } from "framer-motion";
import { Users, Rocket, Star, HeartHandshake, HelpCircle } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 flex flex-col items-center px-6 py-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Welcome to <span className="text-blue-600 font-semibold">NetStream</span> — your gateway to
          seamless entertainment. We bring you the best of movies, TV shows, and more, all curated to
          match your vibe.
        </p>
      </motion.div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 max-w-6xl">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition-all duration-300">
          <div className="flex items-center justify-center mb-4 text-blue-600">
            <Users size={40} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 text-center">Our Team</h3>
          <p className="text-gray-600 text-sm text-center mt-2">
            A group of passionate creators, developers, and storytellers who make streaming better.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition-all duration-300">
          <div className="flex items-center justify-center mb-4 text-pink-500">
            <HeartHandshake size={40} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 text-center">Our Mission</h3>
          <p className="text-gray-600 text-sm text-center mt-2">
            To connect people through stories and make premium entertainment accessible to everyone.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition-all duration-300">
          <div className="flex items-center justify-center mb-4 text-green-500">
            <Rocket size={40} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 text-center">Our Vision</h3>
          <p className="text-gray-600 text-sm text-center mt-2">
            To revolutionize how the world experiences digital entertainment with innovation and creativity.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition-all duration-300">
          <div className="flex items-center justify-center mb-4 text-yellow-500">
            <Star size={40} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 text-center">Why Choose Us</h3>
          <p className="text-gray-600 text-sm text-center mt-2">
            Top-rated content, sleek UI, and a smooth streaming experience tailored for you.
          </p>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Join the Stream Revolution</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Experience limitless entertainment anytime, anywhere. Start your journey with us today.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-500 transition-all">
          Get Started
        </button>
      </motion.div>

      {/* Q&A Section */}
      <div className="max-w-4xl mt-20 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-3 text-blue-600">
            <HelpCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-2">
            Got questions? We’ve got answers. Here’s everything you need to know about NetStream.
          </p>
        </motion.div>

        <div className="space-y-5">
          {/* Question 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              💡 What is NetStream?
            </h3>
            <p className="text-gray-600 text-sm">
              NetStream is an online entertainment platform offering movies, series, and shows from
              around the world with an easy-to-use and modern interface.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              🎥 Do I need a subscription to watch content?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes, NetStream provides affordable subscription plans for unlimited streaming access with
              no ads and exclusive premium content.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              ⚙️ Can I watch NetStream on multiple devices?
            </h3>
            <p className="text-gray-600 text-sm">
              Absolutely! You can stream on smartphones, laptops, tablets, or smart TVs — anytime,
              anywhere.
            </p>
          </div>

          {/* Question 4 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              🌍 Is NetStream available globally?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes! NetStream is available worldwide, so you can enjoy your favorite content no matter
              where you are.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
