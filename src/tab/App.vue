<template>
  <div class="tab">
    <div class="background">
      <img src="http://ppcdn.500px.org/75319705/1991f76c0c6a91ae1d23eb94ac5c7a9f7e79c480/2048.jpg" />
    </div>
    <div class="tab-main">
      <tab-clock></tab-clock>
      <tab-middle></tab-middle>
      <tab-hotlinks></tab-hotlinks>
      <tab-footer></tab-footer>
    </div>
  </div>
</template>

<script>
import TabClock from "../components/TabClock.vue";
import TabMiddle from "../components/TabMiddle.vue";
import TabHotlinks from "../components/TabHotlinks.vue";
import TabFooter from "../components/TabFooter.vue";

export default {
  name: "App",
  components: {
    TabClock,
    TabMiddle,
    TabHotlinks,
    TabFooter
  }
};
</script>

<style lang="scss">
* {
  font-size: 20px;

  margin: 0;
  padding: 0;

  a,
  a:hover,
  a:active {
    text-decoration: none;
    color: black;
  }
}

img {
  width: 500px;
}
</style>
