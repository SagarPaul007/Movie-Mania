import Image from "next/image";

export default async function ({ params }) {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.API_KEY}&language=en-US`
  ).then((res) => res.json());

  return (
    <section className="mx-16 py-10 flex flex-col items-center">
      <Image
        src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
        alt={data?.title}
        width={1000}
        height={1000}
        priority
      />
      <div style={{ maxWidth: 1000 }}>
        <div className="flex justify-between mt-1">
          <h2 className="text-lg font-bold">{data?.title || ""}</h2>
          <span>
            {`${parseFloat(data?.vote_average?.toFixed(1))}/10 (${
              data?.vote_count || 0
            })`}
          </span>
        </div>
        <h3 className=" text-slate-600 my-2">{data?.release_date || ""}</h3>
        <p className="mb-2">{data?.overview || ""}</p>
        <span className=" bg-green-400 rounded px-3 py-1">
          {data?.status || ""}
        </span>
      </div>
    </section>
  );
}
