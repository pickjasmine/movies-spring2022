const MovieDetails = (props) => {
    const {currentMovie} = props;

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