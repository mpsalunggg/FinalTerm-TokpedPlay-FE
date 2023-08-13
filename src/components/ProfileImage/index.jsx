// import { useProfile } from '../../hooks'
import { getUser } from '../../utils/sessionStorage'

const ProfileImage = () => {
//   const { data } = useProfile()
  const user = getUser()
  return (
    <div
      className="bg-cover bg-center lg:w-40 w-32 lg:h-40 h-32 rounded-full"
      style={{
        backgroundImage: `url(${
          user?.profile
            ? user?.profile
            : 'https://www.kindpng.com/picc/m/171-1712282_profile-icon-png-profile-icon-vector-png-transparent.png'
        })`,
      }}
    />
  )
}
export default ProfileImage
