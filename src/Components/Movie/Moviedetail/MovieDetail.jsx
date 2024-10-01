import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './MovieDetail.css'
import Loader from '../../Loader';


const MovieDetail = () => {
        const {id}=useParams();
        const apikey=`a9118a3a`;
        const [singledata,setsingledata]=useState({})
        const [loading,setloading]=useState(false)
    const getsingledata=async()=>{
        setloading(true)
        try{
            const data=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${apikey}`)
            setsingledata(data.data)
            console.log(JSON.stringify(singledata))
            setloading(false)
        }catch(err){
            console.log(err)
            setloading(false)
        }
    }

    useEffect(()=>{
        getsingledata();
    },[id])
    const {Poster,Title,Year,Released,Runtime,Director,Language,Awards,imdbVotes,imdbRating}=singledata;
  return (
    <div>
        {loading ?<Loader /> :
        
        <div className='container'>
       <div className='img-container'>
        <img src={Poster} alt='img'></img>
       </div>
       <div className='right-container'>
        <h1>{Title}</h1>
        <p>Year    : {Year}</p>
        <p>Relesed : {Released}</p>
        <p>RunTime : {Runtime}</p>
        <p>Director: {Director}</p>
        <p>Language: {Language}</p>
        <p>imdbRating:{imdbRating}</p>
        <p>imdbVotes :{imdbVotes}</p>
        <p>Awards    :{Awards}</p>
       </div>
    </div>
        }
    </div>
    
  )
}

export default MovieDetail;