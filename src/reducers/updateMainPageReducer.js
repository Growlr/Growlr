import {UPDATE_MAIN, CARD_DECLINE, CARD_ACCEPTED, UPDATE_SWIPER_ID} from '../actions/updateMainPageActions'

const initialState = {
    main: '',
    cards: [],
    seenId: [],
    swiperId: ''
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
        case UPDATE_SWIPER_ID:
            console.log(action.id)
            return { ...state, swiperId: action.id}
        default:
            return state
    }

}
