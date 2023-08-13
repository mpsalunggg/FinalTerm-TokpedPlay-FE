/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Button, Card, Col, Row, Input, List, Form } from 'antd'
import moment from 'moment'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CardProduct,
  Loading,
  ModalDetailProduct,
  Navbar,
  Youtube,
} from '../../components'
import {
  useCommentByIdThumb,
  useGetProductByIdThumb,
  useGetThumbById,
} from '../../hooks'
import useCreateComment from '../../hooks/comment/useCreateComment'

const Product = () => {

  const { data, loading } = useGetThumbById()
  const { product } = useGetProductByIdThumb()
  const { comment } = useCommentByIdThumb()
  const {handleSubmit} = useCreateComment()

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleProductCardClick = (product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <section>
      <Navbar />
      <div className="lg:px-28 px-6 py-8 flex gap-4 justify-between items-center">
        <h1 className="lg:text-2xl text-xl font-semibold">{data?.title}</h1>
        <Link to="/">
          <Button
            htmlType="submit"
            className="bg-gray-900 hover:bg-gray-700 hover:text-gray"
            style={{
              color: 'white',
              border: 'none',
            }}
          >
            Kembali
          </Button>
        </Link>
      </div>
      <div className="lg:flex md:flex flex lg:flex-row flex-col lg:px-16 px-4 gap-4 items-center">
        <div className="w-full lg:w-3/4">
          <Youtube url_video={data?.url_video} />
        </div>
        <div className="lg:w-1/2 w-full">
          <Card className="shadow-md">
            <div className="flex flex-col">
              <Form onFinish={handleSubmit}>
                <Form.Item name="comment">
                  <Input.TextArea
                    rows={4}
                    placeholder="Tulis komentar Anda..."
                    className="resize-none"
                  />
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
                    Kirim
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <List
              dataSource={comment.reverse()}
              renderItem={(item) => (
                <>
                  <h1 className="mt-2 font-bold">{item?.username}</h1>
                  <List.Item className="w-auto">
                    <h1>{item.comment}</h1>
                    <p className="font-semibold">
                      {moment(item?.time_stamp).format('YYYY-MM-DD')}
                    </p>
                  </List.Item>
                </>
              )}
              className="overflow-y-auto max-h-40"
            />
          </Card>
        </div>
      </div>

      <div
        className={`overflow-scroll my-4 px-12 w-full flex ${
          product.length ? '' : 'justify-center'
        }`}
      >
        <div className="flex space-x-4">
          {product.length === 0 ? (
            <h1 className="font-semibold my-12">Product Belum Tersedia!</h1>
          ) : (
            product.map((products, index) => (
              <CardProduct
                products={products}
                handleProductCardClick={handleProductCardClick}
                key={products._id}
                index={index}
              />
            ))
          )}
          {/* Tambahkan lebih banyak Card sesuai kebutuhan */}
        </div>
      </div>
      <ModalDetailProduct
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        product={selectedProduct}
      />
    </section>
  )
}

export default Product
