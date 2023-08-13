/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Card, Modal, Tag } from 'antd'

const ModalDetailProduct = ({ modalOpen, setModalOpen, product }) => {
  return (
    <Modal
      title={product?.title}
      centered
      open={modalOpen}
      onCancel={() => setModalOpen(false)}
      footer={null}
    >
      <Card
        cover={
          <img alt={product?.title} src={product?.url_img} className=" w-40" />
        }
      >
        <p>{product?.desc_product}</p>
        <div className="mt-2">
          <Tag color={product?.price < 25000 ? 'green' : 'red'}>
            Rp.{product?.price}
          </Tag>
          <Button
            icon={<ShoppingCartOutlined />}
            type="default"
            href={product?.url_product}
            target="_blank"
            className="bg-gray-900 hover:bg-gray-700 hover:text-gray"
            style={{
              color: 'white',
              border: 'none',
            }}
          >
            Lihat Product
          </Button>
        </div>
      </Card>
    </Modal>
  )
}
export default ModalDetailProduct
