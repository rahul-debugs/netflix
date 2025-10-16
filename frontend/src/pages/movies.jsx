import React from "react";
import Carousel from "react-bootstrap/Carousel";
import caroserimage1 from "../assets/caroserimage1.jpg"; // Anime
import caroserimage2 from "../assets/caroserimage2.jpg"; // Action
import caroserimage3 from "../assets/caroserimage4.jpg"; // Angry Birds

function TrendingMoviesCarousel() {
  return (
    <div className="w-full">
      <Carousel fade interval={4000} pause="hover">
        {/* 🌀 Slide 1 - Anime Collection */}
        <Carousel.Item>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
            <img
              src={caroserimage1}
              alt="Anime Mix"
              className="w-full h-full object-cover rounded-none"
            />
            {/* Prime Video–style overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Caption */}
            <Carousel.Caption className="absolute bottom-10 left-6 md:left-10 text-left">
              <h3 className="text-white text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                Anime World Mix
              </h3>
              <p className="text-gray-200 text-sm md:text-lg max-w-lg font-light">
                Explore the most trending anime series and movies of the week — exclusive on Prime.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        {/* 🔥 Slide 2 - Action Thriller */}
        <Carousel.Item>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
            <img
              src={caroserimage2}
              alt="Action Heroes"
              className="w-full h-full object-cover rounded-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            <Carousel.Caption className="absolute bottom-10 left-6 md:left-10 text-left">
              <h3 className="text-white text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                Mission Alpha: Retribution
              </h3>
              <p className="text-gray-200 text-sm md:text-lg max-w-lg font-light">
                The most watched action thriller of 2025 — streaming exclusively on Prime Video.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        {/* 🐦 Slide 3 - Angry Birds */}
        <Carousel.Item>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
            <img
              src={caroserimage3}
              alt="Angry Birds Adventure"
              className="w-full h-full object-cover rounded-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            <Carousel.Caption className="absolute bottom-10 left-6 md:left-10 text-left">
              <h3 className="text-white text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                Angry Birds: The Big Rescue
              </h3>
              <p className="text-gray-200 text-sm md:text-lg max-w-lg font-light">
                Join Red and friends on their funniest and most explosive adventure yet!
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default TrendingMoviesCarousel;
