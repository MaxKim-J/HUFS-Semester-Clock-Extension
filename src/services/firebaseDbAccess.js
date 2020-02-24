// 파이어베이스 데이터베이스에서 데이터를 가져오기 위한 모듈

import { dataBase } from "../utils/firebaseInit.js";

export const getWeatherFromDB = async () => {
  try {
    const weatherInfo = await dataBase.ref("/weather").once("value");
    return weatherInfo.val();
  } catch {
    console.log("날씨 데이터를 가져올 수 없습니다");
  }
};

export const getNotificationsFromDB = async () => {
  try {
    const notificationsInfo = await dataBase
      .ref("/notifications")
      .once("value");
    return notificationsInfo.val();
  } catch {
    console.log("학사공지 데이터를 가져올 수 없습니다");
  }
};
