export const UPDATE_PET = 'UPDATE_PET'
export const UPDATE_MY_PETS = 'UPDATE_MY_PETS'
export const EDIT_PET = 'EDIT_PET'
export const EDIT_MY_PET = 'EDIT_MY_PET'

export const updatePet = ( {prop, value} ) => {
    return {
        type: UPDATE_PET
        ,payload: { prop, value }
    }
}

export const updateMyPets = (pets) => {
    return {
        type: UPDATE_MY_PETS
        , pets
    }
}

export const editMyPet = ( {prop, value} ) => {
    return {
        type: UPDATE_PET
        ,payload: { prop, value }
    }
}

export const editPet = (editablePet) => {
    console.log(editablePet)
    return {
        type: EDIT_PET
        , editablePet
    }
}