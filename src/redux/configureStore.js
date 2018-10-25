/**
 * react-router-redux及history配置
 **/

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import * as reducers from './reducers'

/*
store
维持应用的 state；
提供 getState() 方法获取 state；
提供 dispatch(action) 触发reducers方法更新 state；
通过subscribe(listener) 注册监听器;
通过 subscribe(listener) 返回的函数注销监听器。
*/

export default function configureStore(history, initialState) {
  // 调用store.dispatch(action)提交action。
  // redux store调用传入的reducer函数。把当前的state和action传进去。
  // 根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。
  // Redux store 保存了根 reducer 返回的完整 state 树。
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  })
  // const loggerMiddleware = createLogger()
  // Redux store 保存了根 reducer 返回的完整 state 树。
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        // loggerMiddleware,
        routerMiddleware(history),
      ),
    ),
  )
  return store
}
