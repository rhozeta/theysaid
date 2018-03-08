import Api from '@/services/Api'

export default {
  emailCheck (email, password) {
    return Api().post('/register', { email, password })
  },
  loginUser (email, password) {
    return Api().post('/login', {email, password})
  }
}
