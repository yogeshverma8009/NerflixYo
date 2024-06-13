import axios from "axios";
import React, { useState } from "react";
import { SEARCH_MOVIE_URL, options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetails } from "../redux/searchSlice.js";
import { setLoading } from "../redux/userSlice.js";
import MovieList from './MovieList'

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);
  const {movieName, searchedMovie} = useSelector(store => store.searchMovie);
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      console.log(res.data.results);
      const movies = res?.data?.results;
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  };

  return (
    <>
      <div className="flex  justify-center pt-[10%] w-[100%]">
        <form onSubmit={submitHandler} className="w-[50%]">
          <div className="flex justify-center shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]">
            <input
              value={searchMovie}
              onChange={(e) => {
                setSearchMovie(e.target.value);
              }}
              className="w-full outline-none rounded-md text-lg"
              type="text"
              placeholder="Search Movie"
            />
            <button className="bg-red-800 text-white rounded-md px-4 py-2">
              {" "}
              {isLoading ? "loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>
      <MovieList title={movieName} searchMovie={true} movies={searchedMovie}/>
    </>
  );
};

export default SearchMovie;
