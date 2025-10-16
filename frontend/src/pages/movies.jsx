import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import caroserimage1 from "../assets/caroserimage1.jpg";
import caroserimage2 from "../assets/caroserimage2.jpg";
import caroserimage3 from "../assets/caroserimage4.jpg";

function TrendingMoviesCarousel() {
  // Movie data array
  const movies = [
    {
      id: 1,
      title: "Anime Saga",
      description: "A breathtaking adventure through the multiverse of anime heroes.",
      img: caroserimage1,
      details: "Full details about Anime Saga go here... maybe a longer description, trailer link, cast info, etc."
    },
    {
      id: 2,
      title: "Action Reloaded",
      description: "Explosive battles, daring missions — experience the ultimate action.",
      img: caroserimage2,
      details: "Full details about Action Reloaded..."
    },
    {
      id: 3,
      title: "Angry Birds Reloaded",
      description: "The birds are back — with more chaos, laughter, and explosive fun!",
      img: caroserimage3,
      details: "Full details about Angry Birds Reloaded..."
    },
    {
      id: 4,
      title: "Legends Reborn",
      description: "Heroes unite once again for an unforgettable cinematic journey.",
      img: caroserimage1,
      details: "Full details about Legends Reborn..."
    },
  ];

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleWatchNow = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      {/* 🌀 Carousel Section */}
      <div className="w-full">
        <Carousel fade interval={4000} pause="hover">
          <Carousel.Item>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
              <img src={caroserimage1} alt="Anime Mix" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <Carousel.Caption className="absolute bottom-10 left-6 md:left-10 text-left">
                <h3 className="text-white text-3xl md:text-5xl font-bold mb-3">Anime World Mix</h3>
                <p className="text-gray-200 text-sm md:text-lg max-w-lg font-light">
                  Explore the most trending anime series and movies of the week — exclusive on Prime.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
              <img src={caroserimage2} alt="Action Heroes" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <Carousel.Caption className="absolute bottom-10 left-6 md:left-10 text-left">
                <h3 className="text-white text-3xl md:text-5xl font-bold mb-3">Mission Alpha: Retribution</h3>
                <p className="text-gray-200 text-sm md:text-lg max-w-lg font-light">
                  The most watched action thriller of 2025 — streaming exclusively on Prime Video.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
              <img src={caroserimage3} alt="Angry Birds Adventure" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <Carousel.Caption className="absolute bottom-10 left-6 md:left-10 text-left">
                <h3 className="text-white text-3xl md:text-5xl font-bold mb-3">Angry Birds: The Big Rescue</h3>
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
        <h1 className="text-3xl md:text-4xl font-bold">Top Movies in English</h1>
        <p className="mt-2 text-sm md:text-base">
          Discover the <mark className="bg-yellow-400 text-black px-1 rounded">most trending</mark> films everyone is watching right now.
        </p>
      </div>

      {/* 🎬 Responsive Card Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 my-8">
        {movies.map((movie) => (
          <div key={movie.id} className="card bg-dark text-white shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={movie.img} className="card-img-top rounded-t-lg" alt={movie.title} />
            <div className="card-body text-center">
              <h5 className="card-title text-lg font-bold">{movie.title}</h5>
              <p className="card-text text-sm text-gray-300">{movie.description}</p>
              <button onClick={() => handleWatchNow(movie)} className="btn btn-primary mt-2">
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 relative">
            <button onClick={handleCloseDetails} className="absolute top-3 right-3 text-xl font-bold">&times;</button>
            <h2 className="text-2xl font-bold mb-4">{selectedMovie.title}</h2>
            <img src={selectedMovie.img} alt={selectedMovie.title} className="rounded-lg mb-4" />
            <p>{selectedMovie.details}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default TrendingMoviesCarousel;
