import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/movieSlice';
import { getId } from '../redux/movieSlice';

const MovieCart = ({posterPath,movieId}) => {
  const dispatch = useDispatch();

  if(posterPath === null) return null;

  const handleOpen =()=>{
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  }
  return (
    <div className='w-48 pr-2 ' onClick={handleOpen}>
      <img src={`${TMDB_IMG_URL}/${posterPath}`} alt='movie-banner'/>
    </div>
  )
}

export default MovieCart
