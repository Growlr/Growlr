import { UPDATE_LANDING } from '../actions/updateLandingPageActions'

const initialState = {
  userInput: 'Welcome to Growlrrr'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LANDING:
      return Object.assign({}, state, action.update)

    default:
      return state

  }
}
