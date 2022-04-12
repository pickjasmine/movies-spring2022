import './App.css';
import {movies} from './movies';

const App = () => {
    return (
        <div>
            {/* Error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</> */}
            {
                movies.map((movie) =>
                    <>
                        <p>{movie.title}</p>
                        <img src={movie.posterUrl}/>
                    </>
                )
            }
        </div>
    );
}

export default App;
