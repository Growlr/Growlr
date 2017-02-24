import { combineReducers } from 'redux'
import updateLandingPageReducer from './reducers/updateLandingPageReducer'
import updateSettingsPageReducer from './reducers/updateSettingsPageReducer'
import updateMainPageActions from './reducers/updateMainPageReducer'
import updateLoginReducer from './reducers/updateLoginReducer'
import updateViewReducer from './reducers/updateViewReducer'
export default combineReducers({
  landingPage: updateLandingPageReducer,
  settingsPage: updateSettingsPageReducer,
    mainPage: updateMainPageActions,
    login: updateLoginReducer,
    view: updateViewReducer
});
