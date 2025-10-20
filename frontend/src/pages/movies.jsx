import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";


// 🖼 Carousel Images
import caroserimage1 from "../assets/caroserimage1.jpg";
import caroserimage2 from "../assets/caroserimage2.jpg";
import caroserimage3 from "../assets/caroserimage4.jpg";

// 🎬 English Movie Cards
import moviecard1 from "../assets/moviecard1.jpg";
import moviecard2 from "../assets/moviecard2.jpg";
import moviecard3 from "../assets/moviecard3.jpg";
import moviecard4 from "../assets/moviecard4.jpg";
import moviecard5 from "../assets/moviecard5.jpg";
import moviecard6 from "../assets/moviecard6.jpg";
import moviecard7 from "../assets/moviecard7.jpg";
import moviecard8 from "../assets/moviecard8.jpg";
import moviecard9 from "../assets/moviecard9.jpg";
import moviecard10 from "../assets/moviecard10.jpg";

// 🎬 Tamil Movie Cards
import moviestamil1 from "../assets/movietamil1.jpg";
import moviestamil2 from "../assets/movietamil2.jpg";
import moviestamil3 from "../assets/movietamil3.jpg";
import moviestamil4 from "../assets/movietamil4.jpg";
import moviestamil5 from "../assets/movietamil5.jpg";
import moviestamil6 from "../assets/movietamil6.jpg";
import moviestamil7 from "../assets/movietamil7.jpg";
import moviestamil8 from "../assets/movietamil8.jpg";

// Top Malayam Movies

import malayamovie1 from "../assets/malayamovie1.jpg";
import malayamovie2 from "../assets/malayamovie2.jpg";
import malayamovie3 from "../assets/malayamovie3.jpg";
import malayamovie4 from "../assets/malayamovie4.jpg";
import malayamovie5 from "../assets/malayamovie5.jpg";
import malayamovie6 from "../assets/malayamovie6.jpg";
import malayamovie7 from "../assets/malayamovie7.jpg";
import malayamovie8 from "../assets/malayamovie8.jpg";

// Top webseries ALl time

import movieweb0 from "../assets/movieweb0.jpg";
import movieweb1 from "../assets/movieweb1.jpg";
import movieweb2 from "../assets/movieweb2.jpg";
import movieweb3 from "../assets/movieweb3.jpg";
import movieweb4 from "../assets/movieweb4.jpg";
import movieweb5 from "../assets/movieweb5.jpg";
import movieweb6 from "../assets/movieweb6.jpg";
import movieweb7 from "../assets/movieweb7.jpg";
import movieweb8 from "../assets/movieweb8.jpg";
import movieweb9 from "../assets/movieweb9.jpg";
import movieweb10 from "../assets/movieweb10.jpg";




function TrendingMoviesCarousel() {
  // ================= ENGLISH MOVIES =================
  const englishMovies = [
    {
      id: 1,
      title: "Anime Saga",
      description:
        "A breathtaking journey through different anime worlds where heroes from every universe unite.",
      img: caroserimage1,
      details:
        "Anime Saga is a crossover adventure blending popular anime universes into one epic story...",
    },
    {
      id: 2,
      title: "Action Reloaded",
      description:
        "When the world’s most dangerous agent returns from retirement, chaos follows in every step.",
      img: caroserimage2,
      details:
        "‘Action Reloaded’ follows Jack Cross, a former black-ops agent pulled back into the field...",
    },
    {
      id: 3,
      title: "Angry Birds Reloaded",
      description:
        "The classic birds return with more humor, more explosions, and brand-new enemies to defeat.",
      img: caroserimage3,
      details:
        "The birds are back in their most chaotic adventure yet! When a mysterious energy crystal lands...",
    },
    {
      id: 4,
      title: "Squid Game",
      description:
        "Ordinary people risk everything in deadly childhood games for a life-changing prize.",
      img: moviecard1,
      details:
        "The global sensation returns — this time with even higher stakes...",
    },
    {
      id: 5,
      title: "The Amazing Spiderman",
      description:
        "A young Peter Parker faces new challenges balancing high school, love, and superhero duty.",
      img: moviecard2,
      details:
        "In ‘The Amazing Spiderman,’ Peter uncovers hidden truths about his parents...",
    },
    {
      id: 6,
      title: "The Lion King",
      description:
        "A powerful story of courage, family, and destiny that has touched hearts for generations.",
      img: moviecard4,
      details:
        "Disney’s ‘The Lion King’ follows Simba’s journey from a playful cub...",
    },
    {
      id: 7,
      title: "Venom",
      description:
        "When a journalist bonds with an alien symbiote, he becomes something far more dangerous.",
      img: moviecard5,
      details:
        "Eddie Brock’s life takes a dark turn when he merges with Venom...",
    },
    {
      id: 8,
      title: "Glass",
      description:
        "A fear crime family rises from the streets of Birmingham to control an empire.",
      img: moviecard6,
      details:
        "Set in post-World War I England, ‘Glass’ follows Thomas Shelby...",
    },
    {
      id: 9,
      title: "Get Out",
      description:
        "A fearless crime family rises from the streets of Birmingham to control an empire.",
      img: moviecard9,
      details:
        "Set in post-World War I England, ‘Get Out’ follows Thomas Shelby...",
    },{
      id: 10,
      title: "Peaky Blinders",
      description:
        "A fearless crime family rises from the streets of Birmingham to control an empire.",
      img: moviecard10,
      details:
        "Set in post-World War I England, ‘Peaky Blinders’ follows Thomas Shelby...",
    }
  ];


  // ================= TAMIL MOVIES =================
  const tamilMovies = [
    {
      id: 1,
      title: "Vikram",
      description:
        "A gripping survival story inspired by Kerala floods, showcasing unity and resilience.",
      img: moviestamil1,
      details:
        "‘2018’ is a stunning survival drama depicting the real-life Kerala floods...",
    },
    {
      id: 2,
      title: "Makan",
      description:
        "A true story of friendship and courage set in the mysterious caves of Kodaikanal.",
      img: moviestamil2,
      details:
        "‘Manjummel Boys’ captures the thrilling rescue mission of a group of friends...",
    },
    {
      id: 3,
      title: "Good Bad Ugly",
      description:
        "A light-hearted romantic comedy about modern relationships and unexpected love.",
      img: moviestamil3,
      details:
        "‘Premalu’ brings humor, love, and chaos together as two young souls meet in Hyderabad...",
    },
    {
      id: 4,
      title: "Dragon",
      description:
        "A high-octane action-comedy starring Fahadh Faasil in an unforgettable role.",
      img: moviestamil4,
      details:
        "‘Aavesham’ follows a quirky gangster whose wild personality changes the lives of college students...",
    },
    {
      id: 5,
      title: "Lucky Bhaskar",
      description:
        "A psychological thriller about revenge, secrets, and justice with a chilling twist.",
      img: moviestamil5,
      details:
        "‘Rorschach’ is a mind-bending thriller where a man’s hunt for vengeance uncovers buried truths...",
    },
    {
      id: 6,
      title: "Master",
      description:
        "An action-packed family drama about power, loyalty, and betrayal.",
      img: moviestamil6,
      details:
        "‘Bheeshma Parvam’ stars Mammootty as a powerful patriarch facing family conflicts...",
    },
    {
      id: 7,
      title: "Retro",
      description:
        "Based on the real-life fugitive Sukumara Kurup, India’s most wanted criminal.",
      img: moviestamil7,
      details:
        "‘Kurup’ follows the mysterious life of a man who fakes his death to escape justice...",
    },
    {
      id: 8,
      title: "Coolie",
      description:
        "A soulful story of brotherhood, love, and finding meaning in imperfection.",
      img: moviestamil8,
      details:
        "‘Kumbalangi Nights’ is a beautifully crafted tale of four brothers living in a broken home...",
    },
  ];


  // malayamovies

   const malayaMovies = [
    {
      id: 1,
      title: "Loka",
      description:
        "A gripping survival story inspired by Kerala floods, showcasing unity and resilience.",
      img: malayamovie1,
      details:
        "‘2018’ is a stunning survival drama depicting the real-life Kerala floods...",
    },
    {
      id: 2,
      title: "Aavesham",
      description:
        "A true story of friendship and courage set in the mysterious caves of Kodaikanal.",
      img: malayamovie2,
      details:
        "‘Manjummel Boys’ captures the thrilling rescue mission of a group of friends...",
    },
    {
      id: 3,
      title: "Falimy",
      description:
        "A light-hearted romantic comedy about modern relationships and unexpected love.",
      img: malayamovie3,
      details:
        "‘Premalu’ brings humor, love, and chaos together as two young souls meet in Hyderabad...",
    },
    {
      id: 4,
      title: "Fight Club",
      description:
        "A high-octane action-comedy starring Fahadh Faasil in an unforgettable role.",
      img: malayamovie4,
      details:
        "‘Aavesham’ follows a quirky gangster whose wild personality changes the lives of college students...",
    },
    {
      id: 5,
      title: "12 th pass",
      description:
        "A psychological thriller about revenge, secrets, and justice with a chilling twist.",
      img: malayamovie5,
      details:
        "‘Rorschach’ is a mind-bending thriller where a man’s hunt for vengeance uncovers buried truths...",
    },
    {
      id: 6,
      title: "Manjummel boys",
      description:
        "An action-packed family drama about power, loyalty, and betrayal.",
      img: malayamovie6,
      details:
        "‘Bheeshma Parvam’ stars Mammootty as a powerful patriarch facing family conflicts...",
    },
       {
      id: 7,
      title: "Premalu",
      description:
        "An action-packed family drama about power, loyalty, and betrayal.",
      img: malayamovie7,
      details:
        "‘Bheeshma Parvam’ stars Mammootty as a powerful patriarch facing family conflicts...",
    },
       {
      id: 8,
      title: "Bheeshma Parvam",
      description:
        "An action-packed family drama about power, loyalty, and betrayal.",
      img: malayamovie8,
      details:
        "‘Bheeshma Parvam’ stars Mammootty as a powerful patriarch facing family conflicts...",
    }

    
  ];


  // top webseries all time


 const webseries = [
    {
      id: 1,
      title: "Alice In BorderLand",
      description:
        "A gripping survival story inspired by Kerala floods, showcasing unity and resilience.",
      img: movieweb0,
      details:
        "‘2018’ is a stunning survival drama depicting the real-life Kerala floods...",
    },
    {
      id: 2,
      title: "You",
      description:
        "A true story of friendship and courage set in the mysterious caves of Kodaikanal.",
      img: movieweb1,
      details:
        "‘Manjummel Boys’ captures the thrilling rescue mission of a group of friends...",
    },
    {
      id: 3,
      title: "Will me to Derry",
      description:
        "A light-hearted romantic comedy about modern relationships and unexpected love.",
      img: movieweb2,
      details:
        "‘Premalu’ brings humor, love, and chaos together as two young souls meet in Hyderabad...",
    },
    {
      id: 4,
      title: "Evil",
      description:
        "A high-octane action-comedy starring Fahadh Faasil in an unforgettable role.",
      img: movieweb3,
      details:
        "‘Aavesham’ follows a quirky gangster whose wild personality changes the lives of college students...",
    },
    {
      id: 5,
      title: "Oddity",
      description:
        "A psychological thriller about revenge, secrets, and justice with a chilling twist.",
      img: movieweb4,
      details:
        "‘Rorschach’ is a mind-bending thriller where a man’s hunt for vengeance uncovers buried truths...",
    },
    {
      id: 6,
      title: "Breaking Bad",
      description:
        "An action-packed family drama about power, loyalty, and betrayal.",
      img: movieweb5,
      details:
        "‘Bheeshma Parvam’ stars Mammootty as a powerful patriarch facing family conflicts...",
    },
    {
      id: 7,
      title: "Family Man",
      description:
        "Based on the real-life fugitive Sukumara Kurup, India’s most wanted criminal.",
      img: movieweb6,
      details:
        "‘Kurup’ follows the mysterious life of a man who fakes his death to escape justice...",
    },
    {
      id: 8,
      title: "My Fault",
      description:
        "A soulful story of brotherhood, love, and finding meaning in imperfection.",
      img: movieweb7,
      details:
        "‘Kumbalangi Nights’ is a beautifully crafted tale of four brothers living in a broken home...",
    },
        {
      id: 8,
      title: "Ginny and Georgia",
      description:
        "A soulful story of brotherhood, love, and finding meaning in imperfection.",
      img: movieweb8,
      details:
        "‘Kumbalangi Nights’ is a beautifully crafted tale of four brothers living in a broken home...",
    },
        {
      id: 8,
      title: "The Goat Life",
      description:
        "A soulful story of brotherhood, love, and finding meaning in imperfection.",
      img: movieweb9,
      details:
        "‘Kumbalangi Nights’ is a beautifully crafted tale of four brothers living in a broken home...",
    },
        {
      id: 8,
      title: "The Davinci Code",
      description:
        "A soulful story of brotherhood, love, and finding meaning in imperfection.",
      img: movieweb10,
      details:
        "‘Kumbalangi Nights’ is a beautifully crafted tale of four brothers living in a broken home...",
    }
  ];




  // ================= STATES =================
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleWatchNow = (movie) => setSelectedMovie(movie);
  const handleCloseDetails = () => setSelectedMovie(null);
  const handlePlayMovie = () => setIsPlaying(true);
  const handleClosePlayer = () => setIsPlaying(false);

  // ================= ENGLISH MOVIES (GRID) =================
  const renderEnglishSection = (title, movies) => (
    <>
      <div className="text-center my-10">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-sm md:text-base">
          Discover the{" "}
          <mark className="bg-yellow-400 text-black px-1 rounded">
            most trending
          </mark>{" "}
          films everyone is watching right now.
        </p>
      </div>

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
              <h5 className="text-sm sm:text-base font-semibold">
                {movie.title}
              </h5>
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
    </>
  );

  // ================= TAMIL MOVIES (HORIZONTAL SCROLL) =================
  const renderTamilSection = (title, movies) => (
    <>
      <div className="flex justify-between items-center px-6 mt-10">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="text-sm text-gray-400">Swipe to explore →</p>
      </div>

      <div className="overflow-x-auto px-6 py-6">
        <div className="flex space-x-4 snap-x snap-mandatory overflow-y-hidden scrollbar-hide">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="min-w-[180px] sm:min-w-[220px] md:min-w-[250px] bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 snap-start"
            >
              <div className="w-full h-44 sm:h-52 overflow-hidden">
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-3 text-center">
                <h5 className="text-sm sm:text-base font-semibold">
                  {movie.title}
                </h5>
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
      </div>
    </>
  );

  return (
    <>
      {/* 🌀 Carousel Section */}
      <div className="w-full">
        <Carousel fade interval={4000} pause="hover">
          {[caroserimage1, caroserimage2, caroserimage3].map((img, i) => (
            <Carousel.Item key={i}>
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
                <img
                  src={img}
                  alt={`Slide ${i}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* English Movies Section */}
      {renderEnglishSection("Top Movies in English", englishMovies)}

      {/* Tamil Movies Section (Horizontal Scroll) */}
      {renderTamilSection("Top Tamil Movies", tamilMovies)}

            {/* malaya Movies Section (Horizontal Scroll) */}
                  {renderTamilSection("Top Malaya Movies",  malayaMovies)}

                  {/* top webseries for all time */}

            {/* malaya Movies Section (Horizontal Scroll) */}
                  {renderTamilSection("Top Webseries For All Time",  webseries)}


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
            <h3 className="text-2xl font-semibold mb-4">
              🎬 {selectedMovie?.title}
            </h3>
            <div className="w-full h-64 bg-black flex items-center justify-center rounded-lg border border-gray-700">
              <p className="text-red-500 text-lg font-semibold">
                🚧 Server Busy! Please try again later.
              </p>
            </div>
          </div>
        </div>
      )}
    
    </>
  );
}

export default TrendingMoviesCarousel;
