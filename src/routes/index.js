/*
 * @Author: 唐培楠
 * @Date: 2019-12-25 17:43:17
 * @LastEditors  : 唐培楠
 * @LastEditTime : 2019-12-27 09:35:10
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';

export default [
    {
        path: "/",
        component: Home,
        routes: [
            {
                path: "/",
                exact:  true,
                render: ()=>(
                    <Redirect to={"/recommend"}/>
                )
            },
            {
                path: "/recommend",
                component: Recommend
            },
            {
                path: "/singers",
                component: Singers
            },
            {
                path: "/rank",
                component: Rank
            }
        ]
    }
]