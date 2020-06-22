<template>
  <div class="tab-side-box">
    <div class="tab-side-box-title">오늘 뭐먹지</div>
    <div class="tab-side-box-content">
      뭐 드셔야 할지 모르겠다고요? 딱! 정해드립니다.
    </div>
    <div class="random-menu-box" v-if="!this.menuName">
      <span class="tab-side-box-content random-menu-message"
        >🍽 하단의 버튼을 눌러주세요!</span
      >
    </div>
    <div class="random-menu-box" v-else>
      <span class="tab-side-box-content random-menu-figure">오늘</span>
      <span class="tab-side-box-content random-menu">{{ this.menuName }}</span>
      <span class="tab-side-box-content random-menu-figure">어떠세요?</span>
    </div>
    <div
      class="tab-side-box-content random-menu-button"
      @click="this.getRandomMenu"
    >
      🔁 메뉴 뽑기
    </div>
  </div>
</template>

<script>
import "../../../style/sidePage.scss";
import { menuArr } from "../../../config/randomMenuList.js";
import { getRandomArrayIndex } from "../../../utils/RandomArrayIndex.js";
export default {
  name: "SideRandomMenu",
  data() {
    return {
      menuName: "",
    };
  },
  methods: {
    getRandomMenu() {
      const randomIndex = getRandomArrayIndex(menuArr);
      this.menuName = menuArr[randomIndex].name;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../style/global.scss";

.random-menu-box {
  margin: 20px 0px;

  .random-menu-message {
    font-size: $xlarge;
  }
  .random-menu {
    font-size: $xlarge;
    font-weight: 500;
  }
  .random-menu-figure {
    font-size: $medium;
  }
}

.random-menu-button {
  padding: 5px 10px;
  display: inline-block;
  border: 2px solid white;
  cursor: pointer;
  border-radius: 10px;
}
.random-menu-button:hover {
  background-color: white;
  color: black;
}
</style>
