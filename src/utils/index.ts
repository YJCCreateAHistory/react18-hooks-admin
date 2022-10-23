import { RoutesAssembly } from "../router/type";

/*
*@description 递归查询路由
*@params {String} path 路由地址
*@params {Array} routes 路由列表
*/
export const checkOutRoutes = (path: string, routes:RoutesAssembly[] = []):RoutesAssembly =>{
  let routeAssembly:RoutesAssembly = {} // 接收路由
  for(let item of routes) {
    if(item.path === path) return item
    if(item.children) {
      const result = checkOutRoutes(path, item.children) // 递归遍历
      if(Object.keys(result).length) routeAssembly = result
    }
  }

  return routeAssembly
}

/*
*@description token
*@params {String} token token值
*/
export const setToken = (token:string):void=>{
  window.localStorage.setItem("auth_token", token)
}
export const removeToken = ():void=>{
  window.localStorage.removeItem("auth_token")

}

