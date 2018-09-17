import React, { Component } from 'react'

export default class ItemSpec extends Component {
  render () {
    let specs = []
    for (let i = 0; i < Object.keys(this.props.specs).length; i++) {
      specs.push(this.props.specs[i])
    }
    const specsList = specs.map((spec, i) => {
      return (
        <li key={i} style={{fontSize: "14px"}}>{spec.name}：{spec.value}</li>
      )
    })
    return (
      <div>
        <ul style={{listStyleType: "none"}}>
          {specsList}
        </ul>
      </div>
    )
  }
}
