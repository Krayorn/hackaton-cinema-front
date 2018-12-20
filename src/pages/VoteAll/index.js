import React, { Component } from 'react'
import { connect } from 'react-redux'

import RegularLayout from '../../layouts/RegularLayout'
import VoteForm from '../../components/commons/VoteForm'
import Button from '../../components/commons/Button'

import { voteMultiple } from '../../redux/actions/vote'
import { getMovies } from '../../redux/actions/movie'

import { Container } from './style'

class VoteAll extends Component {

    constructor(props) {
        super(props)
        this.state = {
            potVotes: []
        }

        // const currentDate = new Date()
        // const { user } = this.props

        // if (currentDate.getDate() <= 15) {
        //     if (user && user.token) {
        //         this.props.getMovies({ month: currentDate.getMonth() - 1, token: this.props.user.token })
        //     } else {
        //         this.props.getMovies({ month: currentDate.getMonth() - 1 })
        //     }
        // } else {
        //     if (user && user.token) {
        //         this.props.getMovies({ month: currentDate.getMonth(), token: this.props.user.token })
        //     } else {
        //         this.props.getMovies({ month: currentDate.getMonth() })
        //     }
        // }
        this.props.getMovies({ month: 0 })
    }

    handleChange = (name, value) => {
        const potVotes = this.state.potVotes

        if (potVotes.length !== 0) {
            const index = potVotes.findIndex(x => x.id === name)
            if (index !== -1) {
                potVotes.splice(index, 1)
            }
        }

        if (value && !isNaN(value.grade)) {
            potVotes.push({ ...value, id: name })
            this.setState({ potVotes })
        }
    }

    onSubmit = () => {
        this.props.voteMultiple({ ...this.state, token: this.props.user.token })
    }

    render() {
        const { movies } = this.props
        const currentDate = new Date()
        const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];;

        return (
            <RegularLayout>
                <Container>
                    <div className="vote-header">
                        <h3>{`${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</h3>
                        <h2>Quels films avez-vous vus ce mois-ci ?</h2>
                        <form className="search-form">
                            <input type="search" placeholder="Chercher un film" />
                            <Button text="OK" />
                        </form>
                    </div>
                    <div className="movies-container">
                        { movies.data && movies.data.map(movie => (
                            !movie.hasVoted && (
                                <div key={movie._id}>
                                    <div className="movie-info">
                                        {/* <input type="checkbox" id={movie._id} /> */}
                                        <p>{movie.title}</p>
                                        <span className="chevron chevron-down"/>
                                    </div>
                                    <div className="separator" />
                                    <VoteForm 
                                        isMultiple={true} 
                                        movieId={movie._id} 
                                        onChange={this.handleChange}
                                        className="vote-form"
                                    />
                                </div>
                            )
                        ))}
                    </div>
                    <Button
                        onClick={this.onSubmit}
                        text="Valider"
                        className="submit-button"
                        style={{ width: '100%' }}
                    />
                </Container>
            </RegularLayout>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user || JSON.parse(localStorage.getItem('user')) || false,
    errors: state.vote.errors,
    movies: state.movie.movies
})

const mapDispatchToProps = (dispatch) => ({
    voteMultiple: (payload) => dispatch(voteMultiple(payload)),
    getMovies: (payload) => dispatch(getMovies(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(VoteAll)
