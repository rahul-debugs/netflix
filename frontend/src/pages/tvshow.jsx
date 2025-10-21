import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

// 🖼 Carousel Images
import caroserimage1 from "../assets/tvshows/caro1.jpg";
import caroserimage2 from "../assets/tvshows/caro2.jpg";
import caroserimage3 from "../assets/tvshows/caro3.jpg";
import caroserimage4 from "../assets/tvshows/caro4.jpg";
import caroserimage5 from "../assets/tvshows/caro5.jpg";
// the card additional images added

import caroserimage6 from "../assets/tvshows/movecard1.jpg";
import caroserimage7 from "../assets/tvshows/movecard2.jpg";
import caroserimage8 from "../assets/tvshows/movecard3.jpg";
import caroserimage9 from "../assets/tvshows/moviecard4.jpg";
import caroserimage10 from "../assets/tvshows/moviecard5.jpg";
import caroserimage11 from "../assets/tvshows/moviecard6.jpg";
import caroserimage12 from "../assets/tvshows/moviecard7.jpg";
import caroserimage13 from "../assets/tvshows/moviecard8.jpg";
import caroserimage14 from "../assets/tvshows/moviecard9.jpg";
import caroserimage15 from "../assets/tvshows/moviecard10.jpg";
// animes

import caroserimage16 from "../assets/tvshows/anime1.jpg";
import caroserimage17 from "../assets/tvshows/anime2.jpg";
import caroserimage18 from "../assets/tvshows/anime3.jpg";
import caroserimage19 from "../assets/tvshows/anime4.jpg";
import caroserimage20 from "../assets/tvshows/anime5.jpg";
import caroserimage21 from "../assets/tvshows/anime6.jpg";
import caroserimage22 from "../assets/tvshows/anime7.jpg";
import caroserimage23 from "../assets/tvshows/anime8.jpg";



// 🎞️ Movie Card Component
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

function Tvshow() {
  // 🎞️ Carousel Slides
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

  // 🎥 Movie Cards Data & Logic
  const movies = [
    {
      title: "Dream",
      description:
        "A thrilling adventure of a young hero chasing his dreams against all odds.",
      image: caroserimage1,
    },
    {
      title: "Money Heist",
      description: "A brilliant plan. A fearless crew. One impossible mission.",
      image: caroserimage2,
    },
    {
      title: "Squid Game",
      description: "Win or die — the game has no mercy.",
      image: caroserimage3,
    },
    {
      title: "Upload",
      description:
        "A digital afterlife where love, death, and technology collide.",
      image: caroserimage4,
    },
    {
      title: "Monster",
      description: "The terrifying true story that inspired generations of horror.",
      image: caroserimage5,
    },
    {
  title: "Every Thing Every Where All At Once",
  description:
    "An epic multiverse adventure where a seemingly ordinary woman discovers her extraordinary powers and fights to save reality itself.",
  image: caroserimage6,
},
{
  title: "Ocean Eight",
  description:
    "A glamorous heist unfolds as a team of skilled women plan an audacious theft at New York’s biggest fashion event.",
  image: caroserimage7,
},
{
  title: "The Menu",
  description:
    "A darkly comedic thriller where a couple visits an exclusive restaurant, only to find the chef’s intentions are far more sinister than a simple meal.",
  image: caroserimage8,
},
{
  title: "Wednesday",
  description:
    "Follow Wednesday Addams as she navigates life at Nevermore Academy, solving mysteries with her signature dark wit and sharp intellect.",
  image: caroserimage9,
},
{
  title: "Suits La",
  description:
    "In the high-stakes world of law and corporate drama, a brilliant lawyer must outsmart rivals while juggling personal ambitions and moral dilemmas.",
  image: caroserimage10,
},
{
  title: "Harry Potter",
  description:
    "Join Harry Potter as he discovers his magical heritage, battles dark forces, and uncovers the mysteries of Hogwarts School of Witchcraft and Wizardry.",
  image: caroserimage11,
},
{
  title: "The Wolverine",
  description:
    "Follow Wolverine on a gripping journey of revenge, redemption, and self-discovery, as he battles enemies with his unmatched healing powers and adamantium claws.",
  image: caroserimage12,
},
{
  title: "Avengers: Age Of Ultron",
  description:
    "Earth’s mightiest heroes unite to stop the rogue AI, Ultron, from unleashing global destruction, testing their teamwork and resilience to the limit.",
  image: caroserimage13,
},
{
  title: "Moon Knight",
  description:
    "Dive into the mysterious world of Moon Knight, a vigilante with multiple identities, as he fights crime and confronts his inner demons in a dark and thrilling adventure.",
  image: caroserimage15,
},
{
  title: "Loki",
  description:
    "Follow the mischievous god Loki as he navigates time-traveling chaos, faces alternate realities, and plots his way through unpredictable adventures across the multiverse.",
  image: caroserimage14,
},

  ];

// the anime can be created


const amovies = [
  {
    title: "Naruto",
    description:
      "Follow Naruto Uzumaki and the legendary Nine-Tails, Kurama, as they battle enemies and chase the dream of becoming Hokage.",
    image: caroserimage16,
  },
  {
    title: "Jujutsu Kaisen: Sukuna's Wrath",
    description:
      "Ryomen Sukuna, the King of Curses, awakens within Yuji Itadori, unleashing chaos in the world of sorcerers.",
    image: caroserimage19,
  },
  {
    title: "Jujutsu Kaisen",
    description:
      "Yuji Itadori joins Tokyo Jujutsu High to fight curses alongside Megumi and Nobara, uncovering dark secrets and deadly powers.",
    image: caroserimage18,
  },
  {
    title: "Demon Slayer",
    description:
      "Tanjiro Kamado and his sister Nezuko battle demons in a breathtaking journey of vengeance, hope, and sibling love.",
    image: caroserimage20,
  },
  {
    title: "Tokyo Revengers",
    description:
      "Takemichi travels back in time to save his friends and rewrite the violent history of Tokyo's toughest gangs.",
    image: caroserimage21,
  },
  {
    title: "Dragon Ball x My Hero Academia",
    description:
      "Goku unleashes Ultra Instinct while Bakugo explodes into action—two worlds collide in a high-octane crossover of power and pride.",
    image: caroserimage22,
  },
  {
    title: "One Piece",
    description:
      "Monkey D. Luffy sets sail with his crew to find the legendary One Piece and become the Pirate King, defying fate and foes.",
    image: caroserimage23,
  },
];

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showServerBusy, setShowServerBusy] = useState(false);

  const handleWatchNow = (movie) => setSelectedMovie(movie);
  const handlePlay = () => setShowServerBusy(true);
  const handleClose = () => {
    setShowServerBusy(false);
    setSelectedMovie(null);
  };

  // 🟥 Server Busy Screen
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

  // 🟨 Selected Movie Page
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

  // 🟩 Main TV Show Page
  return (
    <>
      {/* 🎠 Carousel Section */}
      <div className="w-full">
        <Carousel fade interval={5000} pause="hover">
          {slides.map((slide, i) => (
            <Carousel.Item key={i}>
              <div className="relative w-full h-screen overflow-hidden">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover transform transition-transform duration-[4000ms] ease-in-out hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

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

      {/* 🏷 Heading Section */}
      <div className="text-center py-12 px-4 md:px-8">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Get Back to Growth with{" "}
          <span className="text-blue-600 dark:text-blue-500">
            the World’s #1 Streaming Experience
          </span>
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Here at{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            NetStream
          </span>
          , we focus on delivering entertainment where technology, innovation,
          and creativity unlock new stories, experiences, and growth for our
          viewers worldwide.
        </p>
      </div>

      {/* 🎬 Movie Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100 dark:bg-gray-900">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} onWatchNow={handleWatchNow} />
        ))}
      </div>


      {/* the Anime section headings */}
<section className="my-12 text-center">
  <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
    <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-400 lightning-effect">
      Top Picks
    </span>{" "}
    Most Favorite Animes
  </h1>
  <p className="mx-auto text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 max-w-3xl">
    Explore thrilling adventures, epic battles, and unforgettable characters in these must-watch anime favorites.
  </p>
</section>

{/* the animie section */}


  <div className="w-full">
        <Carousel fade interval={4000} pause="hover">
          {[caroserimage16, caroserimage17, caroserimage18].map((img, i) => (
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

<div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100 dark:bg-gray-900">
        {amovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} onWatchNow={handleWatchNow} />
        ))}
      </div>

    </>
  );
}

export default Tvshow;
