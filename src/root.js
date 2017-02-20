import { combineReducers } from 'redux'
import updateLandingPageReducer from './reducers/updateLandingPageReducer'
import updateSettingsPageReducer from './reducers/updateSettingsPageReducer'
import updateMainPageActions from './reducers/updateMainPageReducer'
import updateLoginReducer from './reducers/updateLoginReducer'

export default combineReducers({
  landingPage: updateLandingPageReducer,
  settingsPage: updateSettingsPageReducer,
    mainPage: updateMainPageActions,
    login: updateLoginReducer
});
