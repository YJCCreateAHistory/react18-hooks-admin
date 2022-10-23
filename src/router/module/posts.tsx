import { RoutesAssembly } from "../type"
import { LayoutIndex } from "../../router/constant"
import PostCenter from "../../views/postscenter/index"
export const postsCenter:Array<RoutesAssembly> = [
  {
    element:<LayoutIndex></LayoutIndex>, // 跳转后进行主页展示的页面
    children:[
      {
        path:"/posts",
        element:<PostCenter></PostCenter>,
        meta:{
          requiresAuth:true,
          title:"posts",
          key:"posts"
        },
      }
    ]
  }
]
