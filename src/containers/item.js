import { connect } from 'react-redux'
import Item from '../components/item'
import * as actions from '../actions/item'

const mapStateToProps = (state) => {
  return {
    item: state.itemReducer.item
  }
}

const mapDispatchToProps = (dispatch) => ({
  mapFuncGetTargetItem(item) {
    dispatch(actions.funcGetTargetItem(item))
  },
  mapFuncResetItem() {
    dispatch(actions.funcResetItem())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)
