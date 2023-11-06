import MovieCard from './MovieCards';

export default async function AllShowings({ movies }) {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
  return (
    <div>
      <h2 className="text-center">All Showings</h2>
      <div className="grid grid-cols-5 m-5 px-10 gap-1 ">
        {movies.results.map((m) => {
          return (
            <div>
              <MovieCard
                mov_id={m.id}
                key={m.id}
                title={m.original_title}
                posterPath={IMG_PATH + m.poster_path}
                vote={m.vote_average}
                released={m.release_date}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
