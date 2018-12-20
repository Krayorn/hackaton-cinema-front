import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import RegularLayout from '../../layouts/RegularLayout'
import Movie from '../../components/movies/movie'

import logo from '../../assets/logo.svg';

import { getMovies, getQualifiedMovie } from '../../redux/actions/movie'

import {
    Laureate,
    LaureateMovie,
    Banner,
    CustomLink,
    LaureateInfos,
    LaureateText,
    LaureateNote,
    Nominees,
    TitleSection,
    Month,
    CTAvote,
    CTAnominees,
    About,
    AboutSubtitle,
    AboutContent,
    Social,
    SocialText,
    Newsletter,
    NewsForm,
    FakeButton
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

        if (!this.props.qualifiedMovie) {
            return(
                <div></div>
            )
        }
        console.log(this.props.qualifiedMovie);
        const laureateDate = new Date(this.props.qualifiedMovie.data.date)

        return (
            <RegularLayout>
                <Laureate>
                    <LaureateMovie Background={this.props.qualifiedMovie.data.poster}>
                        <Banner>Lauréat de <b>{monthsNames[laureateDate.getMonth()]}&nbsp;{laureateDate.getFullYear()}</b></Banner>
                        <span className="title">{this.props.qualifiedMovie.data.title}</span>
                        <CustomLink to={'/movie/' + this.props.qualifiedMovie.data._id}>Voir la fiche film</CustomLink>
                    </LaureateMovie>
                    <LaureateInfos>
                        <LaureateText>
                            <span className="title">{this.props.qualifiedMovie.data.title}</span>
                            <span className="director">de {this.props.qualifiedMovie.data.directors}</span>
                        </LaureateText>
                        <LaureateNote color="#6DBDF7">
                            {this.props.qualifiedMovie.data.grade}
                        </LaureateNote>
                    </LaureateInfos>
                </Laureate>

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
                        <Movie key={movie._id} movie={movie}></Movie>
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
                
                <Social Background='/cinema.jpg'>
                    <SocialText>
                        <span>Retrouvez le</span>
                        <span>Prix Brutus</span>
                        <span>Sur vos réseaux sociaux avec le hashtag #PrixBrutus</span>
                    </SocialText>
                    <img className="twitter" src='/twitter.svg'></img>
                </Social>

                <Newsletter>
                    <img className="logo" src={logo}></img>
                    <span className="title">S’abonner à notre newsletter</span>
                    <NewsForm>
                        <input type="email" placeholder="Email"></input>
                        <FakeButton>OK</FakeButton>
                    </NewsForm>
                    <span className="CGU">En vous inscrivant, vous acceptez notre politique de confidentialité et de recevoir nos offres marketing et nos actualités.</span>
                </Newsletter>
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
