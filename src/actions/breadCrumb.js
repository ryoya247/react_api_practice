export const addBreadCrumb = (itemName, itemId) => ({
  type: 'ADD_BREAD_CRUMB',
  payload: {
    itemName,
    itemId
  }
})

export const resetBreadCrumb = () => ({
  type: 'RESET_BREAD_CRUMB'
})

export function funcAddBreadCrumb(itemName, itemId) {
  return (dispatch) => {
    dispatch(addBreadCrumb(itemName, itemId))
  }
}

export function funcResetBreadCrumb() {
  return (dispatch) => {
    dispatch(resetBreadCrumb())
  }
}
