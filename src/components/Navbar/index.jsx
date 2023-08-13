import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { getToken, getUser } from '../../utils/sessionStorage'
// import { useProfile } from '../../hooks'
import ProfileImageNav from '../ProfileImageNav'

const Navbar = () => {
  const user = getUser()

  return (
    <div className="bg-gray-800 h-16 flex justify-between items-center lg:px-14 px-4">
      <Link to="/">
        <div className="text-white font-semibold text-lg">Tokopedia Play</div>
      </Link>
      <div className="flex gap-4 items-center text-white">
        {getToken() ? (
          <>
            <p>{user?.username}</p>
            <ProfileImageNav />
          </>
        ) : (
          <Link to="/login">
            <Button
              htmlType="submit"
              className="bg-white hover:bg-gray-100 hover:text-gray-900"
              style={{
                color: 'black',
                border: 'none',
              }}
            >
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
