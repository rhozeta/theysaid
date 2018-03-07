import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('main')
  },
  selectPost (id) {
    return Api().get('main/' + id, id)
  },
  addPost (params) {
    return Api().post('main/', params)
  },
  addComment (id) {
    return Api().put('main/' + id, id)
  }
}
