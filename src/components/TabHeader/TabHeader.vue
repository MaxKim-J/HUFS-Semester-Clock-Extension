<template>
  <div class="tab-bar tab-header">
    <div class="tab-bar-contents">
      <div class="tab-bar-contents-left">
        <div
          class="tab-bar-content"
          :class="[this.notificationIsShowing ? 'tab-bar-content-checked' : '']"
          @click="this.showNotifications"
        >
          학사공지
        </div>
        <div
          class="tab-bar-content"
          :class="[this.weatherIsShowing ? 'tab-bar-content-checked' : '']"
          @click="this.showWeather"
        >
          외대 날씨
        </div>
      </div>
      <div class="tab-bar-contents-center">
        <div class="tab-bar-content-main-title">외대 종강시계</div>
      </div>
      <div class="tab-bar-contents-right">
        <div
          class="tab-bar-content"
          :class="[this.coronaStatusIsShowing ? 'tab-bar-content-checked' : '']"
          @click="this.showCoronaSatus"
        >
          코로나19 현황
        </div>
         <div
          class="tab-bar-content"
          :class="[this.randomMenuIsShowing ? 'tab-bar-content-checked' : '']"
          @click="this.showRandomMenu"
        >
          오늘 뭐먹지
        </div>
      </div>
    </div>
    <div class="tab-bar-boxes">
      <div class="tab-bar-box-wrap tab-bar-box-left-wrap">
        <transition name="fade">
          <div
            class="tab-bar-box tab-bar-box-left"
            v-if="this.notificationIsShowing"
          >
            <side-notifications></side-notifications>
          </div>
        </transition>
        <transition name="fade">
          <div
            class="tab-bar-box tab-bar-box-left"
            v-if="this.weatherIsShowing"
          >
            <side-weather></side-weather>
          </div>
        </transition>
      </div>
      <div class="tab-bar-box-wrap tab-bar-box-right-wrap">
        <transition name="fade">
          <div
            class="tab-bar-box tab-bar-box-right"
            v-if="this.randomMenuIsShowing"
          >
            <side-random-menu></side-random-menu>
          </div>
        </transition>
        <transition name="fade">
          <div
            class="tab-bar-box tab-bar-box-right"
            v-if="this.coronaStatusIsShowing"
          >
            <side-corona-status></side-corona-status>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import SideRandomMenu from "./TabHeaderSide/SideRandomMenu";
import SideNotifications from "./TabHeaderSide/SideNotifications";
import SideWeather from "./TabHeaderSide/SideWeather";
import SideCoronaStatus from './TabHeaderSide/SideCoronaStatus.vue';
import "../../style/bar.scss";

export default {
  name: "TabHeader",
  components: {
    SideRandomMenu,
    SideNotifications,
    SideWeather,
    SideCoronaStatus
  },
  data() {
    return { 
      randomMenuIsShowing: false,
      notificationIsShowing: false,
      weatherIsShowing: false,
      coronaStatusIsShowing: false
    };
  },
  methods: {
    showNotifications() {
      this.notificationIsShowing = !this.notificationIsShowing;
      this.randomMenuIsShowing = false;
      this.coronaStatusIsShowing = false;
    },
    showWeather() {
      this.weatherIsShowing = !this.weatherIsShowing;
      this.randomMenuIsShowing = false;
      this.coronaStatusIsShowing = false;
    },
    showRandomMenu() {
      this.randomMenuIsShowing = !this.randomMenuIsShowing;
      this.weatherIsShowing = false;
      this.notificationIsShowing = false;
    },
    showCoronaSatus() {
      this.coronaStatusIsShowing = !this.coronaStatusIsShowing;
      this.weatherIsShowing = false;
      this.notificationIsShowing = false;
    }
  },
};
</script>

<style scoped lang="scss">
.tab-header {
  top: 0;
}
</style>
