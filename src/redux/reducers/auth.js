const auth = (state = { user: false, list: [], errors: [] }, action) => {

    switch (action.type) {
        case 'REGISTER_OK':
            return Object.assign({}, state, {
                user: action.payload.response.data,
                errors: []
            })

        case 'REGISTER_ERROR':
            return Object.assign({}, state, {
                errors: action.payload.response.errors
            })

        case 'LOGIN_OK':
            return Object.assign({}, state, {
                user: action.payload.response,
                erorrs: [],
            })

        case 'LOGIN_ERROR':
            return Object.assign({}, state, {
                errors: action.payload.response.errors
            })

        case 'LOGOUT':
            return Object.assign({}, state, {
                user: false
            })

        case 'DELETE_USER_OK':
            return Object.assign({}, state, {
                list: state.list.filter(user => user._id !== action.payload.response.data.id)
            })

        default:
            return state
    }
}

export default auth
