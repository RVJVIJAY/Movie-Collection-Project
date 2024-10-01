import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieList.css";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader";

const MovieList = () => {
  const navigate = useNavigate();
  const apikey = "a9118a3a";
  const [search, setSearch] = useState(""); 
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search) {
      Showdata();
    } else {
      setMovies([]); 
    }
  }, [search]); 

  const Showdata = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=${apikey}`
      );
      setMovies(response.data.Search || []);
    } catch (err) {
      console.error(err); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
      <div className="search-div">
        <div className="search container">
          <input
            type="text"
            placeholder="Enter the movie name"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            type="submit"
            className="btn-search"
            onClick={Showdata} 
          >
            Search
          </button>
        </div>
        
        {loading ? (
          <Loader />
        ) : (
          <div className="movie-list-card">
            {movies.length > 0 ? (
              movies.map((item, index) => {
                const { Title, Year, imdbID, Type, Poster } = item;
                return (
                  <div
                    key={imdbID} 
                    className="individual-card"
                    onClick={() => navigate(`/search/${imdbID}`)}
                  >
                    <img src={Poster} alt="Movie Poster" />
                    <div className="sameline-div">
                      <p>{Title}</p>
                      <p>{Year}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No movies found. Please try a different search.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
