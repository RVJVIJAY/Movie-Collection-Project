import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';
import Loader from '../../Loader';

const MovieDetail = () => {
    const { id } = useParams();
    const apikey = 'a9118a3a';
    const [singledata, setsingledata] = useState({});
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null); 

    const getsingledata = async () => {
        setloading(true);
        setError(null); 
        try {
            const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${apikey}`);
            setsingledata(response.data);
            console.log(JSON.stringify(response.data)); 
        } catch (err) {
            console.error(err);
            setError('Failed to fetch movie details.'); 
        } finally {
            setloading(false); 
        }
    };

    useEffect(() => {
        getsingledata();
    }, [id]); 

    const { Poster, Title, Year, Released, Runtime, Director, Language, Awards, imdbVotes, imdbRating } = singledata;

    return (
        <div>
            {loading ? <Loader /> : error ? ( 
                <div className='error'>{error}</div>
            ) : (
                <div className='container'>
                    <div className='img-container'>
                        <img src={Poster} alt='Movie Poster' />
                    </div>
                    <div className='right-container'>
                        <h1>{Title}</h1>
                        <p>Year: {Year}</p>
                        <p>Released: {Released}</p>
                        <p>Runtime: {Runtime}</p>
                        <p>Director: {Director}</p>
                        <p>Language: {Language}</p>
                        <p>IMDb Rating: {imdbRating}</p>
                        <p>IMDb Votes: {imdbVotes}</p>
                        <p>Awards: {Awards}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieDetail;
