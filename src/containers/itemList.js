import { connect } from 'react-redux'
import ItemList from '../components/itemList'
import * as actions from '../actions/itemList'

const mapStateToProps = (state) => {
  return {
    itemList: state.itemListReducer.itemList
  }
}

const mapDispatchToProps = (dispatch) => ({
  mapFuncGetItemList(itemList) {
    dispatch(actions.funcGetItemList(itemList))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
