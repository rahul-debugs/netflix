import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

// 🖼 Carousel Images
import caroserimage1 from "../assets/caroserimage1.jpg";
import caroserimage2 from "../assets/caroserimage2.jpg";
import caroserimage3 from "../assets/caroserimage4.jpg";

// 🎬 Movie Cards Images
import moviecard1 from "../assets/moviecard1.jpg";
import moviecard2 from "../assets/moviecard2.jpg";
import moviecard3 from "../assets/moviecard3.jpg";
import moviecard4 from "../assets/moviecard4.jpg";
import moviecard5 from "../assets/moviecard5.jpg";
import moviecard6 from "../assets/moviecard6.jpg";
import moviecard7 from "../assets/moviecard7.jpg";
import moviecard8 from "../assets/moviecard8.jpg";

function TrendingMoviesCarousel() {
  const movies = [
    {
      id: 1,
      title: "Anime Saga",
      description:
        "A breathtaking journey through different anime worlds where heroes from every universe unite.",
      img: caroserimage1,
      details:
        "Anime Saga is a crossover adventure blending popular anime universes into one epic story. Follow legendary characters as they confront a cosmic threat that could erase all anime worlds. Filled with stunning visuals, emotional storytelling, and heroic battles, it’s a celebration of anime culture that fans will love.",
    },
    {
      id: 2,
      title: "Action Reloaded",
      description:
        "When the world’s most dangerous agent returns from retirement, chaos follows in every step.",
      img: caroserimage2,
      details:
        "‘Action Reloaded’ follows Jack Cross, a former black-ops agent pulled back into the field after a global terrorist network resurfaces. Explosions, car chases, and intense close-quarter fights fill this adrenaline-packed thriller — a must-watch for fans of Mission Impossible and John Wick.",
    },
    {
      id: 3,
      title: "Angry Birds Reloaded",
      description:
        "The classic birds return with more humor, more explosions, and brand-new enemies to defeat.",
      img: caroserimage3,
      details:
        "The birds are back in their most chaotic adventure yet! When a mysterious energy crystal lands on Bird Island, it triggers new powers and old rivalries. Packed with hilarious moments and vibrant animation, ‘Angry Birds Reloaded’ is fun for all ages and full of family-friendly comedy.",
    },
    {
      id: 4,
      title: "Squid Game",
      description:
        "Ordinary people risk everything in deadly childhood games for a life-changing prize.",
      img: moviecard1,
      details:
        "The global sensation returns — this time with even higher stakes. ‘Squid Game’ explores the darkest corners of human greed and desperation as contestants compete in deadly children’s games for a massive cash prize. The show questions morality, survival, and the cost of hope.",
    },
    {
      id: 5,
      title: "The Amazing Spiderman",
      description:
        "A young Peter Parker faces new challenges balancing high school, love, and superhero duty.",
      img: moviecard2,
      details:
        "In ‘The Amazing Spiderman,’ Peter uncovers hidden truths about his parents while battling new villains in New York City. With groundbreaking visuals and emotional storytelling, this version of Spiderman captures the struggle of being a hero and a teenager at the same time.",
    },
    {
      id: 6,
      title: "The Lion King",
      description:
        "A powerful story of courage, family, and destiny that has touched hearts for generations.",
      img: moviecard4,
      details:
        "Disney’s ‘The Lion King’ follows Simba’s journey from a playful cub to the rightful king of the Pride Lands. With breathtaking visuals, unforgettable music, and emotional depth, it remains one of the most beloved animated movies of all time — a timeless tale of love, loss, and leadership.",
    },
    {
      id: 7,
      title: "Venom",
      description:
        "When a journalist bonds with an alien symbiote, he becomes something far more dangerous.",
      img: moviecard5,
      details:
        "Eddie Brock’s life takes a dark turn when he merges with Venom — an alien symbiote with incredible powers and a violent personality. Together, they form an unlikely partnership to survive a sinister conspiracy. Filled with dark humor and thrilling action, ‘Venom’ redefines antihero storytelling.",
    },
    {
      id: 8,
      title: "Peaky Blinders",
      description:
        "A fearless crime family rises from the streets of Birmingham to control an empire.",
      img: moviecard6,
      details:
        "Set in post-World War I England, ‘Peaky Blinders’ follows Thomas Shelby and his ruthless gang as they climb the ranks of power. Known for its intense drama, sharp suits, and iconic music, it’s a masterclass in storytelling about ambition, loyalty, and betrayal.",
    },
    {
      id: 9,
      title: "Avengers: Endgame",
      description:
        "Earth’s mightiest heroes assemble for one final battle to save the universe.",
      img: moviecard7,
      details:
        "After the devastating events of Infinity War, the Avengers unite for their last stand against Thanos. ‘Endgame’ is an emotional and action-packed conclusion to a decade-long Marvel saga, delivering epic battles, heartfelt moments, and a powerful message about sacrifice and unity.",
    },
    {
      id: 10,
      title: "Iron Man",
      description:
        "A genius billionaire builds a high-tech suit and becomes the world’s first armored hero.",
      img: moviecard8,
      details:
        "Tony Stark’s journey from arrogant inventor to selfless hero began with ‘Iron Man.’ This iconic Marvel film introduced the world to a new kind of superhero — one powered by intelligence, innovation, and heart. A must-watch for fans of technology and heroism.",
    },
  ];

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleWatchNow = (movie) => setSelectedMovie(movie);
  const handleCloseDetails = () => setSelectedMovie(null);
  const handlePlayMovie = () => setIsPlaying(true);
  const handleClosePlayer = () => setIsPlaying(false);

  return (
    <>
      {/* 🌀 Carousel Section */}
      <div className="w-full">
        <Carousel fade interval={4000} pause="hover">
          {[caroserimage1, caroserimage2, caroserimage3].map((img, i) => (
            <Carousel.Item key={i}>
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
                <img src={img} alt={`Slide ${i}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* 🔹 Title Section */}
      <div className="text-center my-10">
        <h1 className="text-3xl md:text-4xl font-bold">Top Movies in English</h1>
        <p className="mt-2 text-sm md:text-base">
          Discover the{" "}
          <mark className="bg-yellow-400 text-black px-1 rounded">most trending</mark>{" "}
          films everyone is watching right now.
        </p>
      </div>

      {/* 🎬 Movie Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 my-8">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full h-44 sm:h-48 md:h-52 overflow-hidden">
              <img
                src={movie.img}
                alt={movie.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-3 text-center">
              <h5 className="text-sm sm:text-base font-semibold">{movie.title}</h5>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 line-clamp-2">
                {movie.description}
              </p>
              <button
                onClick={() => handleWatchNow(movie)}
                className="bg-blue-600 hover:bg-blue-500 text-xs sm:text-sm px-3 py-1.5 rounded mt-2"
              >
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🎞 Movie Details Modal */}
      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 relative">
            <button
              onClick={handleCloseDetails}
              className="absolute top-3 right-3 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedMovie.title}</h2>
            <img
              src={selectedMovie.img}
              alt={selectedMovie.title}
              className="rounded-lg mb-4 w-full h-64 object-cover object-center"
            />
            <p className="text-sm md:text-base leading-relaxed">
              {selectedMovie.details}
            </p>
            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={handlePlayMovie}
                className="bg-green-600 hover:bg-green-500 text-sm px-4 py-2 rounded"
              >
                ▶ Play
              </button>
              <button
                onClick={handleCloseDetails}
                className="bg-gray-700 hover:bg-gray-600 text-sm px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🎥 Movie Player Modal */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[60]">
          <div className="bg-gray-900 text-white p-6 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 text-center relative">
            <button
              onClick={handleClosePlayer}
              className="absolute top-3 right-3 text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold mb-4">🎬 {selectedMovie?.title}</h3>
            <div className="w-full h-64 bg-black flex items-center justify-center rounded-lg border border-gray-700">
              <p className="text-red-500 text-lg font-semibold">🚧 Server Busy! Please try again later.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TrendingMoviesCarousel;
