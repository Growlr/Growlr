import { combineReducers } from 'redux'
import updateLandingPageReducer from './reducers/updateLandingPageReducer'
import updateSettingsPageReducer from './reducers/updateSettingsPageReducer'

export default combineReducers({
  landingPage: updateLandingPageReducer,
  settingsPage: updateSettingsPageReducer
});
