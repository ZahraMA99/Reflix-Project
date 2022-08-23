import { Component } from "react";

export class Movie extends Component {

    isMovieRented = () => {
        this.props.isMovieRented(this.props.movie.id)
    }

    render() {
        const movie = this.props.movie
        return (
            <div>
                <p>{movie.title}</p>
                <div className='movie-img'><img src={movie.img} /></div>
                {movie.isRented ? <button onClick={this.isMovieRented}>-</button> : <button onClick={this.isMovieRented}>+</button>}
            </div>
        )
    }

}