import React from 'react';
import '../globals.css';
export default function IdCard({ movie }) {
  function getClassByRate(vote) {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  }
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className=" w-full min-h-screen flex justify-center items-center ">
      <div className="w-1/2 p-2 bg-zinc-900 rounded-xl">
        <img
          className=" w-full h-full object-cover rounded-xl"
          src={IMG_PATH + movie.poster_path}
          alt=""
        />
        <div className="p-2  text-center">
          <h2 className="font-bold  text-lg mb-2 ">{movie.original_title}</h2>
          <h2 className="mb-2">
            {/* {`Rating:${' '}`} */}
            <span style={{ color: `${getClassByRate(movie.vote_average)}` }}>
              {movie.vote_average}
            </span>
          </h2>
          <div className="text-sm text-white">{movie.overview}</div>
        </div>
      </div>
    </div>
  );
}
