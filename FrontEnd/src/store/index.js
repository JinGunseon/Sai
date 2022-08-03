import router from '@/router'
import axios from 'axios'

import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    familyCode: 123456
  },
  getters: {
  },
  mutations: {

  },
  actions: {
    // 아이디 찾기
    findId ({ commit }, userInfo) {
      const api_url = 'http://localhost:8080/api/user/findId'
      const params = {
        userName: userInfo.userName,
        email: userInfo.email
      }
      axios({
        url: api_url,
        method: 'GET',
        params
      }).then((res) => {
        if (res.data.msg.indexOf('입력하신 이메일로 아이디가 전송되었습니다.') !== -1) {
          alert(res.data.msg)
          router.push({ name: 'home' })
        } else {
          alert(res.data.msg)
        }
      })
        .catch((err) => {
          console.log(err)
        })
    },
    // 비밀번호 찾기
    findPassword ({ commit }, userInfo) {
      const api_url = 'http://localhost:8080/api/user/findPw'
      const params = {
        userName: userInfo.userName,
        userId: userInfo.userId,
        email: userInfo.email
      }
      axios({
        url: api_url,
        method: 'GET',
        params
      })
        .then((res) => {
          if (res.data.msg.indexOf('입력하신 이메일로 임시 비밀번호가 전송되었습니다.') !== -1) {
            alert(res.data.msg)
            router.push({ name: 'home' })
          } else {
            alert(res.data.msg)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
