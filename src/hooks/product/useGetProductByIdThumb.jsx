/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { message } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCT_ID_THUMB } from '../../utils/endpoints'

const useGetProductByIdThumb = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(PRODUCT_ID_THUMB + id)
        if (response.data?.data) {
          setProduct(response.data?.data)
        }
      } catch (err) {
        message.warning({
          content: err.response.data.message,
          duration: 1,
          className: 'mt-16',
        })
      }
    }

    getData()
  }, [])
  return {
    product,
  }
}
export default useGetProductByIdThumb
