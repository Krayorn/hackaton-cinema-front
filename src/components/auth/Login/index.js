import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { loginUser } from '../../../redux/actions/auth'
import { connect } from 'react-redux'

import SimpleLayout from '../../../layouts/SimpleLayout'

import Button from '../../commons/Button'

import { Container, FormContainer, ConnectContainer } from '../style'

class Login extends Component {
    state = {}

    loginUser = (e) => {
        e.preventDefault()
        this.props.loginUser(this.state)
    }

    handleChange = (name, value) => {
        this.setState({ [name]: value })
    }

    render() {
        if (this.props.user.token) {
            this.props.history.push('/')
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
                        <p>Mot de passe oublié ?</p>
                        <Button onClick={this.loginUser} text="Me connecter" />
                    </FormContainer>
                    <ConnectContainer>
                        <div className="separator">
                            <div className="short-line" />
                            <p>ou</p>
                            <div className="short-line" />
                        </div>
                        <button>Me connecter avec Facebook</button>
                    </ConnectContainer>
                </Container>
            </SimpleLayout>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user || {},
    errors: state.auth.errors || []
})

const mapDispatchToProps = (dispatch) => ({
    loginUser: (payload) => dispatch(loginUser(payload)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
