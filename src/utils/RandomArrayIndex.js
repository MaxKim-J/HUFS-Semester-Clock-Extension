// 배열에서 랜덤하게 인덱스 하나를 뽑아주는 함수입니당
// TabMiddle의 랜덤 메시지, TabRandomMenu의 메뉴 랜덤 생성기에 쓰입니다

export function getRandomArrayIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}