import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux'

// Components
import NavBar from '../components/commons/NavBar'
import Footer from '../components/commons/Footer'

// Style
import {
    Container,
} from './style'

class RegularLayout extends Component {
    render() {
        return (
            <Container>
                <NavBar user={this.props.user} />
                {this.props.children}
                <Footer></Footer>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user || JSON.parse(localStorage.getItem('user')) || false
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(RegularLayout)
