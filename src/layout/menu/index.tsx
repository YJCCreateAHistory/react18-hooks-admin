import { HomeOutlined, SlackOutlined, ReadOutlined } from "@ant-design/icons";
import { MenuProps, MenuTheme } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import Logo from "./logo/index"
import "./../styles/index.scss"
import {connect} from "react-redux"
import { updateCollasped } from "../../store/module/menu/action";
import {checkOutRoutes} from "../../utils/index"
import {rootRouter} from "../../router/index"
import { useNavigate } from "react-router-dom";
export const SuperAdminMenuList = {
  HOME:"主页",
  GOODS:"商品中心",
  POSTS:"文章中心",
  USERS:"用户中心",
  COLLECTION:"收藏中心",
  DATA:"站点统计",
  KEYS:"SuperAdminUser"
}

export const CommonAdminMenuList = {
  HOME:"主页",
  GOODS:"我的商品",
  POSTS:"文章管理",
  USER_COLLECTION_GOODS:"收藏商品",
  USER_COLLECTION_POSTS:"收藏文章",
  USER_FOLLOWED_USERS:"我的关注",
  ADMIN_CENTER:"用户中心",
  KEYS:"CommonUser"
}
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};
let flag: boolean = true
const chooseWhoMenuList = SuperAdminMenuList
const admin: MenuItem[] = [
  getItem(chooseWhoMenuList.HOME, 'ONE', <HomeOutlined />, [
    getItem('首页', '/home', <HomeOutlined />),
  ]),

  getItem(chooseWhoMenuList.GOODS, 'TWO', <SlackOutlined />, [
    getItem('商品管理', '/goods'),
  ]),
  getItem(chooseWhoMenuList.POSTS, 'THREE', <ReadOutlined />, [
    getItem('文章管理', '/posts'),
  ]),
  getItem(chooseWhoMenuList.COLLECTION, 'FIVE', <ReadOutlined />, [
    getItem('收藏商品', '/collectiongoods'),
    getItem('收藏文章', '/collectionposts'),
  ]),
  getItem(chooseWhoMenuList.USERS, 'SIX', <ReadOutlined />, [
    getItem('用户中心', '/usercenter'),
  ]),
  getItem(chooseWhoMenuList.DATA, 'SEVEN', <ReadOutlined />, [
    getItem('站点中心', '/site'),
  ]),
];
const chooseWhoMenuList1 = CommonAdminMenuList

const common: MenuItem[] = [

  getItem(chooseWhoMenuList1.HOME, 'ONE', <HomeOutlined />, [
    getItem('首页', '/home', <HomeOutlined />),
  ]),
  getItem(chooseWhoMenuList1.GOODS, 'TWO', <SlackOutlined />, [
    getItem('商品管理', '/goods'),
  ]),
  getItem(chooseWhoMenuList1.POSTS, 'THREE', <ReadOutlined />, [
    getItem('文章管理', '/posts'),
  ]),
  getItem(chooseWhoMenuList1.USER_COLLECTION_GOODS, 'FIVE', <ReadOutlined />, [
    getItem('收藏商品', '/collectiongoods'),
  ]),
  getItem(chooseWhoMenuList1.USER_COLLECTION_POSTS, 'FIVE', <ReadOutlined />, [
    getItem('收藏文章', '/collectionposts'),
  ]),
  getItem(chooseWhoMenuList1.ADMIN_CENTER, 'FIVE', <ReadOutlined />, [
    getItem('个人中心', '/usercenter'),
  ]),
];

const LayoutMenu: React.FC = (props:any) => {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');
  const navigate = useNavigate()
  const takeCoverPage: MenuProps['onClick'] = e => {
    const route = checkOutRoutes(e.key, rootRouter) // 做外链判断
    navigate(e.key)
  };
  return (
    <div className="menu">
      {/* <Spin spinning={false} tip="Loading..."> */}
        <Logo></Logo>
        <Menu
          theme={theme}
          onClick={takeCoverPage}
          mode='inline'
          triggerSubMenuAction="click"
          defaultOpenKeys={['sub1']}
          selectedKeys={[current]}
          items={flag ? admin : common}
        />
      {/* </Spin> */}
    </div>
  );
};
const mapStateToProps = (state: any) => state.menu
const mapDispatchToProps = {updateCollasped}
export default connect(mapStateToProps, mapDispatchToProps)(LayoutMenu)
