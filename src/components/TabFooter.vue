<template>
  <div class="tab-bar tab-footer">
    <div class="tab-bar-boxes">
      <div class="tab-bar-box-wrap tab-footer-box-left-wrap">
        <div class="tab-bar-box tab-bar-box-left" v-if="this.imgUpdateIsShowing">
          <tab-img-update @upload="this.handleUpload"></tab-img-update>
        </div>
      </div>
      <div class="tab-bar-box-wrap tab-bar-box-right-wrap">
        <div class="tab-bar-box tab-bar-box-right" v-if="this.developerIsShowing">
          <tab-developer></tab-developer>
        </div>
      </div>
    </div>
    <div class="tab-bar-contents">
      <div class="tab-bar-contents-left">
        <div
          class="tab-bar-content"
          :class="[this.imgUpdateIsShowing ? 'tab-bar-content-checked' : '']"
          @click="this.showImgUpdate"
        >배경화면 수정</div>
      </div>
      <div class="tab-bar-contents-center">
        <div class="tab-bar-content-schedule">학사일정고고</div>
      </div>
      <div class="tab-bar-contents-right">
        <div
          class="tab-bar-content"
          :class="[this.developerIsShowing ? 'tab-bar-content-checked' : '']"
          @click="this.showDeveloper"
        >개발자 소개</div>
      </div>
    </div>
  </div>
</template>

<script>
import TabDeveloper from "../components/sidepages/TabDeveloper";
import TabImgUpdate from "../components/sidepages/TabImgUpdate";
import "../style/bar.scss";

export default {
  components: {
    TabDeveloper,
    TabImgUpdate
  },
  data() {
    return {
      imgUpdateIsShowing: false,
      developerIsShowing: false
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
    handleUpload(imgFile) {
      this.$emit("upload", imgFile);
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-footer {
  bottom: 0;
}
</style>