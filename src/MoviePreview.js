import './App.css';

const MoviePreview = (props) => {
    // props is an object
    // const props = {
    //  movieToPreview: movie
    //  setCurrentMovie: a function
    // }

    // this is using destructing to access the movieToPreview prop
    const {movieToPreview, setCurrentMovie} = props;
    // this is the long way to destructure the above line.
    // const movieToPreview = props.movieToPreview;

    return (
        <>
            <p>{movieToPreview.title}</p>
            <img
                src={movieToPreview.posterUrl}
                alt={movieToPreview.title}
                onClick={() => setCurrentMovie(movieToPreview)}
            />
        </>
    )
}

export default MoviePreview;