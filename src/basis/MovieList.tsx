import React from "react";
import "./MovieList.css";
import { Movie } from "../api/types";

interface Props {
  label: string;
  movies: Movie[];
  onMovieItemButtonClick: () => void;
}

export const MovieList = ({ label, movies, onMovieItemButtonClick }: Props) => {
  return (
    <>
      <h2>{label}</h2>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="movie-list__item"
            onClick={onMovieItemButtonClick}
          >
            <img src={movie.posterPath} alt={movie.title} />
          </li>
        ))}
      </ul>
    </>
  );
};
