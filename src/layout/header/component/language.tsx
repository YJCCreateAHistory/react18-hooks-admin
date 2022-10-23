import {FC} from "react"
import {InteractionOutlined} from "@ant-design/icons"
import { Dropdown, Menu } from "antd"
import { useNavigate } from "react-router-dom"
const ChangeLanguage:FC = ()=>{
  const navigate = useNavigate()
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <span className="dropdown-item">CN</span>,
          onClick: () => navigate('/home')
        },
        {
          key: "2",
          label: <span className="dropdown-item">EN</span>,
        },
      ]}></Menu>
  )
  return (
    <div className="language">
      <Dropdown overlay={menu} placement="bottom" arrow trigger={["click"]}>
      <InteractionOutlined style={{fontSize:'24px', marginRight:'20px'}}/>
      </Dropdown>
    </div>
  )
}

export default ChangeLanguage
