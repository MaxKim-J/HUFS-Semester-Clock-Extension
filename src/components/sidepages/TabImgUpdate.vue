<template>
  <div class="tab-side-box">
    <div class="tab-side-box-title">배경화면 수정</div>
    <div class="tab-img-update-box">
      <div class="tab-side-box-content">사진 업로드</div>
      <input
        type="file"
        class="tab-img-update-input"
        @change="handleFileUpload"
      />
      <div class="tab-side-box-content-small">
        파일 업로드는 3MB 까지 가능합니다. 스크린 비율에 맞는 직사각형 사진을
        권장해요..!
      </div>
    </div>
    <div class="tab-img-update-box">
      <div class="tab-side-box-content">
        기본 배경화면
      </div>
      <div class="tab-img-update-default">
        <span
          class="tab-img-update-default-box"
          @click="handleChangeImg('seoul')"
          >서울</span
        >
        <span
          class="tab-img-update-default-box"
          @click="handleChangeImg('global')"
          >글로벌</span
        >
      </div>
      <div class="tab-side-box-content-small">
        낮/밤 다른 사진이 표시됩니다__📷 Photo by Kihyun Lim, Sangyoung Oh
      </div>
    </div>
  </div>
</template>

<script>
import "../../style/sidePage.scss";
import {
  getSeoulImgFromStorage,
  getGlobalImgFromStorage,
} from "../../services/storageAccess";
import { imageToString } from "../../utils/imageToString";

export default {
  methods: {
    fileToData() {
      this.isFileSizeValid(event.target.files[0]);
      return imageToString(event.target.files[0]);
    },
    isFileSizeValid(file) {
      if (file.size && file.size > 3000000) {
        alert("배경화면 이미지는 3MB를 초과할 수 없습니다");
        throw new Error("이미지 파일 용량 초과");
      }
    },
    async handleFileUpload() {
      try {
        const uploadImg = await this.fileToData();
        this.$store.commit("UPDATE_BACKGROUND_IMG", {
          userBackgroundImg: uploadImg,
        });
      } catch (e) {
        console.log(e.message);
      }
    },
    handleChangeImg(key) {
      if (key == "seoul") {
        getSeoulImgFromStorage().then((data) => {
          this.$store.commit("UPDATE_BACKGROUND_IMG", data);
        });
      } else if (key === "global") {
        getGlobalImgFromStorage().then((data) => {
          this.$store.commit("UPDATE_BACKGROUND_IMG", data);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-img-update-box {
  margin-bottom: 15px;
  .tab-img-update-input {
    margin-top: 7px;
  }
  .tab-img-update-default {
    margin-top: 10px;
    .tab-img-update-default-box {
      cursor: pointer;
      width: 10px;
      font-size: 14px;
      border: solid 1px white;
      padding: 2px 10px;
    }
    .tab-img-update-default-box:hover {
      background-color: white;
      color: black;
    }
  }
}
</style>
