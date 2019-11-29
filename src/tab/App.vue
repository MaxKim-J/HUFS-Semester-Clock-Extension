<template>
  <div class="tab">
    <div class="tab-main">
      <tab-clock></tab-clock>
    </div>
  </div>
</template>

<script>
import TabClock from '../components/TabClock.vue';

export default {
  name: 'App',
  components: {
    TabClock
  }
}
</script>

<style scoped lang="scss">
</style>
