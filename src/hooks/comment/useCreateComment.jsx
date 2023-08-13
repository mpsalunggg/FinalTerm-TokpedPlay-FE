import { message } from 'antd'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { COMMENT } from '../../utils/endpoints'
import { getToken } from '../../utils/sessionStorage'

const useCreateComment = () => {
  const { id } = useParams()
  const token = getToken()
  const sendComment = async (event) => {
    try {
      const response = await axios.post(COMMENT + id, event, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      message.destroy()
      message.success({
        content: response.data?.message,
        duration: 1.5,
        className: 'mt-16',
        onClose() {
            window.location.reload()
        }
      })
    } catch (err) {
      console.log(err)
      message.destroy()
      message.error({
        content: err.response.data.message + ', Anda harus login kembali!',
        duration: 1.5,
        className: 'mt-16'
      })
    }
  }

  const handleSubmit = (event) => {
    message.loading({
      content: 'Loading...',
      className: 'mt-16',
    })
    sendComment(event)
  }
  return { handleSubmit }
}
export default useCreateComment
