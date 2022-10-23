// /**
//  * @business {} axios请求配置
//  * @author {JC}
//  * @data {2022-08-22}
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import {message} from "antd"

const request:AxiosInstance = axios.create({
  baseURL:'http://localhost:7001',
  timeout:30000,
})

request.interceptors.request.use((config:AxiosRequestConfig)=>{
  // 是否设置token
  const istoken = (config.headers || {}).istoken === false
  if(!istoken && window.localStorage.getItem("auth_token")) { // 带上token
    return {
      headers:{
        "x-access-token":window.localStorage.getItem("auth_token"),
      }
    }
  }
  // 可以配置一下请求时的loading
  return config
}, err=>{
  console.log("Error"+err)
  return Promise.reject(err)
})
request.interceptors.response.use((config:AxiosResponse):any=>{
  if (config.headers) {
    sessionStorage.setItem("token", (config.headers.authorization) as string)
  } else {
    if (config.data && config.data.token) {
      sessionStorage.setItem("token", config.data.token)
    }
  }
  if (config.status === 200) {
    return config
  }
  // const code = Number(config.data.code) || 200
  // // 设置token或者cookie过期时的操作
  // if(code===401) { // 设置未授权的状态码
  //   // 可以使用ElMessage
  //   // 在授权未通过后，可以直接跳转到login页
  // }else if(code===500) {
  //   // 服务器错误
  // }
}, err=>{
  console.log("error"+err)
  // 返回错误信息，先对错误信息进行处理
  // 可以使用ElMessage报错
  return Promise.reject(err)
})
export default request
