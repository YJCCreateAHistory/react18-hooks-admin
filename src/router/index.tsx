import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Login from "./../views/login/index";
import { RoutesAssembly } from "./type";
import { authRoutesAssembly } from "./module/haveAuth";
import { homeRouter } from "./module/home";
import {postsCenter} from "./module/posts"
// TODO:导入路由
const routers:Array<{[key:string]:any}> = [...authRoutesAssembly, ...homeRouter, ...postsCenter]

export const rootRouter:RoutesAssembly[] = [
  {
    path:"/",
    element:<Navigate to="/login"></Navigate>
  },
  {
    path:"/login",
    element:<Login></Login>,
    meta:{
      requiresAuth:false, // 不需要权限
      title:"登录",
      key:"login"
    }
  },
  ...routers
]
const Router = ()=>{
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
