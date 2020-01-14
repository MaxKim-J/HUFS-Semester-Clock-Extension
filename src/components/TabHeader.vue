<template>
  <div class="tab-header">
    <div class="tab-header-contents">
      <div class="tab-header-contents-left">
        <div class="tab-header-content" @click="this.showCafeteria">학식</div>
        <div class="tab-header-content" @click="this.showEclass">이클래스</div>
      </div>
      <div class="tab-header-contents-center">
        <div class="tab-header-content-title">외대 종강시계</div>
      </div>
      <div class="tab-header-contents-right">
        <div class="tab-header-content" @click="this.showWeather">이문동날씨</div>
      </div>
    </div>

    <div class="tab-header-boxes">
      <div class="tab-header-box-wrap tab-header-box-left-wrap">
        <div class="tab-header-box tab-header-box-left" v-if="this.cafeteriaIsShowing">
          <div class="tab-side-box">
            <div class="tab-side-box-title">학식</div>
            <div class="tab-side-box-content">학식 연동 기능은</div>
            <div class="tab-side-box-content">준비중입니다</div>
          </div>
        </div>

        <div class="tab-header-box tab-header-box-left" v-if="this.eclassIsShowing">
          <div class="tab-side-box">
            <div class="tab-side-box-title">이클래스</div>
            <div class="tab-side-box-content">이클래스 연동 기능은</div>
            <div class="tab-side-box-content">준비중입니다</div>
          </div>
        </div>
      </div>

      <div class="tab-header-box-wrap tab-header-box-right-wrap">
        <div class="tab-header-box tab-header-box-right" v-if="this.weatherIsShowing">
          <div class="tab-side-box">
            <div class="tab-side-box-title">날씨</div>
            <div class="tab-side-box-content">이문동 날씨와 미세먼지!</div>
            <div class="tab-side-box-content">는 준비중</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GREETINGS } from "../utils/GreetingsMessage.js";

export default {
  name: "tabHeader",
  data() {
    return {
      weatherIsShowing: false,
      cafeteriaIsShowing: false,
      eclassIsShowing: false
    };
  },
  methods: {
    showEclass() {
      this.eclassIsShowing = !this.eclassIsShowing;
    },
    showCafeteria() {
      this.cafeteriaIsShowing = !this.cafeteriaIsShowing;
    },
    showWeather() {
      this.weatherIsShowing = !this.weatherIsShowing;
    }
  }
};
</script>

<style scoped lang='scss'>
.tab-header {
  width: 100%;
  position: fixed;
  top: 0;
  .tab-header-boxes {
    width: 100%;
    display: flex;
    .tab-header-box-wrap {
      width: 50%;
      z-index: 10;
      display: flex;
      .tab-header-box {
        width: 500px;
        height: 150px;
        background-color: black;
        opacity: 0.7;
        color: white;
        border-radius: 5px;
      }
    }
    .tab-header-box-right-wrap {
      justify-content: flex-end;
      .tab-header-box-right {
        margin-bottom: 10px;
        margin-right: 20px;
      }
    }
    .tab-header-box-left-wrap {
      justify-content: flex-start;
      flex-direction: column;
      .tab-header-box-left {
        margin-bottom: 10px;
        margin-left: 20px;
      }
    }
    .tab-header-box-contents {
      margin: 10px;
    }
  }
  .tab-header-contents {
    display: flex;
    width: 100%;
    .tab-header-contents-center {
      display: flex;
      justify-content: center;
      width: 33%;
      .tab-header-content-title {
        font-weight: 700;
        margin: 10px 0px;
      }
    }
    .tab-header-contents-left {
      display: flex;
      width: 33%;
    }
    .tab-header-contents-right {
      display: flex;
      width: 33%;
      justify-content: flex-end;
    }
    .tab-header-content {
      font-size: 16px;
      margin: 10px 20px;
      cursor: pointer;
      transition: font-size 1s;
    }
    .tab-header-content:hover {
      font-size: 17px;
    }
  }
}
</style>
