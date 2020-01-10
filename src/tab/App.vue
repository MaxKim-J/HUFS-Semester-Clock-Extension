<template>
  <div class="tab" :style="{'background-image' : 'url('+backgroundImg+')'}">
    <div class="tab-main">
      <tab-clock></tab-clock>
      <tab-middle></tab-middle>
      <tab-hotlinks></tab-hotlinks>
      <tab-footer @upload="updateBackgroundImg"></tab-footer>
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
    updateBackgroundImg(imgFile) {
      this.backgroundImg = imgFile;
      this.saveBackgroundImg();
    },
    saveBackgroundImg() {
      chrome.storage.local.set(
        { backgroundImg: this.backgroundImg },
        function() {
          console.log("배경화면 이미지가 저장됐습니다");
        }
      );
    },
    getBackgroundImg() {
      return new Promise(function(resolve, reject) {
        chrome.storage.local.get(["backgroundImg"], function(result) {
          resolve(result);
        });
      });
    },
    drawBackgroundImg() {
      this.getBackgroundImg().then(data => {
        if (data.backgroundImg) {
          this.backgroundImg = data.backgroundImg;
        } else {
          this.backgroundImg = "../img/default_image.jpg";
        }
      });
    }
  },
  created() {
    this.drawBackgroundImg();
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

.tab {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  // background-size: 100% 110%;
}
</style>
