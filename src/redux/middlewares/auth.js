import { restPost, restGet, restDelete, restPatch } from '../../services/api.js'

const authMiddleware = {
    MDW_REGISTER: (payload, dispatch) => {
        restPost('/user', payload)
        .then(
            data => dispatch({type: 'REGISTER_OK', payload: {response: data}}),
            err => dispatch({ type: 'REGISTER_ERROR', payload: {response: err} })
        )
    },
    MDW_LOGIN: (payload, dispatch) => {
        restPost('/auth', payload)
        .then(
            data => dispatch({type: 'LOGIN_OK', payload: {response: data}}),
            err => dispatch({ type: 'LOGIN_ERROR', payload: {response: err} })
        )
    },
    MDW_DELETE_USER: (payload, dispatch) => {
        restDelete(`/user/${payload.id}`, {"x-access-token": payload.token })
        .then(
            data => dispatch({type: 'DELETE_USER_OK', payload: {response: data}}),
            err => dispatch({ type: 'DELETE_USER_ERROR', payload: {err} })
        )
    },
}

export default authMiddleware
