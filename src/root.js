import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import configureStore from './redux/configureStore'
import './config.less'

import Main from './containers/main.js'

const history = createHistory()
const store = configureStore(history)

export default class App extends Component {
  render() {

      return (
        <Provider store={store}>
          <BrowserRouter>
              <Switch>
                <Route path="/" component={Main}/>
              </Switch>
          </BrowserRouter>
        </Provider>
      )
  }
}
