const movie = (state = { movies: [], errors: [] }, action) => {

  switch (action.type) {
      case 'GET_MOVIES_OK':
          return Object.assign({}, state, {
              movies: action.payload.response,
              errors: []
          })
      
      case 'GET_MOVIES_ERROR':
          return Object.assign({}, state, {
              errors: action.payload.response
          })
      
      case 'QUALIFIED_MOVIE_OK':
          return Object.assign({}, state, {
              qualifiedMovie: action.payload.response,
              errors: []
          })
      
      case 'QUALIFIED_MOVIE_ERROR':
          return Object.assign({}, state, {
              errors: action.payload.response
          })
      
      default:
          return state
  }
}

export default movie
