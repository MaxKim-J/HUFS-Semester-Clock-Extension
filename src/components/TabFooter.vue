<template>
  <div class="tab-footer">
    <div class="tab-footer-boxes">
      <div class="tab-footer-box-wrap tab-footer-box-left-wrap">
        <div class="tab-footer-box tab-footer-box-left" v-if="this.imgUpdateIsShowing">
          <div class="tab-side-box">
            <div class="tab-side-box-title">배경화면 바꾸기</div>
            <div class="tab-side-box-content">사진 업로드</div>
            <div class="tab-side-box-content">파일 업로드는 3MB 까지 가능합니다</div>
            <input type="file" @change="fileToData" />
          </div>
        </div>
      </div>
      <div class="tab-footer-box-wrap tab-footer-box-right-wrap">
        <div class="tab-footer-box tab-footer-box-right" v-if="this.developerIsShowing">
          <div class="tab-side-box">
            <div class="tab-side-box-title">개발자 소개</div>
            <div class="tab-side-box-content">서울캠에서 융소를 이중하는 학생입니다</div>
            <div class="tab-side-box-content">
              <a href="https://github.com/MaxKim-J/hufs-semester-clock-extension">깃헙 레포</a>
              <div>모든 종류의 커밋 환영합니다!</div>
            </div>
            <div class="tab-footer-content">이메일 : hwaseen@gmail.com</div>
          </div>
        </div>
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
import TabImgChange from "./TabImgChange";
import "../../sidePage.scss";

export default {
  components: {},
  data() {
    return {
      imgUpdateIsShowing: false,
      developerIsShowing: false,
      backgroundImgFile: "없음"
    };
  },
  methods: {
    showImgUpdate() {
      this.imgUpdateIsShowing = !this.imgUpdateIsShowing;
    },
    showDeveloper() {
      this.developerIsShowing = !this.developerIsShowing;
    },
    handleFileUpload() {
      return new Promise((resolve, reject) => {
        this.fileSizeValid(event.target.files[0]);
        let fileReader = new FileReader();
        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = () => resolve(fileReader.result);
      });
    },
    fileToData() {
      this.handleFileUpload()
        .then(data => {
          this.backgroundImgFile = data;
          this.$emit("upload", this.backgroundImgFile);
        })
        .catch(() => {
          alert("배경화면 이미지는 3MB를 초과할 수 없습니다");
        });
    },
    fileSizeValid(file) {
      if (file.size > 3000000) {
        throw new Error("이미지 파일 용량 초과");
      }
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
      .tab-footer-box {
        width: 500px;
        height: 150px;
        background-color: black;
        opacity: 0.7;
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
      transition: font-size 1s;
    }
    .tab-footer-content:hover {
      font-size: 17px;
    }
  }
}
</style>