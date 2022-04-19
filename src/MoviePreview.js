import './App.css';

const MoviePreview = (props) => {
    const {movieToPreview, setCurrentMovie} = props;

    return (
        <div>
            <p>{movieToPreview.title}</p>
            <img
                src={movieToPreview.posterUrl}
                alt={movieToPreview.title}
                onClick={() => setCurrentMovie(movieToPreview)}
            />
        </div>
    )
}

export default MoviePreview;