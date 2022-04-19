import './App.css';
import {movies} from './movies';
import MoviePreview from "./MoviePreview";
import {useState} from "react";
import MovieDetails from "./MovieDetails";

const App = () => {
    // you can do JavaScript here

    /*
    function useState(startingState) {
        // some logic goes here

        return [variable, setVariableFunction];
    }
     */
    const [currentMovie, setCurrentMovie] = useState(null);
    // this line is the same as the next two - this is array destructuring
    // const currentMovie = useState(null)[0];
    // const setCurrentMovie = useState(null)[1];

    console.log(currentMovie);

    return (
        <div className="movie-container">
            {/* key is needed in maps for React to correctly handle component states and rerendering! */}
            {
                movies.map((movie) =>
                    <MoviePreview
                        key={movie.title}
                        movieToPreview={movie}
                        setCurrentMovie={setCurrentMovie}
                        whatever="You want"
                    />
                )
            }

            {/* <MovieDetails/> is also fine to use here */}
            <MovieDetails
                currentMovie={currentMovie}
            >
            </MovieDetails>
        </div>
    );
}

export default App;
