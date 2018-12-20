export function vote(payload) {
    return {
        type: 'MDW_VOTE',
        payload
    }
}

export function voteMultiple(payload) {
    return {
        type: 'MDW_VOTE_MULTIPLE',
        payload
    }
}
