import { UPDATE_PET } from '../actions/updateOwnerPageActions'

const initialState = {
        source_link: '',
        img_link: '',
        pet_id: '',
        gender: '',
        breed: '',
        color: '',
        age: '',
        description: '',
        pet_name: '',
        owner_id: 0
};

export default (state = initialState, action) => {
    switch (action.type){
        case UPDATE_PET:
            console.log(action)
            return { ...state, [action.payload.prop]: action.payload.value}

        default:
            return state
    }

}
