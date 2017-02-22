export const UPDATE_MAIN = 'UPDATE_MAIN'
export const CARD_ACCEPTED = 'CARD_ACCEPTED'
export const CARD_DECLINE = 'CARD_DECLINE'
export const UPDATE_SWIPER_ID = 'UPDATE_SWIPER_ID'

export const updateMain = update => {
  return {
    type: UPDATE_MAIN
    , update
  }
}

export const cardDeclined = card => {
  return {
    type: CARD_DECLINE,
      card
  }
}
export const cardAccepted = card=> {
  return {
    type: CARD_ACCEPTED,
      card
  }
}

export const updateSwiperId = id => {
  console.log(id)
  return {
    type: UPDATE_SWIPER_ID,
      id
  }
}
