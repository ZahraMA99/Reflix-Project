import React, { Component } from 'react';

export class MovieDetail extends Component {
    render() {
        const movieId = this.props.match.params.movieId;
                    let movie = this.props.movies.find(m => m.id == movieId)
        return (
            <div>
                    return (
                    <div className="movie-detail">
                        <h1>
                            {movie.title} ({movie.year})
                        </h1>
                        <img src={movie.img} />
                        <p>{movie.descrShort}</p>
                    </div>
                    )
            </div>
        );
    }
}

