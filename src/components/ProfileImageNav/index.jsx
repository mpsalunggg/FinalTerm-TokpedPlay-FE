/* eslint-disable no-unused-vars */
import { Avatar, Button, Dropdown, Modal } from 'antd'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUser, removeSession } from '../../utils/sessionStorage'

const ProfileImageNav = () => {
  const user = getUser()
  const [handleModal, setHandleModal] = useState(false)
  const navigate = useNavigate()

  const items = [
    {
      key: '1',
      label: <Link to={`/profile/${user._id}`}>Profile</Link>,
    },
    {
      key: '2',
      label: <div onClick={() => setHandleModal(true)}>Logout</div>,
    },
  ]
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
        arrow
      >
        <Avatar
          className="bg-cover bg-center w-10 h-10 rounded-full cursor-pointer"
          style={{
            backgroundImage: `url(${
              user?.profile
                ? user?.profile
                : 'https://www.kindpng.com/picc/m/171-1712282_profile-icon-png-profile-icon-vector-png-transparent.png'
            })`,
          }}
        />
      </Dropdown>
      <Modal
        title={'Yakin Ingin Logout!'}
        centered
        open={handleModal}
        onCancel={() => setHandleModal(false)}
        footer={[
          <Button key="cancel" onClick={() => setHandleModal(false)}>
            Batal
          </Button>,
          <Button
            key="logout"
            type="default"
            onClick={() => {
              removeSession()
              navigate('/login')
            }}
            className="bg-gray-900 hover:bg-gray-700 hover:text-gray"
            style={{
              color: 'white',
              border: 'none',
            }}
          >
            Logout
          </Button>,
        ]}
      ></Modal>
    </>
  )
}
export default ProfileImageNav
