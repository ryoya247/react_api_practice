import React, { Component } from 'react'
import Category from './category'
import ItemSpec from './itemSpec'
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
    let item = this.props.item
    console.log(item)
    let specs = this.props.item.specs
    let category = this.props.item.category
    return (
      <div>
        <p style={{fontWeight: "bold", margin: "0"}}>{item.name}</p>
        <Category category={{...category}}/>
        <hr />
        <p>{item.description}</p>
        {item.content_html}
        <ItemSpec specs={{...specs}} />
        <div>
          <a href={item.amazon_url}>link</a>
        </div>
      </div>
    )
  }
}
