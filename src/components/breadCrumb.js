import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class BreadCrumb extends Component {
  render () {
    let breadCrumbs = this.props.breadCrumbs
    // for (let i = 0; i < Object.keys(this.props.breadCrumbs).length; i++) {
    //   breadCrumbs.push(this.props.breadCrumbs[i])
    // }

    let listBreadCrumb = breadCrumbs.map(function(breadCrumb, i) {
      return (
        <li key={i}>
          <Link to={`/items${breadCrumb.itemId}`}>{breadCrumb.itemName}</Link>
        </li>
      )
    })

    return (
      <div className='breadCrumb'>
        <ul>
          {listBreadCrumb}
        </ul>
      </div>
    )
  }
}
