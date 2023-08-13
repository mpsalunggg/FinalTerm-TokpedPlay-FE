/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { LoadingOutlined } from '@ant-design/icons'
import { useState } from 'react'

const Youtube = ({ url_video }) => {
  const [loading, setLoading] = useState(true)

  const handleIframeLoad = () => {
    setLoading(false)
  }

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 40,
        color: 'black',
      }}
      spin
    />
  )

const extractVideoIdFromUrl = (url) => {
  try {
    const urlObj = new URL(url)
    const params = new URLSearchParams(urlObj.search)
    return params.get('v')
  } catch (error) {
    return null
  }
}

  const videoId = extractVideoIdFromUrl(url_video)

  return (
    <>
      {loading && (
        <div className="w-full lg:h-[400px] h-[300px] px-16 flex justify-center items-center shadow-md">
          {antIcon}
        </div>
      )}
      <iframe
        title="YouTube Video"
        className={`w-full lg:h-[400px] h-[300px] ${loading ? 'hidden' : ''}`}
        src={'https://www.youtube.com/embed/' + videoId}
        allowFullScreen
        onLoad={handleIframeLoad}
      ></iframe>
    </>
  )
}

export default Youtube
