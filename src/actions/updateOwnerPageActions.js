export const UPDATE_PET = 'UPDATE_PET'

export const updatePet = ( {prop, value} ) => {
    return {
        type: UPDATE_PET
        ,payload: { prop, value }
    }
}