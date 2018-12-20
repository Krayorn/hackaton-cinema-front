import React, { Component } from 'react'
import { connect } from 'react-redux'

import RegularLayout from '../../layouts/RegularLayout'
import VoteForm from '../../components/commons/VoteForm'

class Vote extends Component {

    render() {
        return (
            <RegularLayout>
                <h1>Voter pour votre film</h1>
                <VoteForm />
            </RegularLayout>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Vote)
