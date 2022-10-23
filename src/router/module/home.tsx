import { RoutesAssembly } from "../type"
import { LayoutIndex } from "../../router/constant"
import Home from "../../views/home"
export const homeRouter:Array<RoutesAssembly> = [
  {
    element:<LayoutIndex></LayoutIndex>, // 跳转后进行主页展示的页面
    children:[
      {
        path:"/home",
        element:<Home></Home>,
        meta:{
          requiresAuth:true,
          title:"Home",
          key:"Home"
        },
      }
    ]
  }
]


