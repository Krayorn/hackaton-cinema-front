export function getMovies(payload) {
    return {
        type: 'MDW_MOVIES',
        payload
    }
}

export function getQualifiedMovie(payload) {
    return {
        type: 'MDW_QUALIFIED_MOVIE',
        payload
    }
}
