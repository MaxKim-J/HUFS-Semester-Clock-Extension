<template>
  <div class="tab-side-box">
    <div class="tab-side-box-title">배경화면 수정</div>
    <div class="tab-side-box-content">사진 업로드</div>
    <input type="file" class="tab-side-box-content" @change="fileToData" />
    <div class="tab-side-box-content-small">파일 업로드는 3MB 까지 가능합니다</div>
  </div>
</template>

<script>
import "../../style/sidePage.scss";

export default {
  data() {
    return {
      backgroundImgFile: null
    };
  },
  methods: {
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

<style>
</style>