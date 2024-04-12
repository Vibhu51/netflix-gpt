import { useEffect } from "react";
import { apiOptions } from "../constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utilities/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getNowPlayingMovies();
        // eslint-disable-next-line
    }, []);

    async function getNowPlayingMovies () {
        try {
            const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", apiOptions)
            const json = await res.json();
            dispatch(addNowPlayingMovies(json.results))
        } catch(e) {
            console.log(e);
        }
    }
}

export default useNowPlayingMovies;