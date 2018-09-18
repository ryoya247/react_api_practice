import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import ItemList from './containers/itemList'
import Item from './containers/item'
import BreadCrumb from './containers/breadCrumb'

export default class App extends Component {
  render () {
    return (
      <div style={{width: "700px", margin: "0 auto"}}>
        <BreadCrumb />
        <Route exact path="/" render={() => (<Redirect to="/items"/>)} />
        <Route exact path="/items" component={ItemList}/>
        <Route exact path={`/items/:itemId`} component={Item}/>
      </div>
    )
  }
}
