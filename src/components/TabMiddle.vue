<template>
  <div class="tab-header">
    <div class="tab-header-content">
      <div class="tab-header-content-username">김종혁 님,</div>
      <div class="tab-header-content-message">{{this.greetingMessages[this.INDEXNUM].message}}</div>
    </div>
  </div>
</template>

<script>
import { GREETINGS } from '../utils/GreetingsMessage.js';

export default {
  name: 'tabMiddle',
  data () {
    return {
      INDEXNUM: 0,
      greetingMessages: GREETINGS
    }
  },
  methods: {
    getRandomArrayIndex (arr) {
      return Math.floor(Math.random() * arr.length)
    }
  },
  created () {
    this.INDEXNUM = this.getRandomArrayIndex(this.greetingMessages)
  }
}
</script>

<style scoped lang='scss'>
</style>
