import React, { Component } from 'react'
import axios from 'axios'


const url = 'https://staging-api.openbox.jp/items'

export default class Item extends Component {
  componentWillMount() {
    this.props.mapFuncResetItem()
  }
  componentDidMount() {
    let targetItemUrl = url + '/' + this.props.match.params.itemId
    axios
      .get(targetItemUrl)
      .then((result) => {
        this.props.mapFuncGetTargetItem(result.data)
      })
  }
  render () {
    return (
      <div>
        <p>{this.props.item.name}</p>
      </div>
    )
  }
}
