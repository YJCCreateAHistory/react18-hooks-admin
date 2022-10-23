import * as types from "../../mutation"

export const updateCollasped = (isCollasped:boolean)=>({
  type:types.UPDATE_COLLAPSE,
  isCollasped
})
export const setMenuList = (menuList: Menu.MenuOptions[]) => ({
	type: types.SET_MENU_LIST,
	menuList
});
