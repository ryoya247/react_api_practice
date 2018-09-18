export const getItemList = (itemList) => ({
  type: 'GET_ITEM_LIST',
  payload: {
    itemList
  }
})

export function funcGetItemList(items) {
  return (dispatch) => {
    dispatch(getItemList(items))
  }
}
