import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('main')
  },

  addPost (params) {
    return Api().post('main', params)
  }
}
