import { Button, Form, Input } from 'antd'
import { FiVideo } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import RegisterIcon from '../../assets/register_icon.svg'
import { useRegister } from '../../hooks'

const Register = () => {
  const { handleSubmit, active } = useRegister()
  return (
    <section className="bg-white h-screen flex justify-center items-center gap-12">
      <div className="w-[400px] h-[400px] shadow-xl rounded-3xl bg-white p-12 flex flex-col gap-6 justify-center lg:mx-0 mx-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FiVideo className={'text-3xl'} />
            <h1 className="text-3xl">Register</h1>
          </div>
          <p className="text-gray-400">Silahkan Daftarkan Akun Anda!</p>
        </div>

        <Form name="formregister" onFinish={handleSubmit}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              block
              className="bg-gray-900 hover:bg-gray-700 hover:text-gray"
              style={{
                color: 'white',
                border: 'none',
              }}
              disabled={active}
            >
              Daftar
            </Button>
            <p className="text-center mt-2">
              Sudah punya akun?, Yuk{' '}
              <Link to={'/login'} className="text-gray-400 hover:text-gray-800">
                Masuk
              </Link>
            </p>
          </Form.Item>
        </Form>
      </div>
      <img
        src={RegisterIcon}
        alt="Login Icon"
        className="md:w-52 lg:w-64 md:inline hidden"
      />
    </section>
  )
}
export default Register
