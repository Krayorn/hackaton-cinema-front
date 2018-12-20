import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

// Redux
import { logoutUser } from '../../../redux/actions/auth'
import { connect } from 'react-redux'

import logo from '../../../assets/logo.svg';

import {
    Header,
    LogoLink,
    Burger,
    Menu,
    TopMenu,
    CloseMenu,
    Item,
    Logout,
    CTA
} from './style'

class NavBar extends Component {

    logout = () => {
        this.props.logoutUser()
        this.props.history.push('/login')
    }

    render() {
        const { user } = this.props

        return (
            <Fragment>
                <Header>
                    <LogoLink to={'/'}>
                        <img className="logo" alt="Logo Prix Brutus" src={logo}></img>
                    </LogoLink>
                    <Burger>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Burger>
                </Header>
                <Menu>
                    <TopMenu>
                        <LogoLink to={'/'}>
                            <img className="small-logo" alt="Logo Prix Brutus" src={logo}></img>
                        </LogoLink>
                        <CloseMenu>
                            <span></span>
                            <span></span>
                        </CloseMenu>
                    </TopMenu>
                    <CTA to={'/vote'}>Votez pour le lauréat du mois</CTA>
                    <Item to={'/'}>Home</Item>
                    <Item to={'/'}>Films nominés</Item>
                    <Item to={'/'}>à propos</Item>
                    <Item to={'/profile'}>Mon compte</Item>
                    {
                        user &&
                        <Logout onClick={this.logout} >Déconnexion<i className="fas fa-sign-out-alt"></i></Logout>
                    }
                </Menu>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user || JSON.parse(localStorage.getItem('user'))
})

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
