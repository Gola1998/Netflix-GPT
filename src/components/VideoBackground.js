import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);   // this is custom hook
  return (
    <div className="w-screen">
      {trailerVideo ? (
        <iframe
          className="w-screen aspect-video"
          src={"https://www.youtube.com/embed/" + trailerVideo.key + "?&autoplay=1&mute=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
