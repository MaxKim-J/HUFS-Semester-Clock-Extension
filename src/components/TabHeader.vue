<template>
  <div class="tab-bar tab-header">
    <div class="tab-bar-contents">
      <div class="tab-bar-contents-left">
        <div
          class="tab-bar-content"
          :class="[this.cafeteriaIsShowing ? 'tab-bar-content-checked' : '']"
          @click="this.showCafeteria"
        >학식</div>
        <div
          class="tab-bar-content"
          :class="[this.eclassIsShowing ? 'tab-bar-content-checked' : '']"
          @click="this.showEclass"
        >이클래스</div>
      </div>
      <div class="tab-bar-contents-center">
        <div class="tab-bar-content-title">외대 종강시계</div>
      </div>
      <div class="tab-bar-contents-right">
        <div
          class="tab-bar-content"
          :class="[this.weatherIsShowing ? 'tab-bar-content-checked' : '']"
          @click="this.showWeather"
        >이문동 날씨</div>
      </div>
    </div>
    <div class="tab-bar-boxes">
      <div class="tab-bar-box-wrap tab-bar-box-left-wrap">
        <transition name="fade">
          <div class="tab-bar-box tab-bar-box-left" v-if="this.cafeteriaIsShowing">
            <tab-cafeteria></tab-cafeteria>
          </div>
        </transition>
        <transition name="fade">
          <div class="tab-bar-box tab-bar-box-left" v-if="this.eclassIsShowing">
            <tab-eclass></tab-eclass>
          </div>
        </transition>
      </div>
      <div class="tab-bar-box-wrap tab-bar-box-right-wrap">
        <transition name="fade">
          <div class="tab-bar-box tab-bar-box-right" v-if="this.weatherIsShowing">
            <tab-weather></tab-weather>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import TabWeather from "../components/sidepages/TabWeather";
import TabCafeteria from "../components/sidepages/TabCafeteria";
import TabEclass from "../components/sidepages/TabEclass";
import "../style/bar.scss";

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
  top: 0;
}
</style>
