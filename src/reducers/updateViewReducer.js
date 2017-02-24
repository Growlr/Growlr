import { UPDATE_VIEW } from '../actions/updateViewActions'

const initialState = {

  changeView: false,
  value: false
}



export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VIEW:

      return Object.assign({}, state, action.update)

    default:
      return state

  }
}
