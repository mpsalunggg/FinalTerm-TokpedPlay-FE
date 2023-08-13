/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { UploadOutlined } from '@ant-design/icons'
import {
  Card,
  Col,
  Form,
  Image,
  message,
  Row,
  Button,
  Input,
} from 'antd'
import Dragger from 'antd/es/upload/Dragger'
import { Link } from 'react-router-dom'
import { Loading, Navbar, ProfileImage } from '../../components'
import { useProfile } from '../../hooks'
import { getUser } from '../../utils/sessionStorage'

const Profile = () => {
  const { data, loading, handleSubmit, active, setActive } = useProfile()
  
  if (loading) {
    return <Loading />
  }
  return (
    <section className="font-poppins">
      <Navbar />
      <div>
        <div className="lg:px-28 px-6 py-8 flex gap-4 justify-between items-center">
          <h1 className="lg:text-2xl text-xl font-semibold">Profile</h1>
          <div className="flex gap-2">
            Helloooo <h1 className="font-semibold">{getUser().username}</h1>
          </div>
        </div>
      </div>
      <Card className="mx-4 lg:mx-14">
        <Row gutter={[16, 16]}>
          <Col
            xs={24}
            sm={24}
            md={4}
            className="flex items-center justify-center"
          >
            <ProfileImage />
          </Col>
          <Col xs={24} sm={24} md={20}>
            <Form layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                name="profile"
                valuePropName="fileList"
                getValueFromEvent={(event) => {
                  return event?.fileList
                }}
              >
                <Dragger
                  maxCount={1}
                  beforeUpload={(file) => {
                    console.log('sad', file)
                    return new Promise((resolve, reject) => {
                      if (file.size > 3000000) {
                        reject('File Terlalu Besar!')
                        message.error({
                          content: 'File Terlalu Besar!',
                          className: 'mt-16',
                        })
                      } else if (
                        file.type !== 'image/png' &&
                        file.type !== 'image/jpeg'
                      ) {
                        reject('File Harus JPG atau PNG!')
                        message.error({
                          content: 'File Harus JPG atau PNG!',
                          className: 'mt-16',
                        })
                        setActive(true)
                    } else {
                        resolve('Berhasil!')
                        setActive(false)
                      }
                    })
                  }}
                  customRequest={(info) => {
                    info.onSuccess('done', info.file)
                  }}
                  // showUploadList={true}
                  //   listType="picture"
                >
                  <div className="flex items-center justify-center">
                    <UploadOutlined />
                    <p>Pilih Foto</p>
                  </div>
                </Dragger>
              </Form.Item>
              <Form.Item className="flex md:justify-end justify-center">
                <Button
                  htmlType="submit"
                  className="bg-gray-900 hover:bg-gray-700 hover:text-gray"
                  style={{
                    color: 'white',
                    border: 'none',
                    backgroundColor: active ? 'gray' : ''
                  }}
                  disabled={active}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
    </section>
  )
}
export default Profile
