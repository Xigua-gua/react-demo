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

/*
Provider组件是让所有的组件可以访问到store。不用手动去传。也不用手动去监听。

connect函数作用是从 Redux state 树中读取部分数据，
并通过 props 来把这些数据提供给要渲染的组件。也传递dispatch(action)函数到props。
 */
