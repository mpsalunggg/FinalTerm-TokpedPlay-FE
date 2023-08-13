/* eslint-disable no-unused-vars */
import axios from 'axios'
import { LOGIN } from '../../utils/endpoints'
import { message } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveToken, saveUser } from '../../utils/sessionStorage'

const useLogin = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState(false)
  const handleSubmit = async (event) => {
    const data = event
    message.loading('Loading...')
    setActive(true)
    try {
      const response = await axios.post(LOGIN, data)
      saveToken(response.data.tokenUser)
      saveUser(response.data.data)
      message.destroy()
      message.success({
        content: response.data.message,
        duration: 1.5,
        onClose() {
          navigate('/')
        },
      })
    } catch (err) {
      console.log(err)
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
export default useLogin
