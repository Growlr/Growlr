import {UPDATE_MAIN, CARD_DECLINE, CARD_ACCEPTED} from '../actions/updateMainPageActions'

const initialState = {
    main: '',
    cards: [],
    seenId: []
};
export default (state = initialState, action) => {
    switch (action.type){
        case UPDATE_MAIN:
            return {...state, cards: action.update}
        case CARD_DECLINE:
            let newDeclinedArray = [ ...state.cards ]
            newDeclinedArray.shift()
            return { ...state, cards: newDeclinedArray  }
        case CARD_ACCEPTED:
            let newAcceptedArray = [ ...state.cards ]
            newAcceptedArray.shift()
            return { ...state, cards: newAcceptedArray  }
        default:
            return state
    }

}
