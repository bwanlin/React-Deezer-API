import {
  GET_ALBUMS_FROM_ARTIST_START,
  GET_ALBUMS_FROM_ARTIST_COMPLETE,
  GET_ALBUMS_FROM_ARTIST_ERROR
} from '../actions/AlbumsAction'

let initialState = {
  loading: false,
  errors: {},
  data: {}
}

function getAlbumsFromArtistReducer(state = initialState, action) {
  switch (action.type) {
  case GET_ALBUMS_FROM_ARTIST_START:
    return Object.assign({}, state, {
      loading: true,
      errors: {}
    })
  case GET_ALBUMS_FROM_ARTIST_COMPLETE:
    return Object.assign({}, state, {
      loading: false,
      errors: {},
      data: action.data
    })
  case GET_ALBUMS_FROM_ARTIST_ERROR:
    return Object.assign({}, state, {
      loading: false,
      data: {},
      errors: action.errors
    })
  default:
    return state
  }
}

export default getAlbumsFromArtistReducer
