export const getItems = (items) => ({
  type: 'GET_ITEMS',
  payload: {
    items
  }
})

export function funcGetItem(items) {
  return (dispatch) => {
    dispatch(getItems(items))
  }
}
