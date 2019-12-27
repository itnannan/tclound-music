/*
 * @Author: 唐培楠
 * @Date: 2019-12-25 17:04:49
 * @LastEditors  : 唐培楠
 * @LastEditTime : 2019-12-27 09:25:54
 */
import React from 'react';
import { Provider } from 'react-redux'
import { GlobalStyle } from  './style';
import { IconStyle } from './assets/iconfont/iconfont';
import routes from './routes/index.js';
import store from './store/index'
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;

