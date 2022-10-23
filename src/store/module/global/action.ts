import * as types from "../../mutation"

export const changeThmee = (isChangeed:boolean)=>({
  type:types.CHANGE_THEME,
  isChangeed
})
