import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const url = 'https://staging-api.openbox.jp/items'

export default class Items extends Component {
  componentDidMount() {
    axios
      .get(url)
      .then((result) => {
        this.props.mapFuncGetItems(result.data.items)
      })
  }
  render () {
    let items = this.props.items
    const itemsList = items.map(item => {
      return (
        <li key={item.id}>
          <Link to={'/items/' + item.id}>{item.name}【{item.price}円】</Link>
        </li>
      )
    })
    return (
      <div>
        <ul>
          {itemsList}
        </ul>
      </div>
    )
  }
}
