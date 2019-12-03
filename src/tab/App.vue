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
img {
  width: 500px;
}
</style>
