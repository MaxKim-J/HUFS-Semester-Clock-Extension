<template>
  <div class="tab-footer">
    <div class="tab-footer-boxes">
      <div class="tab-footer-box-wrap tab-footer-box-left-wrap">
        <div class="tab-footer-box tab-footer-box-left" v-if="this.imgUpdateIsShowing">
          <div class="tab-footer-box-imgupdate">
            <div>이미지 수정</div>
            <div>이미지를 찾아보세요</div>
            <input type="file" />
          </div>
        </div>
      </div>
      <div class="tab-footer-box-wrap tab-footer-box-right-wrap">
        <div class="tab-footer-box tab-footer-box-right" v-if="this.developerIsShowing">나 김종혁이요!</div>
      </div>
    </div>
    <div class="tab-footer-contents">
      <div class="tab-footer-contents-left">
        <div class="tab-footer-content" @click="this.showImgUpdate">배경화면 수정</div>
      </div>
      <div class="tab-footer-contents-right">
        <div class="tab-footer-content" @click="this.showDeveloper">개발한 사람</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUpdateIsShowing: false,
      developerIsShowing: false
    };
  },
  methods: {
    showImgUpdate() {
      this.imgUpdateIsShowing = !this.imgUpdateIsShowing;
      console.log(this.imgUpdateIsShowing);
    },
    showDeveloper() {
      this.developerIsShowing = !this.developerIsShowing;
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
      z-index: 10;
      display: flex;
    }
    .tab-footer-box {
      width: 500px;
      height: 150px;
      background-color: grey;
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
    }
  }
}
</style>