/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { THUMB, SEARCH_THUMB } from '../../utils/endpoints'
import { message } from 'antd'

const useGetAllThumb = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    setLoading(true)
    try {
      const response = await axios.get(SEARCH_THUMB + event.title)
      setData(response.data.data)
      setLoading(false)
    } catch (err) {
      console.log(err)
      message.error({
        content: err.response.data.message,
        duration: 1,
        className: 'mt-20',
      })
      setLoading(false)
    }
  }

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(THUMB)
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
    handleSubmit,
  }
}
export default useGetAllThumb
