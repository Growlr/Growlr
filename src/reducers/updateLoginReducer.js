import { UPDATE_LOGIN } from '../actions/updateLogin'

const initialState = {
    user:''
};

export default (state = initialState, action) => {
    switch (action.type){
        case UPDATE_LOGIN:
            return Object.assign({}, state, action.update)

        default:
            return state
    }

}
