const vote = (state = { errors: [] }, action) => {

    switch (action.type) {
        case 'VOTE_OK':
            return Object.assign({}, state, {
                errors: []
            })

        case 'VOTE_ERROR':
            return Object.assign({}, state, {
                errors: action.payload.response.errors || []
            })
        
        default:
            return state
    }
}

export default vote
