<template>
  <transition name="fadeMain" v-if="mainIsShowing">
    <div class="tab" :style="{'background-image' : 'url('+backgroundImg+')'}">
      <div class="tab-background"></div>
      <tab-header class="tab-header"></tab-header>
      <div class="tab-main">
        <tab-clock></tab-clock>
        <tab-middle></tab-middle>
        <tab-hotlinks></tab-hotlinks>
      </div>
      <tab-footer class="tab-footer"></tab-footer>
    </div>
  </transition>
</template>

<script>
import TabClock from "../components/TabClock.vue";
import TabMiddle from "../components/TabMiddle.vue";
import TabHotlinks from "../components/TabHotlinks.vue";
import TabFooter from "../components/TabFooter.vue";
import TabHeader from "../components/TabHeader.vue";
import "../style/initialize.scss";
import "../style/defaultTransition.scss";

export default {
  name: "App",
  components: {
    TabClock,
    TabMiddle,
    TabHotlinks,
    TabFooter,
    TabHeader
  },
  data() {
    return {
      mainIsShowing: false
    };
  },
  computed: {
    backgroundImg() {
      return this.$store.state.userBackgroundImg;
    }
  },
  methods: {
    getBackgroundImg() {
      this.$store.dispatch("getBackgroundImg");
    }
  },
  created() {
    this.getBackgroundImg();
    setInterval(() => {
      this.mainIsShowing = true;
    }, 1000);
  }
};
</script>

<style lang="scss">
.tab {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  display: flex;
  flex-direction: column;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.77);
  .tab-background {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.35);
    position: absolute;
  }
  .tab-header {
    z-index: 2;
  }
  .tab-main {
    text-align: center;
    margin-top: 250px;
    z-index: 1;
  }
  .tab-footer {
    z-index: 2;
  }
}
</style>
