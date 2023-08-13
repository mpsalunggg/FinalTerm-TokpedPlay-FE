/* eslint-disable react-hooks/exhaustive-deps */
import { message } from 'antd'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { THUMB } from '../../utils/endpoints'

const useGetThumbById = () => {
  const { id } = useParams()
  const [data, setData] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(THUMB + id)
        setData(response.data.data)
        setLoading(false)
      } catch (err) {
        // console.log(err)
        message.error({
          content: err.response.data.message,
          duration: 1,
          className: 'mt-16',
        })
        setLoading(false)
      }
    }
    getData()
  }, [])
  return {
    data,
    loading,
  }
}
export default useGetThumbById
