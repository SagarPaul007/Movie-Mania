import Image from "next/image";
import Link from "next/link";

export default function Movie({
  title,
  id,
  poster_path,
  overview,
  release_date,
}) {
  const modifiedTitle =
    title.length > 28 ? title.slice(0, 28).concat("...") : title;
  return (
    <Link className="m-3" href={`/${id}`}>
      <Image
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
        width={250}
        height={250}
      />
      <h2>{modifiedTitle}</h2>
      <h3>{release_date}</h3>
    </Link>
  );
}
