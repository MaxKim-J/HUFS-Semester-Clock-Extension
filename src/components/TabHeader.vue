<template>
  <div class="tab-bar tab-header">
    <div class="tab-bar-contents">
      <div class="tab-bar-contents-left">
        <div
          class="tab-bar-content"
          :class="[this.cafeteriaIsShowing ? 'tab-bar-content-checked' : '']"
          @click="this.showCafeteria"
        >학식</div>
      </div>
      <div class="tab-bar-contents-center">
        <div class="tab-bar-content-title">외대 종강시계</div>
      </div>
      <div class="tab-bar-contents-right">
        <div
          class="tab-bar-content"
          :class="[this.randomMenuIsShowing ? 'tab-bar-content-checked' : '']"
          @click="this.showRandomMenu"
        >오늘 뭐먹지</div>
      </div>
    </div>
    <div class="tab-bar-boxes">
      <div class="tab-bar-box-wrap tab-bar-box-left-wrap">
        <transition name="fade">
          <div class="tab-bar-box tab-bar-box-left" v-if="this.cafeteriaIsShowing">
            <tab-cafeteria></tab-cafeteria>
          </div>
        </transition>
      </div>
      <div class="tab-bar-box-wrap tab-bar-box-right-wrap">
        <transition name="fade">
          <div class="tab-bar-box tab-bar-box-right" v-if="this.randomMenuIsShowing">
            <tab-random-menu></tab-random-menu>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import TabRandomMenu from "../components/sidepages/TabRandomMenu";
import TabCafeteria from "../components/sidepages/TabCafeteria";
import TabEclass from "../components/sidepages/TabEclass";
import "../style/bar.scss";

export default {
  name: "tabHeader",
  components: {
    TabRandomMenu,
    TabCafeteria
  },
  data() {
    return {
      randomMenuIsShowing: false,
      cafeteriaIsShowing: false,
      eclassIsShowing: false
    };
  },
  methods: {
    showCafeteria() {
      this.cafeteriaIsShowing = !this.cafeteriaIsShowing;
      this.randomMenuIsShowing = false;
    },
    showRandomMenu() {
      this.randomMenuIsShowing = !this.randomMenuIsShowing;
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
