<template>
  <div class="tab-side-box">
    <div class="tab-side-box-title">개발자 소개</div>
    <div class="tab-side-box-content-name">### Max Kim</div>
    <div class="tab-side-box-content">
      외대 서울캠에서 융복합소프트웨어를 이중하고 있구요💻
    </div>
    <div class="tab-side-box-content">
      자바스크립트로 서비스 개발하는 것을 넘넘 좋아합니당!🔥
    </div>
    <div class="tab-side-box-content">
      종강시계에 대한 피드백, 프로젝트/외주 제안은 이메일로 연락주세요!
    </div>
    <div class="tab-side-box-content-icons">
      <a class="tab-box-icon" href="mailto:hwaseen@gmail.com">
        <img src="https://img.icons8.com/fluent/48/000000/gmail.png" />
      </a>
      <a class="tab-box-icon" href="https://github.com/MaxKim-J">
        <img src="https://img.icons8.com/color/48/000000/github-2.png" />
      </a>
      <a class="tab-box-icon" href="https://maxkim-j.github.io/">
        <img src="https://img.icons8.com/color/48/000000/blog.png" />
      </a>
    </div>
    <div class="tab-side-box-content-small">
      HUFS Semester Clock 1.4.0 © Max Kim. 2020
    </div>
  </div>
</template>

<script>
import "../../style/sidePage.scss";

export default {};
</script>

<style lang="scss" scoped>
.tab-side-box-content-name {
  margin: 5px 0px 3px 0px;
  font-size: 18px;
}
.tab-side-box-content-icons {
  margin-top: 15px;
  .tab-box-icon {
    margin-right: 10px;
    cursor: pointer;
    img {
      width: 30px;
      height: auto;
    }
  }
}
</style>
