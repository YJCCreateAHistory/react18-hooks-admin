import Sider from 'antd/lib/layout/Sider'
import { FC } from 'react'
import LayoutMenu from "./menu/index"
import LayoutHeader from "./header/index"
import "./styles/index.scss"
import { Outlet } from 'react-router-dom'
import { updateCollasped } from '../store/module/menu/action'
import { Layout } from 'antd'
import {connect} from "react-redux"
export const LayoutIndex: FC = (props:any) => {
  const {isCollasped, updateCollasped} = props
  const {Content} = Layout
  return (
    <section className="container">
      <Sider trigger={null} theme="dark" collapsed={props.isCollasped}>
        <LayoutMenu></LayoutMenu>
      </Sider>
      <Layout>
        <LayoutHeader></LayoutHeader>
        <Content>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </section>
  )
}
const mapStateToProps = (state:any)=>state.menu
const mapDispatchToProps = {updateCollasped}
export default connect(mapStateToProps, mapDispatchToProps)(LayoutIndex)
