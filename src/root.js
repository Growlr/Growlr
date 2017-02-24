import { combineReducers } from 'redux'
import updateLandingPageReducer from './reducers/updateLandingPageReducer'
import updateSettingsPageReducer from './reducers/updateSettingsPageReducer'
import updateMainPageActions from './reducers/updateMainPageReducer'
import updateLoginReducer from './reducers/updateLoginReducer'
import updateViewReducer from './reducers/updateViewReducer'
import updateOwnerPageReducer from './reducers/updateOwnerPageReducer'

export default combineReducers({
  ownerPage: updateOwnerPageReducer,
  landingPage: updateLandingPageReducer,
  settingsPage: updateSettingsPageReducer,
    mainPage: updateMainPageActions,
    login: updateLoginReducer,
    view: updateViewReducer
});
