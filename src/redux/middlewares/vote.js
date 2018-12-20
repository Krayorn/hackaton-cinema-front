import { restPost } from '../../services/api.js'

const voteMiddleware = {
    MDW_VOTE: (payload, dispatch) => {
        restPost(`/vote/${payload.movieId}`, payload)
        .then(
            data => dispatch({ type: 'VOTE_OK', payload: { response: data } }),
            err => dispatch({ type: 'VOTE_ERROR', payload: { response: err } })
        )
    },
    MDW_VOTE_MULTIPLE: (payload, dispatch) => {
        restPost('/vote/multiples', payload)
        .then(
            data => dispatch({ type: 'VOTE_MULTIPLE_OK', payload: { response: data } }),
            err => dispatch({ type: 'VOTE_MULTIPLE_ERROR', payload: { response: err } })
        )
    },
}

export default voteMiddleware