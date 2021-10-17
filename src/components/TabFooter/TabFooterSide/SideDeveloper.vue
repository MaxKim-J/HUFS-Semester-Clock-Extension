<template>
  <div class="tab-side-box">
    <div class="tab-side-box-title">개발자 소개</div>
    <div class="tab-side-box-content-name">### Max Kim (빅융소맨)</div>
    <div class="tab-side-box-content">
      외대 서울캠에서 융복합소프트웨어를 이중하고 있는 고학번입니다! 현재 종강시계 2.0을 만들면서 취준하는 중이에요.
    </div>
    <div class="tab-side-box-content">
      종강시계에 대한 피드백은 하단 이메일로 연락주세요!
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
      HUFS Semester Clock 1.5.2 © Max Kim. 2021
    </div>
  </div>
</template>

<script>
import "../../../style/sidePage.scss";

export default {
  name: "SideDeveloper",
};
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
