import HeroImg from './components/HeroImg';
import './globals.css';
import Grids from './components/Grid';
import '.env';
import dynamic from 'next/dynamic';
import AllShowings from './components/ShowAllMovieCards';
import MovieData from './components/DataMovie';

async function getData(id) {
  const res = await fetch(`${MOVIES_API + id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const NoSSR = dynamic(() => import('./components/DataMovie'), { ssr: false });

export default async function Home() {
  const popularMovies = await getData(1);
  const restOfMovies = await getData(2);
  console.log(popularMovies.results);

  return (
    <div className="h-full">
      <HeroImg />
      {/* <NoSSR /> */}
      <MovieData movies={popularMovies} />
      <AllShowings movies={restOfMovies} />
    </div>
  );
}
