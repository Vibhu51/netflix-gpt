import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;
    return <div>
        <VideoTitle title={movies[0].title} overview={movies[0].overview} />
        <VideoBackground movieId={movies[0].id} />
    </div>;
};

export default MainContainer;