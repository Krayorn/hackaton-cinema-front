import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import RegularLayout from '../../layouts/RegularLayout'
import Movie from '../../components/movies/movie'


import { getMovies, getQualifiedMovie } from '../../redux/actions/movie'

import {
    Nominees,
    TitleSection,
    Month,
    CTAvote,
    CTAnominees,
    About,
    AboutSubtitle,
    AboutContent
} from './style'

class Home extends Component {
    
    constructor(props) {
        super(props)

        const currentDate = new Date()
        const { user } = this.props

        this.props.getQualifiedMovie(currentDate.getMonth() - 1)

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

    render() {
        const monthsNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
        const currentDate = new Date()

        return (
            <RegularLayout>
                {/* TODO : GET SELECTIONNED MOVIE FROM THE PREVIOUS MONTH */}
                <Nominees>
                    <TitleSection>
                        <Month>                                
                            <span>{monthsNames[currentDate.getMonth()]}&nbsp;{currentDate.getFullYear()}</span>
                            <span>Nominés du mois</span>
                        </Month>
                        <CTAvote>
                            Votez maintenant
                        </CTAvote>
                    </TitleSection>
                    { this.props.movies.data && this.props.movies.data.map(movie => (
                        <Movie movie={movie}></Movie>
                    ))}
                    <CTAnominees>
                        Découvrez les nominés
                    </CTAnominees>
                </Nominees>

                <About>
                    <AboutSubtitle>
                        Prix brutus c'est
                    </AboutSubtitle>
                    <AboutContent>
                        la sélection du meilleur film de 
                        l’année selon le vote du public. 
                        Notre objectif est de valoriser 
                        et d’apporter un poids à votre 
                        voix. Les césars n’ont qu’à bien 
                        se tenir : ici, vous êtes le jury.
                    </AboutContent>
                    <i className="fas fa-chevron-down"></i>
                </About>
            </RegularLayout>
        )
    }
}
    
const mapStateToProps = (state) => ({
    movies: state.movie.movies,
    qualifiedMovie: state.movie.qualifiedMovie
})

const mapDispatchToProps = (dispatch) => ({
    getMovies: (payload) => dispatch(getMovies(payload)),
    getQualifiedMovie: (payload) => dispatch(getQualifiedMovie(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
