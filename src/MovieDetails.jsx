import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom';


function MovieDetails() {
    const {id} = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=f66418c0865c5fe805b1206fdcf09930&language=en-US`
  const [details, setDetails]=useState([])

  useEffect(()=>{
    axios.get(url)
    .then(res=>setDetails(res.data))
    
  }, [url])
  console.log(typeof details);
  console.log(details)
  

  return (
    <div className='movieDetails'>
     <Link to='/'>
     <p style={{
        color:'white',
      }}>HOME</p>
     </Link>
        <div className="detail">
          <div className="movieImg">
          <img src={"https://image.tmdb.org/t/p/original/"+details.poster_path} alt="" 
          style={{
            width:'200px',
            height:'300px'
          }}
          />
          <p>{details.title}</p>
          </div>
          <div className="detailsContainer">
          <p>{details.overview}</p>
          

          </div>

        </div>

        
        
        
        </div>

  )
}

export default MovieDetails