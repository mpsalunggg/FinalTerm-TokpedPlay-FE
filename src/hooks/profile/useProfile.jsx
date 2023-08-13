/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { message } from 'antd'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GET_PROFILE, UPDATE_PROFILE } from '../../utils/endpoints'
import { getToken, getUser, saveUser } from '../../utils/sessionStorage'

const useProfile = () => {
  const { _id } = getUser()
  const token = getToken()
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(true)

  const handleSubmit = async (event) => {
    const dataNew = {}

    if (event.profile) {
      dataNew.profile = event.profile[0]?.originFileObj
    }
    message.loading({
      content: 'Loading...',
      className: 'mt-16',
    })
    try {
      const response = await axios.put(UPDATE_PROFILE + _id, dataNew, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      // saveUser(response.data.data)
      message.destroy()
      message.success({
        content: 'Berhasil Update Profile!, Mohon Tunggu 3 Detik!',
        duration: 3,
        className: 'mt-16',
        onClose() {
          window.location.reload()
        },
      })
    } catch (err) {
      message.destroy()
      message.error({
        content: err.response.data.message,
        duration: 2,
        className: 'mt-16',
      })
      setLoading(false)
    }
  }

  const getData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(GET_PROFILE + _id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      // console.log(response.data.data.profile)
      saveUser(response.data.data)
      setData(response.data.data)
      setLoading(false)
    } catch (err) {
      message.error({
        content: err.response.data.message,
        duration: 2,
        className: 'mt-20',
      })
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { loading, data, handleSubmit, active, setActive }
}
export default useProfile
