import request from "../request/index"

// TODO: 登录
interface ParamsAssembly {
  [key :string] : any
}
export const loginIn = (params:ParamsAssembly):Promise<ParamsAssembly>=>{
  return request({
      url:"/login",
      method:"POST",
      data:params
  })
}
