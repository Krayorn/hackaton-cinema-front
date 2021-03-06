import { restGet } from '../../services/api.js'

const voteMiddleware = {
    MDW_MOVIES: (payload, dispatch) => {
        if (payload.token) {
            restGet(`/movie?month=${payload.month}`, { 'x-access-token': payload.token }).then(
                data => dispatch({ type: 'GET_MOVIES_OK', payload: { response: data } }),
                err => dispatch({ type: 'GET_MOVIES_ERROR', payload: { response: err } })
            )
        } else {
            restGet(`/movie?month=${payload.month}`).then(
                data => dispatch({ type: 'GET_MOVIES_OK', payload: { response: data } }),
                err => dispatch({ type: 'GET_MOVIES_ERROR', payload: { response: err } })
            )
        }
    },
    MDW_QUALIFIED_MOVIE: (payload, dispatch) => {
        restGet(`/movie/qualifiedMovie?month=${payload}`).then(
            data => dispatch({ type: 'QUALIFIED_MOVIE_OK', payload: { response: data } }),
            err => dispatch({ type: 'QUALIFIED_MOVIE_ERROR', payload: { response: err } })
        )
    }
}

export default voteMiddleware