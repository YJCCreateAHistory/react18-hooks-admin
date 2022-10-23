import {useLocation, Navigate} from "react-router-dom"
import {rootRouter} from "../index"
import { checkOutRoutes, setToken } from "../../utils"
// TODO:路由鉴权
const AuthRouter = (props :{children:JSX.Element})=>{
  const {pathname} = useLocation() // useLocation返回当前对象
  const route = checkOutRoutes(pathname, rootRouter) // 遍历取出路由
  if(!route.meta?.requiresAuth) return props.children // 路由鉴权 requiresAuth为false直接放行
  

}
