// firebase db에서 가져온 데이터를 이모지로 바꿔주는 로직입니다.

export const weatherValid = icon => {
  switch (icon) {
    case "ws1":
    case "ws2":
      return "☀️";
      break;
    case "ws3":
    case "ws4":
      return "⛅";
      break;
    case "ws5":
    case "ws6":
      return "🌥";
      break;
    case "ws7":
    case "ws8":
      return "☁️";
      break;
    case "ws9":
    case "ws10":
      return "🌧";
      break;
    case "ws11":
    case "ws12":
    case "ws13":
      return "🌨";
      break;
    case "ws14":
    case "ws21":
      return "🌧";
      break;
    case "ws15":
    case "ws29":
      return "☔";
      break;
    case "ws16":
    case "ws19":
    case "ws30":
      return "⛄";
      break;

    case "ws17":
      return "🌫";
      break;

    case "ws18":
      return "🌩";
      break;

    case "ws20":
      return "😷";
      break;

    case "ws22":
    case "ws24":
    case "ws27":
    case "ws26":
      return "🌦";
      break;

    case "ws23" || "ws28":
      return "🌦";
      break;

    case "ws25":
      return "⛅";
      break;
    default:
      return "🌞";
  }
};
