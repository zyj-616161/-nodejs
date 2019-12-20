import React, { Component } from 'react'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './router/RouterView'
import routes from './router/routes'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <RouterView routes={routes}/>
      </BrowserRouter>
    )
  }
}
