const initialState = {
  itemList: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_ITEM_LIST':
      return {
        ...state,
        itemList: action.payload.itemList
      }
    default:
      return state
  }
}
