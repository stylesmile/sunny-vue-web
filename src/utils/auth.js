import Cookies from 'js-cookie'

const TokenKey = 'sun_vue_token'
const UserInfoKey = 'sun_vue_token_user'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setUserInfo(user) {
  return Cookies.set(UserInfoKey, user)
}

export function getUserInfo() {
  return Cookies.get(UserInfoKey)
}
