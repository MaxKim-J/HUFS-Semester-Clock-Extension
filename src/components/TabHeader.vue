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
          이문동 날씨
        </div>
      </div>
      <div class="tab-bar-contents-center">
        <div class="tab-bar-content-main-title">외대 종강시계</div>
      </div>
      <div class="tab-bar-contents-right">
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
            <tab-notifications></tab-notifications>
          </div>
        </transition>
        <transition name="fade">
          <div
            class="tab-bar-box tab-bar-box-left"
            v-if="this.weatherIsShowing"
          >
            <tab-weather></tab-weather>
          </div>
        </transition>
      </div>

      <div class="tab-bar-box-wrap tab-bar-box-right-wrap">
        <transition name="fade">
          <div
            class="tab-bar-box tab-bar-box-right"
            v-if="this.randomMenuIsShowing"
          >
            <tab-random-menu></tab-random-menu>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import TabRandomMenu from "../components/sidepages/TabRandomMenu";
import TabNotifications from "../components/sidepages/TabNotifications";
import TabWeather from "../components/sidepages/TabWeather";
import "../style/bar.scss";

export default {
  name: "tabHeader",
  components: {
    TabRandomMenu,
    TabNotifications,
    TabWeather
  },
  data() {
    return {
      randomMenuIsShowing: false,
      notificationIsShowing: false,
      weatherIsShowing: false
    };
  },
  methods: {
    showNotifications() {
      this.notificationIsShowing = !this.notificationIsShowing;
      this.randomMenuIsShowing = false;
    },
    showRandomMenu() {
      this.randomMenuIsShowing = !this.randomMenuIsShowing;
      this.weatherIsShowing = false;
      this.notificationIsShowing = false;
    },
    showWeather() {
      this.weatherIsShowing = !this.weatherIsShowing;
      this.randomMenuIsShowing = false;
    }
  }
};
</script>

<style scoped lang="scss">
.tab-header {
  top: 0;
}
</style>
