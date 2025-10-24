import React, { useState, useEffect } from "react";
import football from "../assets/livetv/carosel1.jpg";
import music from "../assets/livetv/carosel2.jpg";
import cricket from "../assets/livetv/carosel3.jpg";

function Live() {
  const slides = [
    {
      id: 1,
      image: football,
      tag: "LIVE NOW",
      title: "Football Premier League",
      description:
        "Watch the world’s top football clubs battle it out live — high intensity, high drama.",
      button: "Watch Live",
    },
    {
      id: 2,
      image: music,
      tag: "LIVE SHOW",
      title: "Global Music Fest",
      description:
        "Immerse yourself in live performances from world-class artists — streaming in crystal clarity.",
      button: "Join Show",
    },
    {
      id: 3,
      image: cricket,
      tag: "UPCOMING",
      title: "Cricket Championship Finals",
      description:
        "The ultimate face-off is coming soon. Don’t miss the thrill of every over, every wicket.",
      button: "Set Reminder",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/1200x600?text=Next+Big+Show+Coming+Soon",
      tag: "FEATURED",
      title: "Next Big Show",
      description:
        "Stay tuned for our next exclusive live broadcast — fresh, new, and exciting content awaits!",
      button: "View Schedule",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-black">
      {/* Slides */}
      <div className="relative h-[550px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-105 transform transition-transform duration-[4000ms]"
            />

            {/* Dark cinematic gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Text Overlay */}
            <div className="absolute bottom-20 left-10 text-white max-w-2xl">
              <span className="px-4 py-1 bg-white/20 backdrop-blur-sm text-sm font-medium rounded-full tracking-wider uppercase">
                {slide.tag}
              </span>
              <h2 className="text-5xl font-extrabold mt-4 mb-3 leading-tight drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-6 drop-shadow-sm">
                {slide.description}
              </p>

              {/* ✅ Updated Button */}
              <button
                className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 
                           text-white font-semibold rounded-full shadow-md 
                           transition-all duration-300 transform hover:scale-105 
                           hover:bg-blue-600/80 hover:border-blue-400 
                           hover:shadow-blue-500/30 active:scale-95"
              >
                {slide.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        type="button"
        className="absolute top-1/2 left-5 z-30 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-2 rounded-full focus:outline-none"
      >
        <svg
          className="w-4 h-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        type="button"
        className="absolute top-1/2 right-5 z-30 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-2 rounded-full focus:outline-none"
      >
        <svg
          className="w-4 h-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
    </div>
  );
}

export default Live;
