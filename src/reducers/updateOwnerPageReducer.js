import { UPDATE_PET, UPDATE_MY_PETS, EDIT_PET, EDIT_MY_PET } from '../actions/updateOwnerPageActions'

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
        owner_id: 0,
        myPets: [],
        edit_source_link: '',
        edit_img_link: '',
        edit_pet_id: '',
        edit_gender: '',
        edit_breed: '',
        edit_color: '',
        edit_age: '',
        edit_description: '',
        edit_pet_name: '',
        edit_owner_id: 0,

};

export default (state = initialState, action) => {
    switch (action.type){
        case UPDATE_PET:
            console.log(action)
            return { ...state, [action.payload.prop]: action.payload.value}
        case UPDATE_MY_PETS:
            return { ...state, myPets: action.pets}
        case EDIT_PET:
            console.log(action.editablePet)
            return { ...state, ...action.editablePet}

        default:
            return state
    }

}
