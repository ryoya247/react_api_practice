export const getItem = (item) => ({
  type: 'GET_ITEM',
  payload: {
    item
  }
})

export const resetItem = () => ({
  type: 'RESET_ITEM'
})

export function funcGetTargetItem(item) {
  return (dispatch) => {
    dispatch(getItem(item))
  }
}

export function funcResetItem() {
  return (dispatch) => {
    dispatch(resetItem())
  }
}
