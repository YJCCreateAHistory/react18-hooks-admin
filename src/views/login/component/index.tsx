import { FC, useState } from 'react'
import { Form, Input, Button, message } from "antd"
import "../index.scss"
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import tools from "../../../utils/crypto"
import { loginIn } from "../../../api/index"
import { setToken } from "../../../utils/index"
/**TODO:类型接口**/
interface FormTypes {
  cellphone: string
  password: string
}
const FormGroup: FC = () => {
  const navigate = useNavigate() // 跳转页
  const [loading, setLoading] = useState<boolean>(false)
  // TODO:check-To-login
  const [form] = Form.useForm()
  const onFinish = async (formValue: FormTypes) => {// TODO:登录表单数据验证
    try {
      setLoading(true) // 转圈圈
      formValue.password = tools.aes.en(formValue.password)
      const params = {
        cellphone: formValue.cellphone,
        password: formValue.password,
      }
      const reg: RegExp =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (reg.test(formValue.cellphone)) {
        const { data: { data: data } } = await loginIn(params)
        if (data.status === 200) {
          message.success("登录成功！")
          setToken(formValue.cellphone)
          navigate("/home") // 跳转
        } else {
          message.error("登录失败!")
        }
      }
    } finally {
      setLoading(false) // 重置
    }
  }
  return (
    <Form
      name="basic"
      labelCol={{ span: 5 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      size="large"
      autoComplete="off"
    >
      <Form.Item name="cellphone" rules={[{ required: true, message: "请输入用户名" }]} >
        <Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
        <Input.Password autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item className="login-btn">
        <Button
          onClick={() => form.resetFields()}
          icon={<CloseCircleOutlined />}
        >
          {"重置"}
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          icon={<UserOutlined />}
          loading={loading}>
          {"登录"}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormGroup
