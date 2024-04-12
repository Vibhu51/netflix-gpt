import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utilities/movieSlice";
import { apiOptions } from "../constants";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    useEffect(() => {
        getMovieVideos();
    // eslint-disable-next-line
    }, []);

    async function getMovieVideos() {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, apiOptions);
        const json = await res.json();
        const videoList = json.results.filter(({type}) => type === "Trailer");
        const video = videoList.length ? videoList[0] : json.results[0]
        dispatch(addTrailerVideo(video));
    }
}

export default useTrailerVideo;