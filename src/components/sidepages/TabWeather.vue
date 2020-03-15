<template>
  <div class="tab-side-box">
    <div class="tab-side-box-title">외대 날씨</div>
    <div class="tab-side-box-content">
      🌈5일 간의 {{weatherStatus}} 날씨와 최저/최고기온입니다.
      <span
        class="tab-side-box-sub-btn"
        @click="this.changeStatus"
      >{{weatherStatus === "서울캠(이문동)" ? "글캠":"서울캠"}} 날씨 보기</span>
    </div>

    <div class="tab-weather-box" v-if="weatherStatus === '서울캠(이문동)'">
      <div class="tab-weather" v-for="(weather, index) in seoulArray" :key="weather.id">
        <div
          class="tab-weather-title"
          :class="[index == 0 ? 'tab-weather-title-today' : '']"
        >{{ weather.date }}</div>
        <div class="tab-weather-icon">
          {{ changeToEmoji(weather.morning_icon) }}/{{
          changeToEmoji(weather.afternoon_icon)
          }}
        </div>
        <div class="tab-weather-temp">{{ weather.temp }}</div>
      </div>
    </div>

    <div class="tab-weather-box" v-else>
      <div class="tab-weather" v-for="(weather, index) in globalArray" :key="weather.id">
        <div
          class="tab-weather-title"
          :class="[index == 0 ? 'tab-weather-title-today' : '']"
        >{{ weather.date }}</div>
        <div class="tab-weather-icon">
          {{ changeToEmoji(weather.morning_icon) }}/{{
          changeToEmoji(weather.afternoon_icon)
          }}
        </div>
        <div class="tab-weather-temp">{{ weather.temp }}</div>
      </div>
    </div>

    <div class="tab-alarm">*데이터가 표시되지 않는다면, 와이파이 연결을 확인하세요!</div>
  </div>
</template>

<script>
import "../../style/sidePage.scss";
import { getWeatherFromDB } from "../../services/firebaseDbAccess";
import { weatherValid } from "../../utils/tabWeatherValid";
import {
  localStorageGet,
  localStorageSet
} from "../../services/localStorageAccess";

export default {
  data() {
    return {
      seoulArray: [],
      globalArray: [],
      weatherStatus: "서울캠(이문동)"
    };
  },
  methods: {
    changeToEmoji(key) {
      return weatherValid(key);
    },
    changeStatus() {
      if (this.weatherStatus === "서울캠(이문동)") {
        this.weatherStatus = "글캠(모현면)";
        localStorageSet({ weatherShow: "global" });
      } else {
        this.weatherStatus = "서울캠(이문동)";
        localStorageSet({ weatherShow: "seoul" });
      }
    }
  },
  created() {
    localStorageGet(["weatherInfo", "weatherShow"]).then(data => {
      if (data.weatherShow !== undefined) {
        data.weatherShow === "seoul"
          ? (this.weatherStatus = "서울캠(이문동)")
          : (this.weatherStatus = "글캠(모현면)");
      }
      if (data.weatherInfo) {
        this.seoulArray = data.weatherInfo.slice(0, 5);
        this.globalArray = data.weatherInfo.slice(5, 10);
      } else {
        getWeatherFromDB()
          .then(data => {
            this.seoulArray = data.weather.slice(0, 5);
            this.globalArray = data.weather.slice(5, 10);
            localStorageSet({ weatherInfo: data.weather });
          })
          .catch(err => {
            console.error("데이터를 가져올 수 없습니다");
          });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.tab-weather-box {
  display: flex;
  margin-top: 15px;
  justify-content: center;
  .tab-weather {
    margin-right: 20px;
    text-align: center;
    .tab-weather-title {
      font-size: 15px;
    }
    .tab-weather-title-today {
      background-color: white;
      color: black;
    }
    .tab-weather-icon {
      font-size: 25px;
      margin: 10px 0px;
      height: 30px;
    }
    .tab-weather-line {
      display: block;
      height: 100%;
      width: 2px;
      background-color: white;
    }
  }
}
</style>
