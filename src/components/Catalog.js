import { Component } from "react";
import { Movie } from "./Movie";
import { Rented } from "./Rented";

export class Catalog extends Component {
  render() {
    const budget = this.props.budget;
    const movies = this.props.movies;
    return (
      <div>
        <div>
          <input placeholder="Search" />
          <span>Budget: {budget}</span>
          <div>
            Rented:
            <Rented movies={movies} isMovieRented={this.props.isMovieRented} />
          </div>
          <div id="catalog-container">
            Catalog:
            <div>
              {movies.map((movie) => {
                return <Movie movie={movie} isMovieRented={this.props.isMovieRented} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
