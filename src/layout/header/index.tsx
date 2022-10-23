import { Descriptions, PageHeader, Statistic, Tabs } from 'antd';
import { Layout } from "antd";
import LayoutBtn from "../collapsed/index"
import { FC } from 'react';
import "../styles/index.scss"
import Avatar from "./component/avatar"
import Theme from "./component/theme"
import Language from "./component/language"
const { Header } = Layout
const LayoutHeader: FC = () => {
  return (
    <Header>
      <div className="header-lf">
        {/* <LayoutBtn></LayoutBtn> */}
      </div>
      <div className="header-ri">
        <Language></Language>
        <Theme></Theme>
        <Avatar></Avatar>
      </div>
    </Header>
  )
}

export default LayoutHeader;
