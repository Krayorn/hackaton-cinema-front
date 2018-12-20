import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Form from '../Form'

import { vote } from '../../../redux/actions/vote'

class VoteForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            grade: undefined,
            acting: undefined,
            scenario: undefined,
            soundtrack: undefined,
            esthetic: undefined
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        
        const { grade } = this.state
        const { user, movieId } = this.props

        if (grade) {
            this.props.vote({
                grade,
                movieId: movieId || '5c1ab948ba920ea414c29df9',
                token: user.token
            })
        } else {
            const detailedGrades = { categories: [] }
            
            for (const gradeType in this.state) {
                if (gradeType !== 'grade') {
                    detailedGrades.categories.push({ criteria: gradeType, grade: this.state[gradeType] })
                }
            }

            this.props.vote({
                ...detailedGrades,
                movieId: movieId || '5c1ab948ba920ea414c29df9',
                token: user.token
            })
        }
    }

    handleChange = (name, value) => {
        const { isMultiple, onChange, movieId } = this.props

        if (isMultiple) {
            this.setState({ [name]: parseInt(value) }, () => onChange(movieId, this.state))            
        } else {
            this.setState({ [name]: parseInt(value) })
        }
        
    }

    render() {
        const { errors, isMultiple } = this.props

        return (
            <Fragment>
                <Form>
                    <h3>Note globale</h3>
                    <input 
                        type="number" min="1" max="10" name="note"
                        onChange={(e) => this.handleChange('grade', e.target.value)}
                    />
                    {!isMultiple && <button onClick={this.onSubmit}>Voter</button>}
                </Form>
                <Form>
                    <h3>Note détaillée</h3>
                    <label htmlFor="acting">Jeu d'acteur</label>
                    <input 
                        type="number" min="1" max="10" name="acting"
                        onChange={(e) => this.handleChange('acting', e.target.value)}
                    />
                    <label htmlFor="scenario">Scénario</label>
                    <input 
                        type="number" min="1" max="10" name="scenario"
                        onChange={(e) => this.handleChange('scenario', e.target.value)}
                    />
                    <label htmlFor="soundtrack">Bande son</label>
                    <input 
                        type="number" min="1" max="10" name="soundtrack"
                        onChange={(e) => this.handleChange('soundtrack', e.target.value)}
                    />
                    <label htmlFor="esthetic">Direction artistique (esthétique)</label>
                    <input 
                        type="number" min="1" max="10" name="esthetic"
                        onChange={(e) => this.handleChange('esthetic', e.target.value)}
                    />
                    {!isMultiple && <button onClick={this.onSubmit}>Voter</button>}
                </Form>
                { errors.length > 0 && errors.map((err, index) => (
                    <p key={index}>{err}</p>
                ))}
            </Fragment>
        )
    }
}

VoteForm.propTypes = {
  movieId: PropTypes.string,
  isMultiple: PropTypes.bool,
  onChange: PropTypes.func
}

VoteForm.defaultProps = {
  isMultiple: false
}

const mapStateToProps = (state) => ({
    user: state.auth.user || JSON.parse(localStorage.getItem('user')) || false,
    errors: state.vote.errors
})

const mapDispatchToProps = (dispatch) => ({
    vote: (payload) => dispatch(vote(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(VoteForm)
