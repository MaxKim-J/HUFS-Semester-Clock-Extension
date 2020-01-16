<template>
  <div class="tab-header">
    <div class="tab-header-contents">
      <div class="tab-header-contents-left">
        <div
          class="tab-header-content"
          :class="[this.cafeteriaIsShowing ? 'tab-header-content-checked' : '']"
          @click="this.showCafeteria"
        >학식</div>
        <div
          class="tab-header-content"
          :class="[this.eclassIsShowing ? 'tab-header-content-checked' : '']"
          @click="this.showEclass"
        >이클래스</div>
      </div>
      <div class="tab-header-contents-center">
        <div class="tab-header-content-title">외대 종강시계</div>
      </div>
      <div class="tab-header-contents-right">
        <div
          class="tab-header-content"
          :class="[this.weatherIsShowing ? 'tab-header-content-checked' : '']"
          @click="this.showWeather"
        >이문동 날씨</div>
      </div>
    </div>
    <div class="tab-header-boxes">
      <div class="tab-header-box-wrap tab-header-box-left-wrap">
        <div class="tab-header-box tab-header-box-left" v-if="this.cafeteriaIsShowing">
          <tab-cafeteria></tab-cafeteria>
        </div>
        <div class="tab-header-box tab-header-box-left" v-if="this.eclassIsShowing">
          <tab-eclass></tab-eclass>
        </div>
      </div>
      <div class="tab-header-box-wrap tab-header-box-right-wrap">
        <div class="tab-header-box tab-header-box-right" v-if="this.weatherIsShowing">
          <tab-weather></tab-weather>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GREETINGS } from "../utils/GreetingsMessage.js";
import TabWeather from "../components/sidepages/TabWeather";
import TabCafeteria from "../components/sidepages/TabCafeteria";
import TabEclass from "../components/sidepages/TabEclass";

export default {
  name: "tabHeader",
  components: {
    TabWeather,
    TabCafeteria,
    TabEclass
  },
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
      this.weatherIsShowing = false;
    },
    showCafeteria() {
      this.cafeteriaIsShowing = !this.cafeteriaIsShowing;
      this.weatherIsShowing = false;
    },
    showWeather() {
      this.weatherIsShowing = !this.weatherIsShowing;
      this.cafeteriaIsShowing = false;
      this.eclassIsShowing = false;
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
      display: flex;
      .tab-header-box {
        background-color: rgba(0, 0, 0, 0.7);
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
        width: 500px;
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
      opacity: 0.7;
    }
    .tab-header-content-checked {
      opacity: 1;
    }
    .tab-header-content:hover {
      opacity: 1;
    }
  }
}
</style>
