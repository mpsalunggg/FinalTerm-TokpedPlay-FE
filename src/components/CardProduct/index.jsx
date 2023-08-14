/* eslint-disable react/prop-types */
import { Badge, Card } from 'antd'
import { motion } from 'framer-motion'

const CardProduct = ({ products, handleProductCardClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Badge.Ribbon
        text={`Rp.${products.price}`}
        color={products.price < 500000 ? 'green' : 'red'}
      >
        <Card
          className="lg:w-64 w-56 h-56 bg-center bg-cover relative overflow-hidden cursor-pointer"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('${products.url_img}')`,
          }}
          onClick={() => handleProductCardClick(products)}
        >
          <div className="absolute inset-0 p-4 flex flex-col justify-end">
            <h3 className="lg:text-xl text-lg font-semibold mb-2 text-white">
              {products.title.length > 20 ? products.title.slice(0, 20)+'...' : products.title}
            </h3>
          </div>
        </Card>
      </Badge.Ribbon>
    </motion.div>
  )
}
export default CardProduct
