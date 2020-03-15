import Vue from "vue";
import Vuex from "vuex";

// 뷰엑스 저장소
// 로컬 스토리지와 통신하는 로직들은 모두 저장소에서 구현했습니다!
// 저장소에서 오가는 데이터들 : 유저 학번, 이름, 유저가 설정한 배경사진

Vue.use(Vuex);

import {
  localStorageGet,
  localStorageSet,
  localStorageRemove
} from "../services/localStorageAccess";

const dataArr = ["userName", "userFreshmanYear"];

export default new Vuex.Store({
  state: {
    userName: "",
    userFreshmanYear: 0,
    userBackgroundImg: ""
  },
  mutations: {
    GET_USER_INFO(state, payload) {
      state.userName = payload.userName;
      state.userFreshmanYear = payload.userFreshmanYear;
    },
    REMOVE_USER_INFO(state) {
      state.userName = "";
      state.userFreshmanYear = 0;
      localStorageRemove(dataArr);
    },
    UPDATE_USER_INFO(state, payload) {
      state.userName = payload.userName;
      state.userFreshmanYear = payload.userFreshmanYear;
      localStorageSet(payload);
    },
    GET_BACKGROUND_IMG(state, payload) {
      state.userBackgroundImg = payload;
    },
    UPDATE_BACKGROUND_IMG(state, payload) {
      state.userBackgroundImg = payload.backgroundImg;
      localStorageSet(payload);
    }
  },
  actions: {
    getUserInfo({ commit }) {
      localStorageGet(dataArr).then(data => {
        const userInfoData = {
          userName: data.userName,
          userFreshmanYear: data.userFreshmanYear
        };
        commit("GET_USER_INFO", userInfoData);
      });
    },
    getBackgroundImg({ commit }) {
      localStorageGet(["backgroundImg"]).then(data => {
        if (data.backgroundImg) {
          commit("GET_BACKGROUND_IMG", data.backgroundImg);
        } else {
          commit("GET_BACKGROUND_IMG", "../img/default_image_seoul.png");
        }
      });
    }
  }
});
