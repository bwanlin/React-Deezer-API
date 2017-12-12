export const GET_ALBUMS_FROM_ARTIST_START = "GET_ALBUMS_FROM_ARTIST_START"
export const GET_ALBUMS_FROM_ARTIST_COMPLETE = "GET_ALBUMS_FROM_ARTIST_COMPLETE"
export const GET_ALBUMS_FROM_ARTIST_ERROR = "GET_ALBUMS_FROM_ARTIST_ERROR"

export const getAlbumsFromArtistStart = () => {
  return {
    type: GET_ALBUMS_FROM_ARTIST_START
  };
}

export const getAlbumsFromArtistComplete = (data) => {
  return {
    type: GET_ALBUMS_FROM_ARTIST_COMPLETE,
    data
  };
}

export const getAlbumsFromArtistErrors = (errors) => {
  return {
    type: GET_ALBUMS_FROM_ARTIST_ERROR,
    errors
  };
}

export const getAlbumsFromArtist = (name) => {
  return (dispatch) => {
    dispatch(getAlbumsFromArtistStart())
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${name}&output=json&limit=50`)
    .then((res) => {
      console.log(res);
      return (res.json())
    })
    .then((data) => {
      console.log(data);
      dispatch(getAlbumsFromArtistComplete(data))
    })
    .catch((err) => {
      dispatch(getAlbumsFromArtistErrors(err))
    })
  }
}
