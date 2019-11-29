<template>
  <div class="tab">
    <div class="tab-main">
      <tab-header></tab-header>
      <tab-clock></tab-clock>
    </div>
    <div class="background">
      <img src="http://ppcdn.500px.org/75319705/1991f76c0c6a91ae1d23eb94ac5c7a9f7e79c480/2048.jpg" />
    </div>
  </div>
</template>

<script>
import TabClock from "../components/TabClock.vue";
import TabHeader from "../components/TabHeader.vue";

export default {
  name: "App",
  components: {
    TabClock,
    TabHeader
  }
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Noto Sans KR", sans-serif;
  color: white;
  text-shadow: 1px 0px 4px rgba(150, 150, 150, 1);
}

.tab {
  width: 100%;
  .background {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    img {
      width: 100%;
      height: auto;
    }
  }
  .tab-main {
    width: 50%;
    margin: 0 auto;
  }
}
</style>
