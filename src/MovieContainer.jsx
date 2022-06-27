import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { MdOutlineUpcoming } from 'react-icons/md';

import { BsSuitHeart } from 'react-icons/bs';
import Movies from './Movies';
import {movieList} from './Redux/Slices/movieSlice';
import {useDispatch} from 'react-redux';
import {useContext } from 'react';
import {urlContext} from './Components/urlContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MovieDetails from './MovieDetails';




function MovieContainer() {
  var style;

  const dispatch = useDispatch();

  const {discoverUrl, upcomingUrl, favouritesUrl, newReleasesUrl, header, setHeader} = useContext(urlContext);

  const [render, setRender] = useState(true);
  const [search, setSearch] = useState('');


  const visbility = () => {
    {
      render?
       style={
          display:'none'
        }: style={
          display:'block'
        }
        console.log(style)
    }
  }



  return (
    <Router>
    <div className='MovieContainer'>
      <div className="header">
        <div className="navigation">
          <p> MEDIA HD</p>
          <button
            onClick={() => setRender(!render) && visbility()}

          > {render && <HiOutlineMenu />} {!render && <AiOutlineClose />}</button>
        </div>
        <div className="search">
          <AiOutlineSearch className='searchIcon' />
          <input type="text"
            className='text'
            placeholder='Search'
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="left">
            <FiSettings className='settings' />
            <CgProfile className='profile' />
          </div>
        </div>
      </div>
      <div className="content" style={style}>
        <div className="navigation">
          <div className="navList">
            <p onClick={()=> dispatch(movieList(discoverUrl)) && setHeader('Discover')}><FaHome /> Discover</p>
            <p onClick={()=> dispatch(movieList(newReleasesUrl)) && setHeader('New Releases')}><FaWallet /> New Releases</p>
            <p onClick={()=> dispatch(movieList(upcomingUrl)) && setHeader('Upcoming')}><MdOutlineUpcoming /> Upcoming</p>
            <p onClick={()=> dispatch(movieList(favouritesUrl)) && setHeader('Favorites')}><BsSuitHeart /> Favourites</p>
          </div>
          <div className="genre">
          <p className='genreHeader'>Genres</p>
          <div className="genreList">
            <p>action</p>
            <p>Documentary</p>
            <p>Comedy</p>
            <p>Horror</p>

          </div>

          </div>
        </div>
        <div className="movies">
          <p className='movieHeader'>{header}</p>
          <Routes>
            <Route path="/" element={<Movies search={search} />} />
            <Route path="/movie/:id" element={<MovieDetails />} />

          </Routes>
        </div>
      </div>

    </div>
    </Router>
  )
}

export default MovieContainer