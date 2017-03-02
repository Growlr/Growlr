export const UPDATE_MATCHES = 'UPDATE_MATCHES'

export const updateMatches = update => {
  console.log(update)
  return {
    type: UPDATE_MATCHES
    , update
  }
}
