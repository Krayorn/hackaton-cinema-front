import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Redux
import { registerUser } from '../../../redux/actions/auth'
import { connect } from 'react-redux'

// Layout
import SimpleLayout from '../../../layouts/SimpleLayout'

// Components
import Button from '../../commons/Button'

import { Container, FormContainer, ConnectContainer } from '../style'

class Register extends Component {
    state = {success: false}

    static getDerivedStateFromProps(props, state) {
        if (props.user.username === state.username && props.user.token) {
            return {
                success: true,
            }
        }

        return null
    }

    registerUser = (e) => {
        e.preventDefault()
        this.props.registerUser(this.state)
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    render() {

        if (this.state.success) {
            this.props.history.push('/login')
        }

        return (
            <SimpleLayout>
                <Container>
                    { this.props.errors.length > 0 && (
                        <div className="errors-container">
                            {this.props.errors.map(err => <p key={err}>{err}</p>)}
                        </div>
                    )}
                    <FormContainer>
                        <input
                            onChange={(e) => this.handleChange('username', e.target.value)}
                            type='text' placeholder='pseudo' name='username'
                        />
                        <input
                            onChange={(e) => this.handleChange('password', e.target.value)}
                            type='password' placeholder='mot de passe' name='password'
                        />
                        <input
                            onChange={(e) => this.handleChange('passwordConfirm', e.target.value)}
                            type='password' placeholder='confirmer le mot de passe' name='passwordConfirm'
                        />
                        <Button onClick={this.registerUser} text="M'inscrire" />
                    </FormContainer>
                    <ConnectContainer>
                        <div className="separator">
                            <div className="short-line" />
                            <p>ou</p>
                            <div className="short-line" />
                        </div>
                        <div className="buttons-container">
                            <button>Me connecter</button>
                            <button>Facebook</button>
                        </div>
                    </ConnectContainer>
                </Container>
            </SimpleLayout>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user || {},
    errors: state.auth.errors || [],
})

const mapDispatchToProps = (dispatch) => ({
    registerUser: (payload) => dispatch(registerUser(payload)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register))
