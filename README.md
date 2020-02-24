# ⏱ 외대 종강시계

![GitHub last commit (branch)](https://img.shields.io/github/last-commit/MaxKim-J/HUFS-Semester-Clock-Extension/master) ![Chrome Web Store](https://img.shields.io/chrome-web-store/users/jadlpknbgnmmelikpcaogikohieafaem?hl=ko) [![GitHub license](https://img.shields.io/github/license/MaxKim-J/HUFS-Semester-Clock-Extension)](https://github.com/MaxKim-J/HUFS-Semester-Clock-Extension) ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/jadlpknbgnmmelikpcaogikohieafaem)

![스크린샷](screenshot.png)
HUFS-Semester-Clock-Extension  
외대생을 위한, 종강까지 얼마나 남았는지 보여주는 크롬 익스텐션

- [크롬 웹 스토어에서 다운받기](https://chrome.google.com/webstore/detail/%EC%99%B8%EB%8C%80-%EC%A2%85%EA%B0%95%EC%8B%9C%EA%B3%84/jadlpknbgnmmelikpcaogikohieafaem?hl=ko)

## ✅ 주요 기능

- 새로운 탭을 생성하면 크롬의 디폴트 배경화면 대신, 익스텐션이 제공하는 배경 이미지와 기능이 제공됩니다.
- 학기 중에는 종강까지 남은 시간을 보여줍니다.
- 방학 중에는 계절학기 종강까지 or 다음학기 개강까지 남은 시간을 보여줍니다.
- 학번과 이름을 입력하면 시간에 따른 랜덤 멘트와 입학한 날짜로부터 얼마나 지났는지 볼 수 있습니다.
- 배경화면을 커스텀 할 수 있으며, 점심/저녁 메뉴 랜덤 생성기, 학사 공지 조회와 이문동 날씨 조회와 같은 시계 외의 기능도 존재합니다.

## 🛠 설치

### 개발모드

```shell
git clone https://github.com/MaxKim-J/HUFS-Semester-Clock-Extension.git
cd HUFS-Semester-Clock-Extension
npm install
npm run dev
```

### 배포(dist폴더 만들기)

```shell
npm run build
```

이후 `chrome://extension`으로 이동 후, `압축 해제된 프로젝트 로드` 버튼을 통해 생성된 `dist` 폴더를 로드하면 크롬 브라우저에 익스텐션을 적용할 수 있습니다.

## ⚓ 의존성

- chrome-web-extension : vue.js기반 vue-web-extension 보일러플레이트를 사용해서 개발했습니다.
  - [Vue.js](https://github.com/vuejs/vue)
  - [Vue-web-extension](https://github.com/Kocal/vue-web-extension)
  - [Vuex](https://github.com/vuejs/vuex)
  - [vue-moment](https://github.com/brockpetrie/vue-moment)
- firebase : 학사공지, 이문동 날씨 웹 스크래퍼를 firebase-functions로 구현한 후 realtime-database에서 데이터를 가져옵니다. DB 접근에 필요한 변수들은 .env에서 관리합니다.
  - [firebase-js-sdk](https://github.com/firebase/firebase-js-sdk)
  - [dotenv](https://github.com/motdotla/dotenv)

## 🚩 버전

[릴리즈 노트](https://github.com/MaxKim-J/HUFS-Semester-Clock-Extension/releases)를 참고해 주세요!

## 👨 기여

**모든 종류의 커밋을 환영합니다!**

- 관리자) [MaxKim-J](https://github.com/MaxKim-J)

## 📢 라이센스

MIT
