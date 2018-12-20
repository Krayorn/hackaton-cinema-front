import React, { Component } from 'react'
import { connect } from 'react-redux'

import RegularLayout from '../../layouts/RegularLayout'
import VoteForm from '../../components/commons/VoteForm'

import { voteMultiple } from '../../redux/actions/vote'

class VoteAll extends Component {

    state = {
        potVotes: []
    }

    handleChange = (name, value) => {
        const potVotes = this.state.potVotes
        
        if (potVotes.length !== 0) {
            const index = potVotes.findIndex(x => x.id === name)
            if (index !== -1) {
                potVotes.splice(index, 1)
            }
        }

        if (value && value !== NaN) {
            potVotes.push({...value, id: name})
            this.setState({ potVotes }, () => {console.log(this.state.potVotes)})
        }
    }

    onSubmit = () => {
        this.props.voteMultiple({ ...this.state, token: this.props.user.token })
    }

    render() {
        console.log(this.state)
        const movies = [
            {
                _id: "5c1ab948ba920ea414c29df9",
                title: "Nos Jours Bénis",
                poster: "https://media.senscritique.com/media/000017842378/source_big/Nos_Jours_Benis.jpg",
                date_release: "2018-01-01",
                synopsis: "Adèle, une femme de 85 ans, est confrontée à la perte de son mari, après 63 ans de vie partagée. Un rêve inattendu amènera Adele à revivre les derniers moments de leur vie, au musée. Elle sera capable de surmonter la douleur.",
                directors: "Juliette de Marcillac",
                actors: "Brigitte Roüan",
                genres: "Drame"
            },
            {
                _id: "5c1ab948ba920ea414c29df6",
                title: "Blablabla",
                poster: "https://media.senscritique.com/media/000017842378/source_big/Nos_Jours_Benis.jpg",
                date_release: "2018-01-01",
                synopsis: "Adèle, une femme de 85 ans, est confrontée à la perte de son mari, après 63 ans de vie partagée. Un rêve inattendu amènera Adele à revivre les derniers moments de leur vie, au musée. Elle sera capable de surmonter la douleur.",
                directors: "Juliette de Marcillac",
                actors: "Brigitte Roüan",
                genres: "Drame"
            }
        ]

        return (
            <RegularLayout>
                <h1>Voter pour votre film</h1>
                { (movies || []).map(movie => (
                    <div key={movie._id}>
                        <p>{movie.title}</p>
                        <div id={movie._id}>
                            <VoteForm isMultiple={true} movieId={movie._id} onChange={this.handleChange} />
                        </div>
                    </div>
                ))}
                <button onClick={this.onSubmit}>Voter les films</button>
            </RegularLayout>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user || JSON.parse(localStorage.getItem('user')) || false,
    errors: state.vote.errors
})

const mapDispatchToProps = (dispatch) => ({
    voteMultiple: (payload) => dispatch(voteMultiple(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(VoteAll)
