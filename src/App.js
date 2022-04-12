import './App.css';
import {movies} from './movies';

const App = () => {
    return (
        <div>
            {/* This map shows a callback using an arrow function */}
            {
                movies.map((movie) =>
                    <>
                        <p>{movie.title}</p>
                        <img src={movie.posterUrl}/>
                    </>
                )
            }

            {/*
             This map shows a callback using an anonymous "old way" of declaring a function
             Remember the return statement and the parentheses wrapped around your returned HTML
            */}
            {
                movies.map(function (movie) {
                    return (
                        <>
                            <p>{movie.title}</p>
                            <img src={movie.posterUrl}/>
                        </>
                    )
                })
            }
        </div>
    );
}

export default App;
