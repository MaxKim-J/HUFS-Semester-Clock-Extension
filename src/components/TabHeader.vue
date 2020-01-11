<template>
  <div class="tab-header">
    <div class="tab-header-contents">
      <div class="tab-header-contents-left">
        <div class="tab-header-content">이클래스</div>
        <div class="tab-header-content">학식</div>
      </div>
      <div class="tab-header-contents-center">
        <div class="tab-header-content-title">외대 종강시계</div>
      </div>
      <div class="tab-header-contents-right">
        <div class="tab-header-content">이문동날씨</div>
      </div>
    </div>
  </div>
</template>

<script>
import { GREETINGS } from "../utils/GreetingsMessage.js";

export default {
  name: "tabHeader"
};
</script>

<style scoped lang='scss'>
.tab-header {
  width: 100%;
  position: fixed;
  top: 0;
  .tab-header-contents {
    display: flex;
    width: 100%;
    .tab-header-contents-center {
      display: flex;
      justify-content: center;
      width: 33%;
      .tab-header-content-title {
        font-weight: 700;
      }
    }
    .tab-header-contents-left {
      display: flex;
      width: 33%;
    }
    .tab-header-contents-right {
      display: flex;
      width: 33%;
      justify-content: flex-end;
    }
    .tab-header-content {
      font-size: 16px;
      margin: 10px 20px;
      cursor: pointer;
      transition: font-size 1s;
    }
    .tab-header-content:hover {
      font-size: 17px;
    }
  }
}
</style>
