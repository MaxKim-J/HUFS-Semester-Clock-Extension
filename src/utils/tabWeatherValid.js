// firebase db에서 가져온 데이터를 이모지로 바꿔주는 로직입니다.

export const weatherValid = icon => {
  switch (icon) {
    case "ws1" || "ws2":
      return "🌞";
    case "ws3" || "ws4":
      return "⛅";
    case "ws5" || "ws6" || "ws8" || "ws7":
      return "🌥";
    case "ws9" || "ws10":
      return "🌧";
    case "ws11" || "ws12" || "ws13":
      return "🌨";
    case "ws14" || "ws21":
      return "🌧";
    case "ws15" || "ws29":
      return "☔";
    case "ws16" || "ws19" || "ws30":
      return "⛄";
    case "ws17":
      return "🌫";
    case "ws18":
      return "🌩";
    case "ws20":
      return "😷";
    case "ws22" || "ws24" || "ws27" || "ws26":
      return "🌦";
    case "ws23" || "ws28":
      return "🌦";
    case "ws25":
      return "⛅";
    default:
      return "🌞";
  }
};
