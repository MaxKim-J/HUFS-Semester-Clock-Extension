<template>
  <transition name="fadeMain" v-if="backgroundImgLoading">
    <div class="tab" :style="{ 'background-image': 'url(' + backgroundImg + ')' }">
      <div class="tab-background"></div>
      <tab-header class="tab-header tab-antialiasing"></tab-header>
      <div class="tab-main-wrap tab-antialiasing" v-if="semesterInfoLoading">
        <div class="tab-main">
          <tab-clock></tab-clock>
          <tab-middle></tab-middle>
          <tab-hotlinks></tab-hotlinks>
        </div>
      </div>
      <div v-if="loadingFailed" class="tab-warning">😅 wifi 연결을 확인하고 새로고침을 눌러주세요!</div>
      <tab-footer class="tab-footer tab-antialiasing"></tab-footer>
    </div>
  </transition>
</template>

<script>
import TabClock from "../components/TabClock.vue";
import TabMiddle from "../components/TabMiddle.vue";
import TabHotlinks from "../components/TabHotlinks.vue";
import TabFooter from "../components/TabFooter.vue";
import TabHeader from "../components/TabHeader.vue";
import { localStorageRemove } from "../services/localStorageAccess";
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
      backgroundImgLoading: false,
      semesterInfoLoading: false,
      loadingFailed: false
    };
  },
  computed: {
    backgroundImg() {
      return this.$store.state.backgroundImg;
    }
  },
  methods: {
    async getBackgroundImg() {
      await this.$store.dispatch("getBackgroundImg");
    },
    async getSemesterInfos() {
      await this.$store.dispatch("getSemesterInfos");
      this.semesterInfoLoading = true;
    },
    async getUserInfo() {
      await this.$store.dispatch("getUserInfo");
    }
  },
  created() {
    localStorageRemove(["notificationInfo", "weatherInfo"]);
    if (navigator.onLine === false) {
      this.getBackgroundImg().then(() => {
        this.backgroundImgLoading = true;
      });
      this.loadingFailed = true;
    } else {
      Promise.all([
        this.getBackgroundImg(),
        this.getSemesterInfos(),
        this.getUserInfo()
      ]).then(() => {
        this.backgroundImgLoading = true;
      });
    }
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
  align-items: center;
  justify-content: center;
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
  .tab-main-wrap {
    z-index: 1;
    .tab-main {
      text-align: center;
      font-size: 20px;
    }
  }
  .tab-warning {
    z-index: 1;
    font-size: 20px;
  }
  .tab-footer {
    z-index: 2;
  }
  .tab-antialiasing {
    transform: rotate(-0.06deg);
  }
}
</style>
