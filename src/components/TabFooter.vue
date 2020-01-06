<template>
  <div class="tab-footer">
    <div class="tab-footer-contents">
      <div class="tab-footer-contents-left">
        <div class="tab-footer-content">이름,학번 수정</div>
        <div class="tab-footer-content">배경화면 수정</div>
      </div>
      <div class="tab-footer-contents-right">
        <div class="tab-footer-content">개발한 사람</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tab-footer-contents {
  position: fixed;
  display: flex;
  bottom: 0;
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
  }
}
</style>