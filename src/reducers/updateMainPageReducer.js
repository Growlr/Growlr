import {UPDATE_MAIN, CARD_DECLINE, CARD_ACCEPTED} from '../actions/updateMainPageActions'

const initialState = {
    main: '',
    cards: []
};
export default (state = initialState, action) => {
    switch (action.type){
        case UPDATE_MAIN:
        console.log(action);
            return {...state, cards: action.update}
        case CARD_DECLINE:
            let newDeclinedArray = [ ...state.cards ]
            newDeclinedArray.shift()
            return { ...state, cards: newDeclinedArray  }
        case CARD_ACCEPTED:
            let newAcceptedArray = [ ...state.cards ]
            newAcceptedArray.shift()
            console.log(action, 'ACCEPTED')
            return { ...state, cards: newAcceptedArray  }
        default:
            return state
    }

}
