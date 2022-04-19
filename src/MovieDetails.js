const MovieDetails = (props) => {
    // JS logic here

    const {currentMovie} = props;
    // equivalent to const currentMovie = props.currentMovie;

    return (
        <div>
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
    )
}

export default MovieDetails;