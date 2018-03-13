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
  addComment (id, commentBody) {
    console.log(commentBody)
    return Api().put('main/' + id, { commentBody })
  },
  likePost (id, userId) {
    return Api().put('main/' + id, {id, userId})
  }
}
