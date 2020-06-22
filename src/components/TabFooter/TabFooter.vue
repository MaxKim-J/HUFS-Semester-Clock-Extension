<template>
  <div class="tab-bar tab-footer">
    <div class="tab-bar-boxes">
      <div class="tab-bar-box-wrap tab-bar-box-left-wrap">
        <transition name="fade">
          <div
            class="tab-bar-box tab-bar-box-left"
            v-if="this.imgUpdateIsShowing"
          >
            <side-img-update></side-img-update>
          </div>
        </transition>
      </div>
      <div class="tab-bar-box-wrap tab-bar-box-right-wrap">
        <transition name="fade">
          <div
            class="tab-bar-box tab-bar-box-right"
            v-if="this.developerIsShowing"
          >
            <side-developer></side-developer>
          </div>
        </transition>
      </div>
    </div>
    <div class="tab-bar-contents">
      <div class="tab-bar-contents-left">
        <div
          class="tab-bar-content"
          :class="[this.imgUpdateIsShowing ? 'tab-bar-content-checked' : '']"
          @click="this.showImgUpdate"
        >
          배경화면 수정
        </div>
      </div>
      <div class="tab-bar-contents-center"></div>
      <div class="tab-bar-contents-right">
        <div
          class="tab-bar-content"
          :class="[this.developerIsShowing ? 'tab-bar-content-checked' : '']"
          @click="this.showDeveloper"
        >
          개발자 소개
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideDeveloper from "./TabFooterSide/SideDeveloper";
import SideImgUpdate from "./TabFooterSide/SideImgUpdate";
import "../../style/bar.scss";
import "../../style/defaultTransition.scss";

export default {
  name: "TabFooter",
  components: {
    SideDeveloper,
    SideImgUpdate,
  },
  data() {
    return {
      imgUpdateIsShowing: false,
      developerIsShowing: false,
    };
  },
  methods: {
    showImgUpdate() {
      this.developerIsShowing = false;
      this.imgUpdateIsShowing = !this.imgUpdateIsShowing;
    },
    showDeveloper() {
      this.imgUpdateIsShowing = false;
      this.developerIsShowing = !this.developerIsShowing;
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-footer {
  bottom: 0;
}
</style>
