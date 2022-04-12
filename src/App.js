import './App.css';
import {movies} from './movies';
import MoviePreview from "./MoviePreview";
import {useState} from "react";

const App = () => {
    // you can do JavaScript here
    /*
    function useState(startingState) {
        // some logic goes here

        return [variable, setVariableFunction];
    }
     */
    const [currentMovie, setCurrentMovie] = useState(null);
    // this line is the same as the next two
    // const currentMovie = useState(null)[0];
    // const setCurrentMovie = useState(null)[1];

    console.log(currentMovie);

    return (
        <div className="movie-container">
            {
                movies.map((movie) =>
                    <>
                        <MoviePreview
                            movieToPreview={movie}
                            setCurrentMovie={setCurrentMovie}
                            whatever="You want"
                        />
                    </>
                )
            }
        </div>
    );
}

export default App;
