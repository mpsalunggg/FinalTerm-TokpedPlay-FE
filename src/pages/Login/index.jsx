import { Button, Form, Input } from 'antd'
import { FiVideo } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import LoginIcon from '../../assets/login_icon.svg'
import { useLogin } from '../../hooks'
const Login = () => {
  const { handleSubmit } = useLogin()
  return (
    <section className="bg-white h-screen flex justify-center items-center gap-12">
      <img
        src={LoginIcon}
        alt="Login Icon"
        className="md:w-80 lg:w-96 md:inline hidden"
      />
      <div className="w-[400px] h-[400px] shadow-2xl drop-shadow-2xl rounded-3xl bg-white p-12 flex flex-col gap-6 justify-center lg:mx-0 mx-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FiVideo className={'text-3xl'} />
            <h1 className="text-3xl">Login</h1>
          </div>
          <p className="text-gray-400">Silahkan login ke tokopedia play!</p>
        </div>

        <Form
          name="formlogin"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Harap masukkan email anda!',
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Harap masukkan password anda!',
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
            >
              Submit
            </Button>
            <p className="text-center mt-2">
              Belum punya akun?, Yuk{' '}
              <Link
                to={'/register'}
                className="text-gray-400 hover:text-gray-800"
              >
                Daftar
              </Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </section>
  )
}
export default Login
