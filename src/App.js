import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Items from './containers/items'
import Item from './containers/item'

export default class App extends Component {
  render () {
    return (
      <div style={{width: "700px", margin: "0 auto"}}>
        <p><Link to="/items">商品一覧</Link></p>
        <Route exact path="/items" component={Items}/>
        <Route exact path="/items/:itemId" component={Item}/>
      </div>
    )
  }
}
