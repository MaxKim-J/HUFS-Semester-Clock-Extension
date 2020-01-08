<template>
  <div class="tab">
    <div class="background">
      <img :src="`${backgroundImg}`" />
    </div>
    <div class="tab-main">
      <tab-clock></tab-clock>
      <tab-middle></tab-middle>
      <tab-hotlinks></tab-hotlinks>
      <tab-footer @upload="backgroundUpdated"></tab-footer>
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
  },
  data() {
    return {
      backgroundImg: ""
    };
  },
  methods: {
    backgroundUpdated(imgFile) {
      this.backgroundImg = imgFile;
    }
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
    color: white;
  }
}

img {
  width: 500px;
}
</style>
