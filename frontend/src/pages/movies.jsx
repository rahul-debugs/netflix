import React from "react";
import Carousel from "react-bootstrap/Carousel";
import caroserimage1 from "../assets/caroserimage1.jpg";
import caroserimage2 from "../assets/caroserimage2.jpg";
import caroserimage3 from "../assets/caroserimage4.jpg";

function TrendingMoviesCarousel() {
  return (
    <>
      {/* 🌀 Carousel Section */}
      <div className="w-full">
        <Carousel fade interval={4000} pause="hover">
          {/* Slide 1 - Anime */}
          <Carousel.Item>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
              <img
                src={caroserimage1}
                alt="Anime Mix"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <Carousel.Caption className="absolute bottom-10 left-6 md:left-10 text-left">
                <h3 className="text-white text-3xl md:text-5xl font-bold mb-3">
                  Anime World Mix
                </h3>
                <p className="text-gray-200 text-sm md:text-lg max-w-lg font-light">
                  Explore the most trending anime series and movies of the week — exclusive on Prime.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          {/* Slide 2 - Action */}
          <Carousel.Item>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
              <img
                src={caroserimage2}
                alt="Action Heroes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <Carousel.Caption className="absolute bottom-10 left-6 md:left-10 text-left">
                <h3 className="text-white text-3xl md:text-5xl font-bold mb-3">
                  Mission Alpha: Retribution
                </h3>
                <p className="text-gray-200 text-sm md:text-lg max-w-lg font-light">
                  The most watched action thriller of 2025 — streaming exclusively on Prime Video.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          {/* Slide 3 - Angry Birds */}
          <Carousel.Item>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
              <img
                src={caroserimage3}
                alt="Angry Birds Adventure"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <Carousel.Caption className="absolute bottom-10 left-6 md:left-10 text-left">
                <h3 className="text-white text-3xl md:text-5xl font-bold mb-3">
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

      {/* 🔹 Title Section */}
      <div className="text-center my-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          Top Movies in English
        </h1>
        <p className="mt-2 text-sm md:text-base">
          Discover the{" "}
          <mark className="bg-yellow-400 text-black px-1 rounded">
            most trending
          </mark>{" "}
          films everyone is watching right now.
        </p>
      </div>

      {/* 🎬 Responsive Card Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 my-8">
        {/* Card 1 */}
        <div className="card bg-dark text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src={caroserimage1}
            className="card-img-top rounded-t-lg"
            alt="Movie 1"
          />
          <div className="card-body text-center">
            <h5 className="card-title text-lg font-bold">Anime Saga</h5>
            <p className="card-text text-sm text-gray-300">
              A breathtaking adventure through the multiverse of anime heroes.
            </p>
            <a href="#" className="btn btn-primary mt-2">
              Watch Now
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-dark text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src={caroserimage2}
            className="card-img-top rounded-t-lg"
            alt="Movie 2"
          />
          <div className="card-body text-center">
            <h5 className="card-title text-lg font-bold">Action Reloaded</h5>
            <p className="card-text text-sm text-gray-300">
              Explosive battles, daring missions — experience the ultimate action.
            </p>
            <a href="#" className="btn btn-primary mt-2">
              Watch Now
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-dark text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src={caroserimage3}
            className="card-img-top rounded-t-lg"
            alt="Movie 3"
          />
          <div className="card-body text-center">
            <h5 className="card-title text-lg font-bold">Angry Birds Reloaded</h5>
            <p className="card-text text-sm text-gray-300">
              The birds are back — with more chaos, laughter, and explosive fun!
            </p>
            <a href="#" className="btn btn-primary mt-2">
              Watch Now
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-dark text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src={caroserimage1}
            className="card-img-top rounded-t-lg"
            alt="Movie 4"
          />
          <div className="card-body text-center">
            <h5 className="card-title text-lg font-bold">Legends Reborn</h5>
            <p className="card-text text-sm text-gray-300">
              Heroes unite once again for an unforgettable cinematic journey.
            </p>
            <a href="#" className="btn btn-primary mt-2">
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingMoviesCarousel;
