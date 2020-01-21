import Vue from 'vue'
import Vuex from 'vuex'

// 뷰엑스 저장소
// 로컬 스토리지와 통신하는 로직들은 모두 저장소에서 구현했습니다!

Vue.use(Vuex)

import { localStorageGet, localStorageSet, localStorageRemove } from "../services/localStorageAccess"

const dataArr = ["userName", "userFreshmanYear"];

export default new Vuex.Store({
  state: {
    userName: "",
    userFreshmanYear: 0,
  },
  mutations: {
    GET_USER_INFO(state, payload) {
      state.userName = payload.userName
      state.userFreshmanYear = payload.userFreshmanYear
    },
    REMOVE_USER_INFO(state) {
      state.userName = ""
      state.userFreshmanYear = 0
      localStorageRemove(dataArr)
    },
    UPDATE_USER_INFO(state, payload) {
      state.userName = payload.userName
      state.userFreshmanYear = payload.userFreshmanYear
      localStorageSet(payload)
    }
  },
  actions: {
    getUserInfo({ commit }) {
      localStorageGet(dataArr).then(data => {
        const userInfoData = {
          userName: data.userName,
          userFreshmanYear: data.userFreshmanYear,
        }
        commit('GET_USER_INFO', userInfoData)
      })
    }
  }
})
