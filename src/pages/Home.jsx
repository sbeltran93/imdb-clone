import { useState } from "react";
// import axios from 'axios'
import MovieCard from '../components/MovieCard';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);

    const apiKey = 'ae733631';

    const searchMovies = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
            const data = await response.json();
            setMovies([data])
          } catch (error) {
            console.error(error)
          }
        }

      return (
        <div className="home-container">
          <form onSubmit={searchMovies}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search movies..."
            />
            <button type="submit">Search</button>
          </form>
    
          <div className="movie-list">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      );
    };  
    
    export default Home;
