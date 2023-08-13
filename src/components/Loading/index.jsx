import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const Loading = () => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 60,
        color: 'white',
      }}
      spin
    />
  )
  return (
    <section className="h-screen w-full bg-gray-800 flex justify-center items-center z-50">
      <Spin indicator={antIcon} />
    </section>
  )
}
export default Loading
