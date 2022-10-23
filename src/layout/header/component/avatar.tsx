import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';
import { useNavigate } from "react-router-dom"
import React from 'react';
import { removeToken } from '../../../utils';
const AvatarMenu: React.FC = () => {

  const navigate = useNavigate()
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <span className="dropdown-item">首页</span>,
          onClick: () => navigate('/home')
        },
        {
          key: "2",
          label: <span className="dropdown-item">个人信息</span>,
        },
        {
          key: "3",
          label: <span className="dropdown-item">修改密码</span>,
        },
        {
          type: "divider"
        },
        {
          key: "4",
          label: <span className="dropdown-item">退出登录</span>,
          onClick:()=>{
            removeToken()
            return navigate('/login')
          }
        }
      ]}></Menu>
  )
  return (
    <Dropdown overlay={menu} placement="bottom" arrow trigger={["click"]}>
      <Avatar
        size="large" src={'../../../assets/images/logo.svg'}
      />
    </Dropdown>
  )
};

export default AvatarMenu;
