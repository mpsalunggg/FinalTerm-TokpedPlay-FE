import jwt_decode from 'jwt-decode'

export const saveToken = (token) => {
  sessionStorage.setItem('TOKEN_KEY', token)
}

export const getToken = () => {
  return sessionStorage.getItem('TOKEN_KEY')
}

export const removeSession = () => {
  sessionStorage.removeItem('TOKEN_KEY')
  sessionStorage.removeItem('USER')
}

export const saveUser = (user) => {
    return sessionStorage.setItem('USER', JSON.stringify(user))
}

export const getUser = () => {
    return JSON.parse(sessionStorage.getItem('USER'))
}

export const isTokenExpired = (token) => {
  if (!token) return true

  const decodedToken = jwt_decode(token)
  const currentTimestamp = Date.now() / 1000

  return decodedToken.exp < currentTimestamp
}