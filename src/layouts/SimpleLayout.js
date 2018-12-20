import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux'

// Components
import NavBar from '../components/commons/NavBar'

// Style
import { SimpleContainer } from './style'

class RegularLayout extends Component {
    render() {
        return (
            <SimpleContainer>
                <NavBar user={this.props.user} />
                {this.props.children}
            </SimpleContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user || JSON.parse(localStorage.getItem('user')) || false
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(RegularLayout)
