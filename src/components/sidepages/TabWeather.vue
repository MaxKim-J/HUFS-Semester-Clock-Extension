<template>
  <div class="tab-side-box">
    <div class="tab-side-box-title">이문동 날씨</div>
    <div class="tab-side-box-content">
      🌈5일 간의 이문동 날씨와 최저/최고기온입니다.
    </div>
    <div class="tab-weather-box">
      <div
        class="tab-weather"
        v-for="(weather, index) in weahterArray"
        :key="weather.id"
      >
        <div
          class="tab-weather-title"
          :class="[index == 0 ? 'tab-weather-title-today' : '']"
        >
          {{ weather.date }}
        </div>
        <div class="tab-weather-icon">
          {{ changeToEmoji(weather.morning_icon) }}/{{
            changeToEmoji(weather.afternoon_icon)
          }}
        </div>
        <div class="tab-weather-temp">
          {{ weather.temp }}
        </div>
      </div>
    </div>
    <div class="tab-alarm">
      *데이터가 표시되지 않는다면, 와이파이 연결을 확인하세요!
    </div>
  </div>
</template>

<script>
import "../../style/sidePage.scss";
import { getWeatherFromDB } from "../../services/firebaseDbAccess";
import { weatherValid } from "../../utils/tabWeatherValid";

export default {
  data() {
    return {
      weahterArray: []
    };
  },
  methods: {
    changeToEmoji(key) {
      return weatherValid(key);
    }
  },
  created() {
    getWeatherFromDB()
      .then(data => {
        this.weahterArray = data.weather;
        console.log(this.weahterArray);
      })
      .catch(err => {
        console.error("데이터를 가져올 수 없습니다");
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
