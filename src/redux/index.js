import { combineReducers, applyMiddleware } from 'redux'

//middlewares
import authMiddleware from './middlewares/auth'
import voteMiddleware from './middlewares/vote'
import movieMiddleware from './middlewares/movie'

//reducers
import authReducer from './reducers/auth'
import voteReducer from './reducers/vote'
import movieReducer from './reducers/movie'

const customMiddlewares = {
    ...authMiddleware,
    ...voteMiddleware,
    ...movieMiddleware
}

export const reducers = combineReducers({
    auth: authReducer,
    vote: voteReducer,
    movie: movieReducer
})

const customMiddleWare = store => next => action => {

    next(action)

    if (customMiddlewares[action.type]) {
        customMiddlewares[action.type](action.payload, next)
    }
}

export const middlewares = applyMiddleware(customMiddleWare)
