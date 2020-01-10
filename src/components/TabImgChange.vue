<template>
  <div class="tab-img-change tab-side-box">
    <div class="tab-side-box-title">배경화면 바꾸기</div>
    <div class="tab-side-box-content">사진 업로드</div>
    <input type="file" @change="handleFileUpload()" />
  </div>
</template>

<script>
import "../../sidePage.scss";
export default {
  data() {
    return {
      backgroundImgFile: ""
    };
  },
  methods: {
    handleFileUpload() {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);
      fileReader.onload = function(e) {
        this.backgroundImgFile = e.target.result;
        console.log(this.backgroundImgFile);
      };
      this.$emit("upload", this.backgroundImgFile);
    }
  }
};
</script>

<style>
</style>