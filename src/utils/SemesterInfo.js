// 학기 관련 전역변수 관리
// 데이터 업데이트 주기는 약 7개월입니다
// 종강시계(개강이후) -> 개강/계절학기 시계(다음학기 개강 직전까지) 

export const CURRENT_SEMESTER_INFO = {
  id: '2020-1',
  act: '종강',
  due: new Date(2020, 5, 19, 23, 59, 59)
}

export const SEASONAL_SEMESTER_INFO = {
  id: '2020 여름',
  act: '종강',
  due: new Date(2020, 6, 13, 23, 59, 59)
}

export const NEXT_SEMESTER_INFO = {
  id: '2020-2',
  act: '개강',
  due: new Date(2020, 8, 1, 23, 59, 59)
}
