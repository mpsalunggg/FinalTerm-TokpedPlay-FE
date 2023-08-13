/* eslint-disable react/prop-types */
import { Card } from 'antd'
import { motion } from 'framer-motion'

const CardThumbnail = ({ title, url_img, date, index }) => {
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
      <Card
        className="w-auto lg:h-[400px] md:h-[500px] sm:h-[600px] h-72 bg-center bg-cover relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('${url_img}')`,
        }}
      >
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-sm text-white">{date}</p>
        </div>
      </Card>
    </motion.div>
  )
}

export default CardThumbnail
