import React, { useState, useEffect } from "react";
import football from "../assets/livetv/carosel1.jpg";
import music from "../assets/livetv/carosel2.jpg";
import cricket from "../assets/livetv/carosel3.jpg";

import cardCricket1 from "../assets/livetv/cardcricket1.jpg";
import cardCricket2 from "../assets/livetv/cardcricket2.jpg";
import cardCricket3 from "../assets/livetv/cardcricket3.jpg";
import cardCricket4 from "../assets/livetv/cardcricket4.jpg";
import cardCricket5 from "../assets/livetv/cardcricket5.jpg";

import cardFootball1 from "../assets/livetv/cardfootball1.jpg";
import cardFootball2 from "../assets/livetv/cardfootball2.jpg";
import cardFootball3 from "../assets/livetv/cardfootball3.jpg";
import cardFootball4 from "../assets/livetv/cardfootball4.jpg";
import cardFootball5 from "../assets/livetv/cardfootball5.jpg";

import cardJock1 from "../assets/livetv/cardjock1.jpg";
import cardJock2 from "../assets/livetv/cardjock2.jpg";

import cardMusic1 from "../assets/livetv/cardmusic1.jpg";
import cardMusic2 from "../assets/livetv/cardmusic2.jpg";
import cardMusic3 from "../assets/livetv/cardmusic3.jpg";

function Live() {
  const slides = [
    {
      id: 1,
      image: football,
      tag: "LIVE NOW",
      title: "Football Premier League",
      description:
        "Experience top clubs clash in real time — intensity, skill, and passion at its peak.",
      button: "Watch Live",
    },
    {
      id: 2,
      image: music,
      tag: "LIVE SHOW",
      title: "Global Music Fest",
      description:
        "Join the world’s most electrifying live music performances from global artists.",
      button: "Join Show",
    },
    {
      id: 3,
      image: cricket,
      tag: "UPCOMING",
      title: "Cricket Championship Finals",
      description:
        "The final showdown of champions. Every boundary, every wicket, live and exclusive.",
      button: "Set Reminder",
    },
  ];

  // ✅ Updated channels data (music4 removed)
  const imagesData = {
    "All Categories": [
      // Football
      { img: cardFootball1, title: "Football Match", time: "6:00 PM", date: "24 Oct 2025" },
      { img: cardFootball2, title: "Champions League", time: "8:00 PM", date: "24 Oct 2025" },
      { img: cardFootball3, title: "Tennis Highlights", time: "9:30 PM", date: "24 Oct 2025" },
      { img: cardFootball4, title: "Soccer Night", time: "11:00 PM", date: "25 Oct 2025" },
      { img: cardFootball5, title: "Premier League", time: "1:00 AM", date: "25 Oct 2025" },

      // Music
      { img: cardMusic1, title: "Global Music Fest", time: "7:00 PM", date: "24 Oct 2025" },
      { img: cardMusic2, title: "Pop Hits Live", time: "9:00 PM", date: "24 Oct 2025" },
      { img: cardMusic3, title: "Classical Night", time: "11:30 PM", date: "25 Oct 2025" },

      // Cricket
      { img: cardCricket1, title: "T20 Match Live", time: "4:00 PM", date: "24 Oct 2025" },
      { img: cardCricket2, title: "World Cup Final", time: "6:00 PM", date: "24 Oct 2025" },
      { img: cardCricket3, title: "Highlights Show", time: "8:00 PM", date: "24 Oct 2025" },
      { img: cardCricket4, title: "IPL Live Stream", time: "10:00 PM", date: "25 Oct 2025" },
      { img: cardCricket5, title: "Match Preview", time: "12:00 AM", date: "25 Oct 2025" },

      // Jockey
      { img: cardJock1, title: "Racing Live", time: "5:00 PM", date: "24 Oct 2025" },
      { img: cardJock2, title: "Horse Derby Highlights", time: "7:00 PM", date: "25 Oct 2025" },
    ],
    "Football Live": [
      { img: cardFootball1, title: "Football Match", time: "6:00 PM", date: "24 Oct 2025" },
      { img: cardFootball2, title: "Champions League", time: "8:00 PM", date: "24 Oct 2025" },
      { img: cardFootball4, title: "Soccer Night", time: "11:00 PM", date: "25 Oct 2025" },
      { img: cardFootball5, title: "Premier League", time: "1:00 AM", date: "25 Oct 2025" },
    ],
    Music: [
      { img: cardMusic1, title: "Global Music Fest", time: "7:00 PM", date: "24 Oct 2025" },
      { img: cardMusic2, title: "Pop Hits Live", time: "9:00 PM", date: "24 Oct 2025" },
      { img: cardMusic3, title: "Classical Night", time: "11:30 PM", date: "25 Oct 2025" },
    ],
    "Cricket Channel": [
      { img: cardCricket1, title: "T20 Match Live", time: "4:00 PM", date: "24 Oct 2025" },
      { img: cardCricket2, title: "World Cup Final", time: "6:00 PM", date: "24 Oct 2025" },
      { img: cardCricket3, title: "Highlights Show", time: "8:00 PM", date: "24 Oct 2025" },
      { img: cardCricket4, title: "IPL Live Stream", time: "10:00 PM", date: "25 Oct 2025" },
      { img: cardCricket5, title: "Match Preview", time: "12:00 AM", date: "25 Oct 2025" },
    ],
    "Jockey Channel": [
      { img: cardJock1, title: "Racing Live", time: "5:00 PM", date: "24 Oct 2025" },
      { img: cardJock2, title: "Horse Derby Highlights", time: "7:00 PM", date: "25 Oct 2025" },
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChannel, setSelectedChannel] = useState("All Categories");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleWatchNow = () => {
    alert("Server is busy, try again later.");
  };

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);

  const channels = Object.keys(imagesData);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800 pb-20">
      {/* Carousel Section */}
      <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-gray-100 mt-4">
        <div className="relative h-[500px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-16 left-10 text-white max-w-xl">
                <span className="px-4 py-1 bg-yellow-500/90 text-sm font-semibold rounded-full uppercase tracking-wide shadow-md">
                  {slide.tag}
                </span>
                <h2 className="text-4xl font-bold mt-4 mb-2 drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-base text-gray-100 leading-relaxed mb-5">
                  {slide.description}
                </p>
                <button
                  onClick={handleWatchNow}
                  className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {slide.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/60 hover:bg-white p-2 rounded-full shadow-md"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/60 hover:bg-white p-2 rounded-full shadow-md"
        >
          ▶
        </button>
      </div>

      {/* Channels Section */}
      <div className="mt-12 px-8">
        <h3 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Browse Live Categories
        </h3>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {channels.map((channel) => (
            <button
              key={channel}
              onClick={() => setSelectedChannel(channel)}
              className={`px-6 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300 ${
                selectedChannel === channel
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {channel}
            </button>
          ))}
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {(selectedChannel
            ? imagesData[selectedChannel]
            : imagesData["All Categories"]
          ).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full shadow-md">
                  LIVE
                </span>
              </div>
              <div className="p-4">
                <h5 className="font-semibold text-gray-900 mb-1 text-sm">
                  {item.title}
                </h5>
                <p className="text-gray-600 text-xs mb-1">{item.time}</p>
                <p className="text-gray-400 text-xs mb-3">{item.date}</p>
                <button
                  onClick={handleWatchNow}
                  className="w-full py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 shadow-md transition-all"
                >
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Live;
