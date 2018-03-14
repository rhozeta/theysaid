import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://167.99.2.154:8081/'
  })
}
