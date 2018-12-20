import { restGet } from '../../services/api.js'

const voteMiddleware = {
    MDW_MOVIES: (payload, dispatch) => {
        restGet(`/movie?month=${payload.month}`, { 'x-access-token': payload.token }).then(
            data => dispatch({ type: 'GET_MOVIES_OK', payload: { response: data } }),
            err => dispatch({ type: 'GET_MOVIES_ERROR', payload: { response: err } })
        )
    }
}

export default voteMiddleware