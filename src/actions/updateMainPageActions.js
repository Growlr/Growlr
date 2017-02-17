export const UPDATE_MAIN = 'UPDATE_MAIN'
export const CARD_ACCEPTED = 'CARD_ACCEPTED'
export const CARD_DECLINE = 'CARD_DECLINE'

export const updateMain = update => {
  console.log('updateMain here', update);
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
  console.log(card)
  return {
    type: CARD_ACCEPTED,
      card
  }
}
