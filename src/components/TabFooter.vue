<template>
  <div class="tab-footer">
    <div class="tab-footer-boxes">
      <div class="tab-footer-box-wrap tab-footer-box-left-wrap">
        <div class="tab-footer-box tab-footer-box-left" v-if="this.imgUpdateIsShowing">
          <tab-img-update @upload="handleUpload"></tab-img-update>
        </div>
      </div>
      <div class="tab-footer-box-wrap tab-footer-box-right-wrap">
        <div class="tab-footer-box tab-footer-box-right" v-if="this.developerIsShowing">
          <tab-developer></tab-developer>
        </div>
      </div>
    </div>
    <div class="tab-footer-contents">
      <div class="tab-footer-contents-left">
        <div
          class="tab-footer-content"
          :class="[this.imgUpdateIsShowing ? 'tab-footer-content-checked' : '']"
          @click="this.showImgUpdate"
        >배경화면 수정</div>
      </div>
      <div class="tab-footer-contents-right">
        <div
          class="tab-footer-content"
          :class="[this.developerIsShowing ? 'tab-footer-content-checked' : '']"
          @click="this.showDeveloper"
        >개발자 소개</div>
      </div>
    </div>
  </div>
</template>

<script>
import TabDeveloper from "../components/sidepages/TabDeveloper";
import TabImgUpdate from "../components/sidepages/TabImgUpdate";

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
  position: fixed;
  bottom: 0;
  width: 100%;
  .tab-footer-boxes {
    width: 100%;
    display: flex;
    .tab-footer-box-wrap {
      width: 50%;
      display: flex;
      .tab-footer-box {
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        border-radius: 5px;
      }
    }
    .tab-footer-box-right-wrap {
      justify-content: flex-end;
      .tab-footer-box-right {
        margin-bottom: 10px;
        margin-right: 20px;
      }
    }
    .tab-footer-box-left-wrap {
      justify-content: flex-start;
      .tab-footer-box-left {
        margin-bottom: 10px;
        margin-left: 20px;
      }
    }
    .tab-footer-box-contents {
      margin: 10px;
    }
  }
  .tab-footer-contents {
    display: flex;
    width: 100%;
    .tab-footer-contents-left {
      display: flex;
      width: 50%;
    }
    .tab-footer-contents-right {
      display: flex;
      width: 50%;
      justify-content: flex-end;
    }
    .tab-footer-content {
      font-size: 16px;
      margin: 10px 20px;
      cursor: pointer;
      opacity: 0.7;
    }
    .tab-footer-content-checked {
      opacity: 1;
    }
    .tab-footer-content:hover {
      opacity: 1;
    }
  }
}
</style>