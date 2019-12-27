<template>
  <div class="tab-header">
    <div class="tab-header-content">
      <div class="tab-header-content-username">김종혁 님,</div>
      <div class="tab-header-content-message">{{this.greetingMessages[this.INDEXNUM].message}}</div>
      <div class="tab-header-content-hotlinks">
        <div
          class="tab-header-content-hotlinks-link"
          v-for="hotlink in this.hotlinkData"
          :key="hotlink.id"
        >
          <a :href="hotlink.link">
            <v-icon x-large>{{ hotlink.icon }}</v-icon>
          </a>
          <div class="tab-header-content-hotlinks-link-title">{{hotlink.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HOTLINK } from '../utils/HotLinks.js';
import { GREETINGS } from '../utils/GreetingsMessage.js';

export default {
  name: 'tabHeader',
  data () {
    return {
      INDEXNUM: 0,
      hotlinkData: HOTLINK,
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
