<template>
  <div class="tab">
    <div class="tab-main">
      <tab-clock></tab-clock>
      <tab-middle></tab-middle>
      <tab-hotlinks></tab-hotlinks>
    </div>
    <div class="tab-init">
      <tab-init></tab-init>
    </div>
    <div class="background">
      <img src="http://ppcdn.500px.org/75319705/1991f76c0c6a91ae1d23eb94ac5c7a9f7e79c480/2048.jpg" />
    </div>
  </div>
</template>

<script>
import TabClock from '../components/TabClock.vue';
import TabMiddle from '../components/TabMiddle.vue';
import TabHotlinks from '../components/TabHotlinks.vue';
import TabInit from '../components/TabInit.vue';

export default {
  name: 'App',
  components: {
    TabClock,
    TabMiddle,
    TabHotlinks,
    TabInit
  },
  data () {
    return {
      isUserInit: null
    }
  },
  beforecreated () {
    chrome.storage.local.get(['userInitInput'], function (result) {
      console.log(result)
      this.isUserInit = result.userInitInput
      console.log(this.isUserInit)
    })
  }
}
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
