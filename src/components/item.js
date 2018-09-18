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
    let itemId = this.props.match.params.itemId
    let targetItemUrl = url + '/' + itemId

    axios
      .get(targetItemUrl)
      .then((result) => {
        this.props.mapFuncGetTargetItem(result.data)
        this.props.mapFuncAddBreadCrumb(this.props.item.name, '/' + itemId)
      })
  }
  componentWillUnmount() {
    this.props.mapFuncResetBreadCrumb()
  }
  render () {
    let item = this.props.item
    let specs = this.props.item.specs
    let category = this.props.item.category
    return (
      <div>
        <p style={{fontWeight: "bold", margin: "0"}}>{item.name}</p>
        <Category category={{...category}}/>
        <hr />
        <p>{item.description}</p>
        <div dangerouslySetInnerHTML={{__html: item.content_html}}></div>
        <div style={{border: "solid 2px lightgray", marginTop: "40px"}}>
          <div style={{margin: "15px"}}>
            <p style={{fontWeight: "bold"}}>{item.name}</p>
            <div style={{backgroundColor: "orange", borderRadius: "10px"}}>
              <p style={{textAlign: "center", fontSize: "16px", padding: "15px 0"}}><a style={{textDecoration: "none", color: "white"}} href={item.amazon_url}>Amazonで詳細を見る</a></p>
            </div>
            <ItemSpec specs={{...specs}} />

          </div>
        </div>
      </div>
    )
  }
}
