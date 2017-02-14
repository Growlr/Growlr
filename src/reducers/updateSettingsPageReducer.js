import { UPDATE_SETTINGS } from '../actions/updateSettingsPageActions'

const initialState = {

  animationType: 'fade',
  modalVisible: false,
  transparent: false,
  selectedSupportedOrientation: 0,
  currentOrientation: 'unknown'
}



export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return Object.assign({}, state, action.update)

    default:
      return state

  }
}
