import MovieCard from '../components/MovieCards';
import IdCard from '../components/IdCard';

async function getData(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=991f2fdf22cf8b7fd859da282cc8e1d8&language=en-US`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function MoviePage({ params }) {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
  const movie = await getData(params.id);
  return (
    <div>
      <IdCard movie={movie} />
    </div>
  );
}
