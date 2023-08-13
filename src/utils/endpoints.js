/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// const BASE_URL = 'http://localhost:3004'
const BASE_URL = 'https://finalterm-tokpedplay-be-production.up.railway.app'

const LOGIN = BASE_URL + '/login'
const REGISTER = BASE_URL + '/register'
const GET_PROFILE = BASE_URL + '/get-profile/'
const UPDATE_PROFILE = BASE_URL + '/update-profile/'

const THUMB = BASE_URL + '/thumbnail/'
const SEARCH_THUMB = BASE_URL + '/thumbnail/search?title='

const PRODUCT_ID_THUMB = BASE_URL + '/product/thumbnail/'

const COMMENT = BASE_URL + '/comment/'

export {
  LOGIN,
  REGISTER,
  THUMB,
  SEARCH_THUMB,
  GET_PROFILE,
  UPDATE_PROFILE,
  PRODUCT_ID_THUMB,
  COMMENT
}
