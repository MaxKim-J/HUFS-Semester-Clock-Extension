<template>
  <div class="tab-header">
    <div class="tab-header-content">
      <div class="tab-header-content-username">김종혁 님,</div>
      <div class="tab-header-content-message">오늘도 수고하세요!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabHeader'
}
</script>

<style scoped lang='scss'>
.tab-header {
  .tab-header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    .tab-header-content-username {
      font-size: 30px;
      font-weight: 600;
    }
    .tab-header-content-message {
      font-size: 20px;
    }
  }
}
</style>
