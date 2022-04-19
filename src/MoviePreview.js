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
            <p>{clickCount}</p>
            <img
                src={movieToPreview.posterUrl}
                alt={movieToPreview.title}
                onClick={updateMovieSelection}
                {/*
                    this is how you can do what is happening in this function
                    but in-line with your HTML/react components

                    onClick={() => {
                        setCurrentMovie(movieToPreview);
                        setClickCount(clickCount + 1);
                    }}
                */}
            />
        </div>
    )
}

export default MoviePreview;