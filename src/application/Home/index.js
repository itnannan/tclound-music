/*
 * @Author: 唐培楠
 * @Date: 2019-12-26 17:04:31
 * @LastEditors  : 唐培楠
 * @LastEditTime : 2019-12-27 09:28:24
 */
    
import React from 'react';
import { renderRoutes } from "react-router-config";
import {
  Top,
  Tab,
  TabItem,
} from './style';
import { NavLink } from 'react-router-dom';//利用NavLink组件进行路由跳转

function Home(props){
  const { route } = props;

  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">Web App</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected"><TabItem><span>推荐</span></TabItem></NavLink>
        <NavLink to="/singers" activeClassName="selected"><TabItem><span>歌手</span></TabItem></NavLink>
        <NavLink to="/rank" activeClassName="selected"><TabItem><span>排行榜</span></TabItem></NavLink>
      </Tab>
      { renderRoutes(route.routes) }
    </div>
  );
}
 
export default React.memo(Home);