// TabMiddle 컴포넌트에서 사용하는 시간대별 인사말 로직입니다

export function greetingValid(time) {
  if (7 <= time && time < 11) {
    return MORNING
  } else if (11 <= time && time < 17) {
    return AFTERNOON
  } else if (17 <= time && time < 21) {
    return EVENING
  } else if (21 <= time || time === 0) {
    return NIGHT
  } else if (1 <= time && time < 7) {
    return DAWN
  }
}

// 방학때 다시 짜야합니다...
//07:00 ~ 11:00
export const MORNING = [
  { id: 0, message: '🌄 좋은 아침이에요!' },
  { id: 1, message: '🕘 1교시 수업 화이팅!' },
  { id: 2, message: '😎 행복한 하루 되세요!' },
  { id: 3, message: '🙏 오늘 하루도 별 탈 없이!' },
  { id: 4, message: '🤔 뭔가 잊어버린건 없으신가요?' },
]

// 11:00 ~ 17:00
export const AFTERNOON = [
  { id: 0, message: '🍚 바빠도 굶지 마세요ㅜㅜ' },
  { id: 1, message: '🌞 신나는 오후 되세요!' },
  { id: 2, message: '☕ 커피 한 잔 어떠신가요?' },
  { id: 3, message: '🔋 오늘 수업도 힘내세요!' },
]

// 17:00 ~ 21:00
export const EVENING = [
  { id: 0, message: '🌇 포근한 저녁입니다!' },
  { id: 1, message: '⌛ 얼마 안 남았어요!' },
  { id: 2, message: '🍻 약속이 있으신가요?' },
  { id: 3, message: '🏠 집에 가시나요?' },
]

// 21:00 ~ 24:00
export const NIGHT = [
  { id: 0, message: '🌉 편안한 밤 되세요!' },
  { id: 1, message: '🙂 좋은 하루 보내셨나요?' },
  { id: 2, message: '👋 오늘도 수고하셨어요!' },
  { id: 3, message: '📌 일정이 남으셨나요?' },
]

// 24:00 ~ 7:00
export const DAWN = [
  { id: 0, message: '⏰ 밤을 세신다면.. 화이팅!' },
  { id: 1, message: '🔥 공부 힘내세요!' },
  { id: 2, message: '👍 노력하신만큼 잘 될거에요!' },
  { id: 3, message: '💤 주무시러 가시나요?' },
  { id: 4, message: '🌃 잠 못드는 밤인가요?' },
]