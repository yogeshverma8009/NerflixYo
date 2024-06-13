import React from 'react'
import MovieCart from './MovieCart';
// use destructure
const MovieList = ({title, movies,searchMovie=false}) => {
    // console.log(movies);
    //use also props
    // const MovieList = (props) => {
    //     const title = props.title;
    //     const movies = props.movies;
  return (
    <div className='px-8'>
      <h1 className='text-3xl py-3 text-white'>{title}</h1>
      {/* <h1 className={`${searchMovie?"text-black":"text-white"}text-3xl py-3`}>{title}</h1> */}
      <div className='flex overflow-x-auto no-scrollbar cursor-pointer' >
        <div className='flex items-center'>
            {/* {

                movies.map((movie) => {
                    return(
                        <MovieCart key={movie.id} posterPath={movie.poster_path}/>
                    )
                })
                
            }  */}
            {movies?.map((movie)=>
            <MovieCart key={movie.id} posterPath={movie.poster_path}/>
            )}

        </div>
      </div>
    </div>
  )
}

export default MovieList
