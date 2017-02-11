import { combineReducers } from 'redux'
import updateLandingPageReducer from './reducers/updateLandingPageReducer'

export default combineReducers({
  landingPage: updateLandingPageReducer //

})
