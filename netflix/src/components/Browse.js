import React, { useEffect } from 'react'
import Header from './Header'
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MovieContainer from './MovieContainer'
import MainContainer from './MainContainer';
// import axios from 'axios'
// import { Now_Playing_Movie , options} from '../utils/constant'
// import { getNowPlayingMovies } from '../redux/movieSlice'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'
import SearchMovie from './SearchMovie'

const Browse = () => {
  const user = useSelector(store=>store.app.user);
  const toggle = useSelector(store=> store.movie.toggle);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
//mycustom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  
  useEffect(()=>{
    if(!user){
      navigate("/")
    }
  });
  


  return (
    <div>
      <Header/>
      <div>
        {
          toggle ? <SearchMovie/> :(
            <>
             <MainContainer/>
             <MovieContainer/>
            </>
          )
        }
       
      </div>
    </div>
  )
}

export default Browse
