/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
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
        console.log(err.response.data.message)
      }
    }

    getData()
  }, [])
  return {
    product,
  }
}
export default useGetProductByIdThumb
