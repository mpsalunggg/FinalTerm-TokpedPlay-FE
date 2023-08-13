/* eslint-disable no-unused-vars */
import { useState } from 'react'
import axios from 'axios'
import { REGISTER } from '../../utils/endpoints'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

const useRegister = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState(false)
  const handleSubmit = async (event) => {
    const data = event
    message.loading('Sedang Mendaftarkan Akun!...')
    setActive(true)
    try {
      const response = await axios.post(REGISTER, data)
      message.destroy()
      message.success({
        content: 'Akun berhasil terdaftar!',
        duration: 1.5,
        onClose() {
          navigate('/login')
        },
      })
      setActive(false)
    } catch (err) {
      message.destroy()
      message.error({
        content: err.response.data.message,
        duration: 1.5,
      })
      setActive(false)
    }
  }
  return {
    handleSubmit,
    active,
  }
}
export default useRegister
