<template>
  <div class="tab">
    <div class="tab-main">
      <tab-header></tab-header>
      <tab-clock></tab-clock>
    </div>
  </div>
</template>

<script>
import TabClock from '../components/TabClock.vue';
import TabHeader from '../components/TabHeader.vue';

export default {
  name: 'App',
  components: {
    TabClock,
    TabHeader
  }
}
</script>

<style scoped lang="scss">
* {
  font-family: "Noto Sans KR", sans-serif;
}
.tab {
  .tab-main {
    width: 50%;
    margin: 0 auto;
  }
}
</style>
