<template>
  <div class="tab">
    <p>외대 종강시계 메인 페이지입니다!!🔥</p>
    <p>개발중...🔥</p>
    <tab-clock></tab-clock>
  </div>
</template>

<script>
import TabClock from '../components/TabClock.vue';

export default {
  name: 'App',
  components: {
    TabClock
  },
  data () {
    return {
      message: '외대종강시계!!'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
