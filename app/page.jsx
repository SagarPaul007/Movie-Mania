import Movie from "./components/Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`
  ).then((res) => res.json());
  return (
    <main>
      <section>
        <div className="flex justify-center">
          <button className="rounded px-3 py-1 mx-10 my-3 bg-green-400">
            Trending Today
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          {data?.results?.map((movie) => (
            <Movie {...movie} key={movie.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
