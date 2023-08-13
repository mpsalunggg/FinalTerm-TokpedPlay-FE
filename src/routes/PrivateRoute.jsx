/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom'
import { getToken, isTokenExpired } from '../utils/sessionStorage'
const PrivateRoute = ({ children }) => {
  const token = isTokenExpired(getToken())
  // const token = true
  if (token) {
    return <Navigate to={'/login'} />
  }
  return children
}

export default PrivateRoute
