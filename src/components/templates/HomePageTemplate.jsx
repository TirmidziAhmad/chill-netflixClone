import CardMovieLabeled from "../components/molecules/CardMovieLabeled";

function HomeTemplate({ movies }) {
  return (
    <div>
      <h1>Home</h1>
      <div className="grid grid-cols-3 gap-4">
        {movies.map((movie) => (
          <CardMovieLabeled key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
