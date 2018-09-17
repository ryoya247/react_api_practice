import { connect } from 'react-redux'
import Items from '../components/items'
import * as actions from '../actions/items'

const mapStateToProps = (state) => {
  return {
    items: state.itemsReducer.items
  }
}

const mapDispatchToProps = (dispatch) => ({
  mapFuncGetItems(items) {
    dispatch(actions.funcGetItem(items))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Items)
