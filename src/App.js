import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import {reducers, middlewares} from './redux/index'

import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/auth/Profile'

import Home from './components/main/Home'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
  middlewares
))

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <Switch>
            <Route path={'/login'} component={Login} />
            <Route path={'/register'} component={Register} />
            <Route path={'/profile'} component={Profile} />

            <Route paht={'/'} component={Home} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
