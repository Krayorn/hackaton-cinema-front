import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux'

// Layout
import RegularLayout from '../../layouts/RegularLayout'

class Home extends Component {
    state = {}
    render() {

        return (
            <RegularLayout>
                Hello
            </RegularLayout>
          )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
