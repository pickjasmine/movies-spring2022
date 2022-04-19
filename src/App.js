import './App.css';
import {movies} from './movies';
import MoviePreview from "./MoviePreview";
import {useState} from "react";
import MovieDetails from "./MovieDetails";

const App = () => {
    const [currentMovie, setCurrentMovie] = useState(null);

    const clearCurrentMovie = () => {
        setCurrentMovie(null);
    }

    // old way of declaring a function
    // function clearCurrentMovie() {
    //     setCurrentMovie(null);
    // }

    return (
        <div className="movie-container">
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

            {/* clearCurrentMovie does not have () afterwards so
            that it only gets called when the button is clicked */}
            <button onClick={clearCurrentMovie}>Clear</button>

            <MovieDetails
                currentMovie={currentMovie}
            >
            </MovieDetails>
        </div>
    );
}

export default App;
