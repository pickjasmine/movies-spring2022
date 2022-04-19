import './App.css';
import {useState} from "react";

const MoviePreview = (props) => {
    const {movieToPreview, setCurrentMovie} = props;
    const [clickCount, setClickCount] = useState(0);

    const updateMovieSelection = () => {
        setCurrentMovie(movieToPreview);
        setClickCount(clickCount + 1);
    };

    return (
        <div>
            <p>{movieToPreview.title}</p>
            {/* String templating is denoted by the backtick (`) */}
            {/* You can mix any sort of text and javascript variables with string templating */}
            {/* When you want to reference a variable, use the variable name inside ${variableNameHere} */}
            <p>{`Clicked ${clickCount} number of times`}</p>
            <img
                src={movieToPreview.posterUrl}
                alt={movieToPreview.title}
                onClick={updateMovieSelection}
            />
                {/*
                    this is how you can do what is happening in this function
                    but in-line with your HTML/react components

                    onClick={() => {
                        setCurrentMovie(movieToPreview);
                        setClickCount(clickCount + 1);
                    }}
                */}
        </div>
    )
}

export default MoviePreview;