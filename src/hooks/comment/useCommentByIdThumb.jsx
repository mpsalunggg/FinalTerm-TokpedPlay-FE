import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { COMMENT } from "../../utils/endpoints"

const useCommentByIdThumb = () => {
const { id } = useParams()
  const [comment, setComment] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(COMMENT + id)
        if (response.data?.data) {
            const sortedComments = response.data.data.sort(
              (a, b) => b.time_stamp - a.time_stamp
            )
          setComment(sortedComments)
        }
        // console.log(response.data?.data)
      } catch (err) {
        console.log(err)
      }
    }

    getData()
  }, [])
  return {
    comment
  }
}
export default useCommentByIdThumb