import React from "react";

function Watchlist() {
  return (
    <>
      <br /> <br />

      <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center max-w-2xl">

          {/* Blue Glow Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-blue-100 border border-blue-300/60 flex items-center justify-center shadow-lg shadow-blue-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.07 1.907 2.174v15.008a.75.75 0 01-1.153.638L12 17.25l-6.347 3.892A.75.75 0 014.5 20.504V5.496c0-1.104.806-2.046 1.907-2.174a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
            Your Watchlist is Empty
          </h1>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-md mx-auto">
            Add your favorite movies and shows. Come back anytime!
          </p>

          {/* PREMIUM SMALL CTA BUTTON */}
          <div className="flex justify-center mb-20">
            <a
              href="/movies"
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 px-8 py-3 rounded-full font-semibold text-base shadow-md hover:scale-[1.03] active:scale-95"
            >
              Browse Movies
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Quick Navigation */}
          <div className="border-t border-gray-300 pt-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">
              Quick Navigation
            </p>

            {/* Single Row Navigation */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Home", href: "/" },
                { name: "TV Shows", href: "/tvshow" },
                { name: "Movies", href: "/movies" },
                { name: "Live", href: "/live" },
                { name: "Subscription", href: "/subscription" },
                { name: "Watchlist", href: "/watchlist" },
                { name: "About", href: "/about" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="bg-white border border-gray-300 px-5 py-3 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span className="text-sm font-semibold text-gray-700 hover:text-blue-700">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Watchlist;
