import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import RegularLayout from '../../layouts/RegularLayout'
import VoteForm from '../../components/commons/VoteForm'

import { voteMultiple } from '../../redux/actions/vote'
import { getMovies } from '../../redux/actions/movie'

class VoteAll extends Component {

    constructor(props) {
        super(props)
        this.state = {
            potVotes: []
        }

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

        return (
            <RegularLayout>
                <h1>Voter pour vos films</h1>
                { movies.data && movies.data.map(movie => (
                    <div key={movie._id}>
                        <img src={movie.poster} alt="poster" />
                        <p>{movie.title}</p>
                        <p>{movie.directors}</p>
                        <Link to={`/movie/${movie._id}`}>En savoir plus</Link>
                        { !movie.hasVoted && (
                            <div id={movie._id}>
                                <VoteForm isMultiple={true} movieId={movie._id} onChange={this.handleChange} />
                            </div>
                        )}
                    </div>
                ))}
                <button onClick={this.onSubmit}>Voter les films</button>
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
