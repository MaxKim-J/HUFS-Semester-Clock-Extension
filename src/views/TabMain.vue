<template>
  <div class="tab-main">
    <tab-clock></tab-clock>
    <tab-middle></tab-middle>
    <tab-hotlinks></tab-hotlinks>
  </div>
</template>

<script>
import TabClock from '../components/TabClock.vue';
import TabMiddle from '../components/TabMiddle.vue';
import TabHotlinks from '../components/TabHotlinks.vue';

export default {
  name: 'TabMain',
  components: {
    TabClock,
    TabMiddle,
    TabHotlinks
  }
}
</script>

<style>
</style>
