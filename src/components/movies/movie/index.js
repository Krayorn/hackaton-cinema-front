import React, { Component } from 'react'

// Style
import {
    Container,
    Infos,
    Title,
    Director,
    FakeLink
} from './style'

class Movie extends Component {
    render() {
        const { movie } = this.props

        return (
            <Container to={`/movie/${movie._id}`}>
                <img className="picture" src={movie.poster} alt={movie.title}></img>
                <Infos>
                    <Title>{movie.title}</Title>
                    <Director>De {movie.directors}</Director>
                    <FakeLink>En savoir plus</FakeLink>
                </Infos>
            </Container>
        )
    }
}

export default Movie
