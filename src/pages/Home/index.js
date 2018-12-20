import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import RegularLayout from '../../layouts/RegularLayout'

import { getMovies } from '../../redux/actions/movie'

class Home extends Component {
    
    constructor(props) {
        super(props)
        
        const currentDate = new Date()
        if (currentDate.getDate() <= 15) {
            this.props.getMovies(currentDate.getMonth() - 1)
        } else {
            this.props.getMovies(currentDate.getMonth())
        }
    }

    render() {
        return (
            <RegularLayout>
                <h1>Hello</h1>
                { this.props.movies.data && this.props.movies.data.map(movie => (
                    <div key={movie._id}>
                        <img src={movie.poster} alt="poster" />
                        <p>{movie.title}</p>
                        <p>{movie.directors}</p>
                        <Link to={`/movie/${movie._id}`}>En savoir plus</Link>
                    </div>
                ))}
            </RegularLayout>
        )
    }
}
    
const mapStateToProps = (state) => ({
    movies: state.movie.movies
})

const mapDispatchToProps = (dispatch) => ({
    getMovies: (payload) => dispatch(getMovies(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
