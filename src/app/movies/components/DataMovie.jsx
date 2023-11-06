'use client';
import '../styles/Card.css';
import MovieCard from './MovieCards';
import Carousel from 'react-material-ui-carousel';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

export default function MovieData(props) {
  // carousel function
  const caru = (num1, num2) => {
    return (
      <div className="px-20 grid grid-cols-5 gap-4 ">
        {props.movies.results.slice(num1, num2).map((movie) => (
          <div className="w-full">
            <MovieCard
              mov_id={movie.id}
              key={movie.id} // Don't forget to add a unique key
              title={movie.title}
              posterPath={IMG_PATH + movie.poster_path}
              vote={movie.vote_average}
              released={movie.release_date}
              className={getClassByRate(movie.vote_average)}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="my-8 w-full">
      <h1 className="text-center">Our Hottest Picks</h1>
      <Carousel>
        {caru(0, 5)}
        {caru(5, 10)}
        {caru(10, 15)}
      </Carousel>
    </div>
  );
}
