import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieList from "../Componets/MovieList"; // ✅ Fix path spelling

function Movies() {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenres.then((resp) => {
      setGenreList(resp.data.genres);
    });
  };

  return (
    <div className="px-8 md:px-16">
      {genreList.map((genre, index) => (
        <div key={genre.id} className="mb-10">
          <h2 className="text-white text-[20px] font-bold mb-4">{genre.name}</h2>
          <MovieList genreId={genre.id} index_={index} />
        </div>
      ))}
    </div>
  );
}

export default Movies;
