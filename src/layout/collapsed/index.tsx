import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button } from 'antd';
import { connect } from "react-redux"
import { updateCollasped } from "../../store/module/menu/action";
const CollspaedTab = (props: any) => {
  const {isCollasped, updateCollasped} = props
  return (
    <div
      className="collaspedTab"
      onClick={() => {

        updateCollasped(props.isCollasped)
      }}
    >
      <Button type="primary">
        {props.isCollasped ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </div>
  )
}
const mapStateToProps = (state: any) => state.menu
const mapDispatchToProps = { updateCollasped }
export default connect(mapStateToProps, mapDispatchToProps)(CollspaedTab)
