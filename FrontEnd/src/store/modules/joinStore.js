import axios from 'axios'
import router from '@/router/index.js'
import { API_BASE_URL } from '@/config'

const api_url = API_BASE_URL + '/api'
const joinStore = {
  namespaced: true,
  state: {
    isChecked: true
  },
  getters: {
  },
  mutations: {
    SET_CHECKED: (state, isChecked) => { state.isChecked = isChecked }
  },
  actions: {
    // 중복체크
    checkDuplicateId (context, id) {
      const params = {
        userId: id
      }
      axios({
        method: 'get',
        // eslint-disable-next-line camelcase
        url: api_url + '/user/duplication/id',
        params
      }).then(res => {
        if (res.data === true) {
          alert('중복된 아이디입니다!')
          context.commit('SET_CHECKED', false)
          console.log(context.state.isChecked)
        } else {
          alert('사용가능한 아이디입니다!')
          context.commit('SET_CHECKED', true)
          console.log(context.state.isChecked)
        }
        // 409를 받으면 실행되는 코드
      }).catch((res) => {
        console.log(res)
      })
    },
    checkDuplicateEmail (context, email) {
      const params = {
        email: email
      }
      axios({
        method: 'get',
        url: api_url + '/user/duplication/email',
        params
      }).then(res => {
        if (res.data === true) {
          alert('중복된 이메일입니다!')
          context.commit('SET_CHECKED', false)
        } else {
          alert('사용가능한 이메일입니다!')
          context.commit('SET_CHECKED', true)
        }
      }).catch((res) => {
      })
    },
    checkJoin (context, userJoin) {
      axios.post(api_url + '/user/join', userJoin, {
      }).then(res => {
        if (context.state.isChecked === true) {
          alert('회원가입성공')
          console.log(res)
          router.push({ name: 'login' })
        } else {
          alert('아이디중복 또는 이메일중복을 확인해주세요')
          context.commit('SET_CHECKED', true)
        }
      }).catch((res) => {
        alert('아이디중복 또는 이메일중복을 확인해주세요')
      })
    }
  },
  modules: {
  }
}
export default joinStore
