const initialState = {
  item: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_ITEM':
      return {
        ...state,
        item: action.payload.item
      }
    case 'RESET_ITEM':
      return {
        ...state,
        item: ''
      }
    default:
      return state
  }
}
