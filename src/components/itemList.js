import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const url = 'https://staging-api.openbox.jp/items'

export default class ItemList extends Component {
  componentDidMount() {
    axios
      .get(url)
      .then((result) => {
        this.props.mapFuncGetItemList(result.data.items)
      })
  }
  render () {
    let itemList = this.props.itemList
    console.log('itemList', itemList)
    const itemListForRender = itemList.map(item => {
      return (
        <div key={item.id} style={{border: "solid 2px lightgray", margin: "10px 0"}}>
          <p>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </p>
          <ul style={{listStyleType: "none"}}>
            <li>{item.description}</li>
            <li>{item.price}円</li>
          </ul>
        </div>
      )
    })
    return (
      <div>
        {itemListForRender}
      </div>
    )
  }
}
