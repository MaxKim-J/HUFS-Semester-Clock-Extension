import { storage } from "../utils/firebaseInit";
import { imageToString } from "../utils/imageToString";
import axios from "axios";

const getImgFromStorage = async (fileName) => {
  console.log(`storage에 ${fileName} 이미지 파일을 요청합니다`);
  const storageRef = storage.ref();
  const url = await storageRef.child(`${fileName}.png`).getDownloadURL();
  const res = await axios.get(url, { responseType: "blob" });
  return imageToString(res.data);
};

export const getSeoulImgFromStorage = async () => {
  const fileName = "default_image_seoul";
  return {
    backgroundImgDay: await getImgFromStorage(fileName),
    backgroundImgNight: await getImgFromStorage(fileName + "_night"),
  };
};

export const getGlobalImgFromStorage = async () => {
  const fileName = "default_image_global";
  return {
    backgroundImgDay: await getImgFromStorage(fileName),
    backgroundImgNight: await getImgFromStorage(fileName + "_night"),
  };
};
