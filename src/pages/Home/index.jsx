/* eslint-disable react/jsx-key */
import { Col, Form, Input, Row } from 'antd'
import moment from 'moment/moment'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { CardThumbnail, Loading, Navbar } from '../../components'
import { useGetAllThumb } from '../../hooks'

const Home = () => {
  const { data, handleSubmit, loading } = useGetAllThumb()
  if (loading) {
    return <Loading />
  }

  return (
    <section>
      <Navbar />
      <div className="lg:px-28 px-6 py-2 flex gap-4 justify-between items-center">
        <h1 className="lg:text-2xl text-xl font-semibold">Enjoy The Product</h1>
        <Form onFinish={handleSubmit} layout="vertical" className="mt-5">
          <Form.Item name="title">
            <Input
              prefix={<FiSearch />}
              placeholder="Search Live"
              className="active:border-none"
            />
          </Form.Item>
        </Form>
      </div>

      <Row gutter={[16, 16]} className="lg:px-12 md:px-6 sm:px-6 px-4 my-2">
        {data.map((item, index) => (
          <Col xs={12} sm={12} md={8} lg={4} key={item?._id}>
            <Link to={`/product/${item._id}`}>
              <CardThumbnail
                title={item?.title}
                date={item?.created_at && moment(item?.created_at).format('YYYY-MM-DD')}
                url_img={item?.url_img}
                index={index}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  )
}
export default Home
