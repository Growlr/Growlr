import { UPDATE_MATCHES } from '../actions/updateMatchesPageActions'

const initialState = {
  animationType: 'fade',
  modalVisible: false,
  transparent: true,
  selectedSupportedOrientation: 0,
  currentOrientation: 'unknown'
}



export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MATCHES:
      return Object.assign({}, state, action.update)

    default:
      return state

  }
}
