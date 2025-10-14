import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeimage from '../assets/homeimage1.jpg';

function Wel() {
    // to redirected the link 
  const navigate = useNavigate();

  const handleStartWatching = () => {
    navigate('/auth');
  };

  return (
    // 1. WELCOME CONTAINER: Full screen, dark background, relative, using Flex to justify content to the start (left)
    <div 
      className="h-screen bg-black relative overflow-hidden flex items-center justify-start p-4 sm:p-8 md:p-16"
      style={{
        backgroundImage: `url(${homeimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      {/* 2. GRADIENT OVERLAY: Creates the dark fade from left to right (Prime Video effect) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30"></div>

      {/* 3. CONTENT AREA: Left-aligned and responsive */}
      <div className="relative z-10 text-white text-left w-full max-w-xl md:max-w-2xl mx-auto md:mx-0">
        
        {/* H1 Title: Larger font sizes and heavier weight for impact */}
        {/* text-5xl on mobile, md:text-7xl (huge) on desktop. font-extrabold: Super bold */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-none tracking-tight">
          Movie rentals on <span className="text-cyan-400">NetStream</span>
        </h1>
        
        {/* Subtitle: Clean, larger font, slightly lighter color */}
        {/* text-xl on mobile, md:text-3xl on desktop. text-gray-200: Clear but secondary color */}
        <p className="text-xl md:text-3xl text-gray-200 mb-10">
          Early Access to new movies, before digital subscription
        </p>
        
        {/* Login Button: Larger size, more aggressive shadow, stronger hover effect */}
        {/* bg-cyan-500: Strong accent color, py-4 px-12: More padding, text-xl: Larger text */}
        <button 
          type="button" 
          onClick={handleStartWatching}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-12 rounded-lg transition duration-300 ease-in-out shadow-2xl text-xl w-full sm:w-80"
        >
          START WATCHING
        </button>
      </div>
    </div>
  );
}

export default Wel;