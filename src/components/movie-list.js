import React from "react";
import Movie from "./movie";
export default class MovieList extends React.Component {
    render() {
        let movies = [
            {
                title: "Rush Hour",
                image: "/images/rush hour.jpg",
                plot: "Jackie Chan and Chris Tucker save the World",
                reviews: []
            },
            {
                title: "Friday",
                image: "/images/friday-movie.jpg",
                plot: "Ice Cube's directing debut",
                reviews: []
            },
            {
                title: "The Wood",
                image: "/images/the wood picture.jpg",
                plot: "A spin on the highschool days with 3 best friends",
                reviews: []
            },
            {
                title: "Love & Basketball",
                image: "/images/loveandbasketball.jpg",
                plot: "What's more important Love or Basketball",
                reviews: []
            }
        ]
        let arr;
        arr = movies.map( (movie, index ) => 
        <Movie title={movie.title} plot={movie.plot} reviews={movie.reviews} image={movie.image} key={index} />
        )
        return(
            <div>
                {arr}
            </div>
        )
    }
}