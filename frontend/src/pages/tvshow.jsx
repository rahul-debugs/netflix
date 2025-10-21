import React from "react";
import Carousel from "react-bootstrap/Carousel";

// 🖼 Carousel Images
import caroserimage1 from "../assets/tvshows/caro1.jpg";
import caroserimage2 from "../assets/tvshows/caro2.jpg";
import caroserimage3 from "../assets/tvshows/caro3.jpg";
import caroserimage4 from "../assets/tvshows/caro4.jpg";
import caroserimage5 from "../assets/tvshows/caro5.jpg";

function Tvshow() {
  const slides = [
    {
      img: caroserimage1,
      title: "Dream",
      tagline: "Chase the impossible. Believe the unstoppable.",
      desc: "A young athlete battles against destiny, society, and his own fears to become a world champion. ‘Dream’ is an inspiring story of passion, perseverance, and hope that will awaken the fire within you.",
    },
    {
      img: caroserimage2,
      title: "Money Heist",
      tagline: "One plan. One team. One last shot at freedom.",
      desc: "Led by the mysterious Professor, a group of outlaws attempts the greatest heist in history — to rob the Royal Mint. Every second counts as chaos, romance, and rebellion ignite a revolution across Europe.",
    },
    {
      img: caroserimage3,
      title: "Squid Game",
      tagline: "Survival is the only prize.",
      desc: "Hundreds of desperate contestants compete in deadly childhood games for a life-changing reward. Beneath the masks lies greed, betrayal, and humanity’s darkest instincts in this global phenomenon.",
    },
    {
      img: caroserimage4,
      title: "Upload",
      tagline: "What if heaven was a digital world?",
      desc: "In the near future, humans can ‘upload’ their consciousness into virtual afterlife worlds. But when Nathan’s upload reveals a conspiracy, he must uncover the truth before he’s deleted — forever.",
    },
    {
      img: caroserimage5,
      title: "Monster: The Ed Gein Story",
      tagline: "The face of fear was real.",
      desc: "Inspired by true events, this chilling docudrama explores the twisted mind of Ed Gein — the killer whose crimes reshaped horror forever. Step inside the psyche of madness… if you dare.",
    },
  ];

  return (
    <>
    <div className="w-full">
      <Carousel fade interval={5000} pause="hover">
        {slides.map((slide, i) => (
          <Carousel.Item key={i}>
            <div className="relative w-full h-screen overflow-hidden">
              {/* 🔹 Background Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover transform transition-transform duration-[4000ms] ease-in-out hover:scale-105"
              />

              {/* 🔳 Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

              {/* 🎬 Text Overlay */}
              <div className="absolute bottom-28 left-10 md:left-20 text-white max-w-2xl">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate-fadeInUp">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl font-semibold italic text-blue-400 mb-4 animate-fadeInUp delay-100">
                  {slide.tagline}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-6 animate-fadeInUp delay-200">
                  {slide.desc}
                </p>

                {/* 🎥 Buttons */}
                <div className="flex gap-4 animate-fadeInUp delay-300">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-semibold transition">
                    ▶ Watch Now
                  </button>
                  <button className="border border-gray-400 hover:bg-gray-100 hover:text-black px-6 py-2 rounded-full text-lg font-semibold transition">
                    + Add to Watchlist
                  </button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>

    {/* the heading  */}

    <div className="text-center py-12 px-4 md:px-8">
  <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
    Get Back to Growth with <span className="text-blue-600 dark:text-blue-500">the World’s #1 Streaming Experience</span>
  </h1>
  <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
    Here at <span className="font-semibold text-gray-900 dark:text-white">NetStream</span>, we focus on delivering entertainment where technology, innovation, and creativity unlock new stories, experiences, and growth for our viewers worldwide.
  </p>
</div>


    </>
  );
}

export default Tvshow;
