/*
 * @Author: 唐培楠
 * @Date: 2019-12-26 19:25:47
 * @LastEditors: 唐培楠
 * @LastEditTime: 2019-12-26 19:25:55
 */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;