import {UPDATE_MAIN, CARD_DECLINE, CARD_ACCEPTED} from '../actions/updateMainPageActions'

const initialState = {
    main: '',
    cards: [
        {
            mainImage:"https://facebook.github.io/react/img/logo_og.png",
            name:"Jacob",
            age:"23",
            desc:"Occupation"
        },
        {
            mainImage:"https://facebook.github.io/react/img/logo_og.png",
            name:"Tammy",
            age:"23",
            desc:"Occupation"
        },
        {
            mainImage:"https://facebook.github.io/react/img/logo_og.png",
            name:"John",
            age:"23",
            desc:"Occupation"
        },
        {
            mainImage:"https://facebook.github.io/react/img/logo_og.png",
            name:"Travis",
            age:"23",
            desc:"Occupation"
        },
    ],
};
export default (state = initialState, action) => {
    switch (action.type){
        case UPDATE_MAIN:
            return state
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