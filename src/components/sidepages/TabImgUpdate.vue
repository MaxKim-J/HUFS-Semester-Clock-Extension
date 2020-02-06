<template>
  <div class="tab-side-box">
    <div class="tab-side-box-title">배경화면 수정</div>
    <div class="tab-img-update-box">
      <div class="tab-side-box-content">사진 업로드</div>
      <input type="file" class="tab-side-box-content" @change="handleFileUpload" />
      <div class="tab-side-box-content-small">파일 업로드는 3MB 까지 가능합니다. 스크린 비율에 맞는 사진을 권장해요..!</div>
    </div>
    <div class="tab-img-update-box">
      <div class="tab-side-box-content">기본 배경화면</div>
      <span class="tab-img-update-default" @click="handleChangeImg('seoul')">서울</span>
      <span class="tab-img-update-default" @click="handleChangeImg('global')">글로벌</span>
    </div>
  </div>
</template>

<script>
import "../../style/sidePage.scss";

export default {
  methods: {
    fileToData() {
      return new Promise((resolve, reject) => {
        this.fileSizeValid(event.target.files[0]);
        let fileReader = new FileReader();
        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = () => resolve(fileReader.result);
      });
    },
    handleFileUpload() {
      this.fileToData()
        .then(data => {
          this.$store.commit("UPDATE_BACKGROUND_IMG", { backgroundImg: data });
        })
        .catch(() => {
          alert("배경화면 이미지는 3MB를 초과할 수 없습니다");
        });
    },
    fileSizeValid(file) {
      if (file.size > 3000000) {
        throw new Error("이미지 파일 용량 초과");
      }
    },
    handleChangeImg(key) {
      if (key == "seoul") {
        this.$store.commit("UPDATE_BACKGROUND_IMG", {
          backgroundImg: "../../img/default_image_seoul.jpg"
        });
      } else if (key === "global") {
        console.log("바꿈");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-img-update-box {
  margin-bottom: 20px;
}
.tab-img-update-default {
  cursor: pointer;
  width: 10px;
  margin-top: 10px;
  font-size: 14px;
  border: solid 1px white;
  padding: 2px 10px;
}
.tab-img-update-box-checked {
  background-color: white;
  color: black;
}
</style>