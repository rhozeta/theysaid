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
  likePost (id, choice) {
    if (choice === 1) {
      console.log('liked')
    } else {
      console.log('disliked')
    }
    return Api().put('main/' + id, { choice })
  }
}
