import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



import {useSelector} from 'react-redux';




function Movies({search}) {
    const url = useSelector((state)=> state.movieList.movieList)
    console.log(url)

    const [arr, setArr] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((res) => setArr(res.data.results))
    }, [url])

        console.log(arr)


    return (
        <div className='Movies'>
        { arr.filter((val)=>{
            if(search === ''){
                return val
            }

            else if(val.title.toLowerCase().includes(search.toLowerCase())){
                return val
            }
        }
        ).map((movie)=>(
            <div className="movie" key={movie.id}>
                <Link to={`/movie/${movie.id}`}
                style={{
                    textDecoration:'none'
                }}

                onClick={()=>{}}
                >
                <img src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} alt=""
                style={{
                    width:'150px',
                    height:'250px'
                }}
                />
                <p>
                    
                </p>
                <p className='movieTitle'>{movie.title}</p>

                

                </Link>
            </div>

            ))}


        </div>
    )
}

export default Movies