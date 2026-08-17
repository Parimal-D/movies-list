import React from "react";
const imgPath = process.env.REACT_APP_IMG_PATH;

const getRatingClass = (rating) => {
  if (rating >= 8) return "green";
  if (rating >= 5) return "orange";
  if (rating >= 1) return "red";
};
const MovieCard = ({ movieInfo }) => {
  // console.log(movieInfo);
  return (
    <>
      {movieInfo.map((movie) => {
        return (
          <div className="movie" key={movie.id}>
            <img
              src={`${imgPath}${movie.poster_path}`}
              alt={movie.original_title}
            />
            <div className="movie-info">
              <h3>{movie.original_title}</h3>
              <span className={getRatingClass(movie.vote_average)}>
                {movie.vote_average}
              </span>
            </div>
            <div className="overview">
              <h3>overview</h3>
              {movie.overview}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieCard;
