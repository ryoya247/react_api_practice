import React, { Component } from 'react'

export default class Category extends Component {
  render () {
    let category = this.props.category
    return (
      <div>
        <p style={{color: "orange", margin: "5px 0", fontSize: "14px"}}>{category.name}</p>
      </div>
    )
  }
}
