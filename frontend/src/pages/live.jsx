import React, { useState } from "react";
import caroserimage1 from "../assets/tvshows/caro1.jpg";

const MovieCard = ({ movie, onWatchNow }) => {
  return (
    <div className="relative w-64 h-96 overflow-hidden rounded-lg shadow-lg group cursor-pointer">
      {/* Movie Image */}
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Sliding Overlay with Blur */}
      <div className="absolute inset-0 text-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 flex flex-col justify-center items-center p-4 backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-2 text-center">{movie.title}</h2>
        <p className="text-sm mb-4 text-center">{movie.description}</p>
        <div className="flex gap-2 justify-center">
          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold"
            onClick={() => onWatchNow(movie)}
          >
            Watch Now
          </button>
          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md font-semibold">
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

function Live() {
  const movies = [
    {
      title: "Dream",
      description:
        "A thrilling adventure of a young hero chasing his dreams against all odds.",
      image: caroserimage1,
    },
    {
      title: "Dream 2",
      description: "The hero faces new challenges in a fantastical world.",
      image: caroserimage1,
    },
    {
      title: "Dream 3",
      description: "An epic conclusion to the hero's journey.",
      image: caroserimage1,
    },
  ];

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showServerBusy, setShowServerBusy] = useState(false);

  const handleWatchNow = (movie) => {
    setSelectedMovie(movie);
  };

  const handlePlay = () => {
    setShowServerBusy(true);
  };

  const handleClose = () => {
    setShowServerBusy(false);
    setSelectedMovie(null);
  };

  // If server busy page
  if (showServerBusy) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
        <h1 className="text-3xl font-bold mb-4">Server is busy now!</h1>
        <p className="mb-6">Please try again later.</p>
        <button
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    );
  }

  // If movie details page
  if (selectedMovie) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <img
          src={selectedMovie.image}
          alt={selectedMovie.title}
          className="w-full max-w-md rounded-lg mb-6 object-cover"
        />
        <h2 className="text-3xl font-bold mb-2">{selectedMovie.title}</h2>
        <p className="mb-6 text-center">{selectedMovie.description}</p>
        <div className="flex gap-4">
          <button
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md font-semibold"
            onClick={handlePlay}
          >
            Play
          </button>
          <button
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-md font-semibold"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // Default movie list page
  return (
    <div className="flex gap-4 p-4 overflow-x-auto">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} onWatchNow={handleWatchNow} />
      ))}
    </div>
  );
}

export default Live;
