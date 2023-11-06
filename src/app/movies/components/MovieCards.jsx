import React from 'react';
import '../styles/Card.css';
import Link from 'next/link';

export default function MovieCard({
  title,
  posterPath,
  vote,
  released,
  mov_id,
}) {
  function getClassByRate(vote) {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  }
  return (
    <div className="w-full h-full pb-16">
      <Link
        href={`/movies/${mov_id}`}
        className="flex bg-zinc-900 h-full flex-col justify-start text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl movie"
      >
        <img
          className="w-full  object-cover"
          src={posterPath}
          alt="Movie Poster"
        />

        <div className="flex align-center h-min text-base flex-col h-fit  p-2">
          <h2 className=" shrink font-bold  mb-2 ">{title}</h2>
          <span
            className="text-base"
            style={{ color: `${getClassByRate(vote)}` }}
          >
            {vote}
          </span>
          <h3 className="text-base">({released})</h3>
        </div>
      </Link>
    </div>
  );
}
