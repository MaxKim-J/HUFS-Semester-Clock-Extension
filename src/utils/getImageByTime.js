// 시간별 동적 이미지

const getImgByTime = () => {
  const now = new Date();
  return 18 <= now.getHours() || now.getHours() <= 4 ? false : true;
};

export default getImgByTime;
