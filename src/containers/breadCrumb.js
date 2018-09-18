import { connect } from 'react-redux'
import BreadCrumb from '../components/breadCrumb'
import * as actions from '../actions/breadCrumb'

const mapStateToProps = (state) => {
  return {
    breadCrumbs: state.breadCrumbReducer.breadCrumbs
  }
}

const mapDispatchToProps = (dispatch) => ({
  mapFuncAddBreadCrumb(itemName, itemId) {
    dispatch(actions.funcAddBreadCrumb(itemName, itemId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BreadCrumb)
