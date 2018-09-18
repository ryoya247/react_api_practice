const initialState = {
  breadCrumbs: [
    {
      itemName: '商品一覧',
      itemId: ''
    }
  ]
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_BREAD_CRUMB':
      return {
        ...state,
        breadCrumbs: state.breadCrumbs.concat(
          [
            {
              itemName: action.payload.itemName,
              itemId: action.payload.itemId
            }
          ]
        )
      }
    case 'RESET_BREAD_CRUMB':
      return {
        ...state,
        breadCrumbs: initialState.breadCrumbs
      }
    default:
      return state
  }
}
