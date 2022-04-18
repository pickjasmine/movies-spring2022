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
    // this line is the same as the next two - this is array destructuring
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


            {/* ternary operators are fancy but simplified if/else statements */}
            {/* check if currentMovie exists */}
            {/* if it does, show the <div> block */}
            {/* if it does not, show the <p> No movie selected </p> block */}
            {
                currentMovie ?
                    <div>
                        <p>{currentMovie.title}</p>
                        <p>{currentMovie.description}</p>
                        <p>{currentMovie.rating}</p>
                        <p>{currentMovie.director}</p>
                        <p>{currentMovie.releaseYear}</p>
                    </div>
                    :
                    <p>No movie selected</p>
            }
        </div>
    );
}

export default App;
