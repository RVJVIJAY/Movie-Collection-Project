import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieList.css";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader";

const MovieList = () => {
  const navigate = useNavigate();
  const apikey = `a9118a3a`;
  const [search, setseach] = useState("");
  const [movie, setmovie] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    Showdata();
  }, [search]);

  const Showdata = async () => {
    setloading(true);
    try {
      const data = await axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=${apikey}`
      );
      setmovie(data.data.Search || []);
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
    console.log(search);
    console.log(movie || "empty");
  };

  return (
    <div>
      <div className="seachdiv">
        <div className="seach container">
          <input
            type="text"
            placeholder="enter the movie name "
            onChange={(e) => setseach(e.target.value)}
            value={search}
          />
          <button
            type="submit"
            className="btn-search"
            onClick={() => Showdata()}
          >
            {" "}
            Search
          </button>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="movie-list-card">
            {movie?.map((item, index) => {
              const { Title, Year, imdbID, Type, Poster } = item;
              return (
                <div
                  className="individual-card"
                  onClick={() => navigate(`/search/${imdbID}`)}
                >
                  <img src={Poster} alt="img"></img>
                  <div className="sameline-div">
                    <p>{Title}</p>
                    <p>{Year}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
