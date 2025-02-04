import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
           <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-info">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>  
              <p>Plot: {movie.Plot}</p>
              <p>Actors: {movie.Actors}</p>
              <p>Genre: {movie.Genre}</p>
            </div>
            </Link> 
        </div>
    );
};

export default MovieCard;