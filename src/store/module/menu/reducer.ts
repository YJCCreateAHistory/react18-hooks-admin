import { AnyAction } from "redux";
import * as types from "../../mutation"
// import produce from "immer" // 持久化专用，mbo下的库
import {MenuState} from "../../types/index"
const menuState:MenuState = {
  isCollasped:false,
  menuList:[]
}

// reducer by state.menu
const menu = (state:MenuState = menuState, action:AnyAction) =>{
  // 不可变数据结构，第二个参数用于修改状态并但反应到nextState
    switch(action.type){
      case types.UPDATE_COLLAPSE:
        state.isCollasped = action.isCollasped
        break
      case types.SET_MENU_LIST:
        state.menuList = action.menuList
        break
      default:
        return {
          isCollasped: action.isCollasped
        }
    }
}
export default menu
