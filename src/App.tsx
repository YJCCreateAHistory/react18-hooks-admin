import './App.css'
import {FC} from "react"
import { ConfigProvider } from "antd";
import Router from "./router/index"
import { HashRouter } from 'react-router-dom'
const App:FC = ()=> {
  return (
    <HashRouter>
      <ConfigProvider>
        <Router></Router>
      </ConfigProvider>
    </HashRouter>
  )
}

export default App
