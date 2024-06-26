import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryContainer";

const Browse = () => {
    useNowPlayingMovies();
    return <div>
        <Header />
        <MainContainer />
        <SecondaryConatiner />
    </div>
}

export default Browse;