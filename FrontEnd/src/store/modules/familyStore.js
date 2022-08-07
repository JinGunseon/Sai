import axios from 'axios'
import router from '@/router/index.js'

const familyStore = {
    namespaced: true,
    state: {
        familyId: 123456,
        familyCallsignList: [],
        familyInfo: []
    },
    getters: {
        
    },
    mutations: {
        SET_FAMILY_ID: (state, familyId) => {
            state.familyId = familyId
        },
        CALLSIGN_LIST(state, callsign) {
            state.familyCallsignList = callsign
        }
    },
    actions: {
        // 가족 들어가기 신청
    applyFamily ({ commit }, userInfo) {
        const api_url = 'http://localhost:8080/family/join/apply'
        const params = {
          familyId: userInfo.familyId,
          userId: userInfo.userId
        }
        axios({
          url: api_url,
          method: 'POST',
          // params
          data: JSON.stringify(params),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((res) => {
            // console.log(res)
            if (res.status === 200) {
              alert('가족 들어가기 신청 완료')
              router.push({ name: 'applywait' })
            } else {
              console.log(res)
            }
          })
          .catch((err) => {
            console.log(err)
            alert('잘못된 코드입니다')
          })
      },
      // 가족 아이디 생성
      createFamilyId ({ commit }, userInfo) {
        const api_url = 'http://localhost:8080/family/create/'
        axios({
          url: api_url + userInfo,
          method: 'POST'
        })
          .then((res) => {
            console.log(res)
            if (res.status === 200) {
              commit('SET_FAMILY_ID', res.data.familyId)
              router.push({ name: 'familyInvite' })
            } else {
              console.log(res)
            }
          })
          .catch((err) => {
            console.log(err)
          })
      },
      //가족 콜사인 리스트
    callsignList({commit}, info) {
        const userId = info.userId
        const api_url = 'http://localhost:8080/family/list/' + userId
        axios({
          url: api_url,
          method: 'GET'
        })
        .then((res) => {
          commit('CALLSIGN_LIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    modules: {
        
    }
}
export default familyStore