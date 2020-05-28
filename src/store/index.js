import Vue from "vue";
import Vuex from "vuex";

/* 
뷰엑스 저장소에서  : 
1. 유저 이름, 유저 학번, 유저 배경화면 로컬스토리지에서 가져오기
2. 학기 정보 파이어베이스 DB에서 가져오기
3. 날씨, 공지사항은 tabWeather, tabNotifications에서 따로 구현
*/

Vue.use(Vuex);

import {
  localStorageGet,
  localStorageSet,
  localStorageRemove,
} from "../services/localStorageAccess";

import { getSemesterInfoFromDB } from "../services/firebaseDbAccess";

const dataArr = ["userName", "userFreshmanYear"];

export default new Vuex.Store({
  state: {
    userName: "",
    userFreshmanYear: 0,
    userBackgroundImg: "",
    semesterInfos: {},
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
    },
    GET_SEMESTER_INFO(state, payload) {
      state.semesterInfos = payload;
    },
  },
  actions: {
    getUserInfo({ commit }) {
      localStorageGet(dataArr).then((data) => {
        const userInfoData = {
          userName: data.userName,
          userFreshmanYear: data.userFreshmanYear,
        };
        commit("GET_USER_INFO", userInfoData);
      });
    },
    getBackgroundImg({ commit }) {
      localStorageGet(["backgroundImg"]).then((data) => {
        if (data.backgroundImg) {
          commit("GET_BACKGROUND_IMG", data.backgroundImg);
        } else {
          commit("GET_BACKGROUND_IMG", "../img/default_image_seoul.png");
        }
      });
    },
    getSemesterInfos({ commit }) {
      getSemesterInfoFromDB().then((semesters) => {
        let newSemesters = {};
        Object.keys(semesters).forEach((key) => {
          const { due, act, id } = semesters[key];
          const splitInfo = due.split("-").map((elem) => parseInt(elem));
          const [year, month, day] = splitInfo;
          newSemesters = {
            ...newSemesters,
            [key]: {
              act: act,
              id: id,
              due: new Date(year, month, day, 23, 59, 59),
            },
          };
        });
        commit("GET_SEMESTER_INFO", newSemesters);
      });
    },
  },
});
