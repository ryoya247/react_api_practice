import { connect } from 'react-redux'
import Item from '../components/item'
import * as itemActions from '../actions/item'
import * as breadCrumbActions from '../actions/breadCrumb'


const mapStateToProps = (state) => {
  return {
    item: state.itemReducer.item
  }
}

const mapDispatchToProps = (dispatch) => ({
  mapFuncGetTargetItem(item) {
    dispatch(itemActions.funcGetTargetItem(item))
  },
  mapFuncResetItem() {
    dispatch(itemActions.funcResetItem())
  },
  mapFuncAddBreadCrumb(itemName, itemId) {
    dispatch(breadCrumbActions.funcAddBreadCrumb(itemName, itemId))
  },
  mapFuncResetBreadCrumb() {
    dispatch(breadCrumbActions.funcResetBreadCrumb())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)
