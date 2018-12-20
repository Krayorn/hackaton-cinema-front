import React, { Component } from 'react'
import { connect } from 'react-redux'

import RegularLayout from '../../layouts/RegularLayout'

import { getMovies } from '../../redux/actions/movie'

import {
    StyledImg,
    PlayerButton,
    StyledI,
    Container,
    Title,
    From,
    Genre,
    DataContainer,
    SubTitle,
    Content
} from './style'

class Movie extends Component {

    constructor(props) {
        super(props)

        if(!props.movie) {
            const currentDate = new Date()
            const { user } = this.props

            if (currentDate.getDate() <= 15) {
                if (user && user.token) {
                    this.props.getMovies({ month: currentDate.getMonth() - 1, token: this.props.user.token })
                } else {
                    this.props.getMovies({ month: currentDate.getMonth() - 1 })
                }
            } else {
                if (user && user.token) {
                    this.props.getMovies({ month: currentDate.getMonth(), token: this.props.user.token })
                } else {
                    this.props.getMovies({ month: currentDate.getMonth() })
                }
            }
        }
    }

    render() {
        const movie = this.props.movie
        console.log(movie)

        return (
            <RegularLayout>
                <Container>
                    <StyledImg src={movie.poster} ></StyledImg>
                    <PlayerButton>
                        <StyledI className="fas fa-play"></StyledI>
                    </PlayerButton>
                </Container>
                <DataContainer>
                    <Title>{movie.title}</Title>
                    <From>de {movie.directors}</From>
                    <Genre>{movie.genres}</Genre>

                    <SubTitle>Casting</SubTitle>
                    <Content>{movie.actors}</Content>
                    <SubTitle>Synopsis</SubTitle>
                    <Content>{movie.synopsis}</Content>

                </DataContainer>
            </RegularLayout>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.auth.user || JSON.parse(localStorage.getItem('user')) || false,
    movie: (state.movie.movies.data || []).find((movie) => movie._id === ownProps.match.params.id) ||false
})

const mapDispatchToProps = (dispatch) => ({
    getMovies: (payload) => dispatch(getMovies(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(Movie)
