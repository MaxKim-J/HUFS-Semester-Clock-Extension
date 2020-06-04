import { storage } from "../utils/firebaseInit";

const getImgFromStorage = async (fileName) => {
  const storageRef = storage.ref();
  const img = await storageRef.child(`${fileName}.png`).getDownloadURL();
  return img;
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
