import { combineReducers, applyMiddleware } from 'redux'

//middlewares
import authMiddleware from './middlewares/auth'
import voteMiddleware from './middlewares/vote'

//reducers
import authReducer from './reducers/auth'
import voteReducer from './reducers/vote'

const customMiddlewares = {
    ...authMiddleware,
    ...voteMiddleware
}

export const reducers = combineReducers({
    auth: authReducer,
    vote: voteReducer
})

const customMiddleWare = store => next => action => {

    next(action)

    if (customMiddlewares[action.type]) {
        customMiddlewares[action.type](action.payload, next)
    }
}

export const middlewares = applyMiddleware(customMiddleWare)
