import React from "react";
import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";

const VideoBackground = ({movieId,bool}) => {
  const trailerMovie = useSelector(store=>store.movie.trailerMovie);
  useMovieById(movieId);

  if(!trailerMovie){
    return null;
  }
  return (
    <div className="w-screen">
      <iframe
      className={`$bool ? "w-[100%]":"w-screen aspect-video" `}
        src={`https://www.youtube.com/embed/${trailerMovie.key}?si=2xEnoe7Bza8TaKuB&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFulScreen>
        </iframe>
    </div>
  );
};

export default VideoBackground;
