<template>
  <div class="tab-hotlinks">
    <div class="tab-hotlinks-link" v-for="hotlink in this.hotlinkData" :key="hotlink.id">
      <a :href="hotlink.link">
        <div class="tab-hotlinks-link-title">{{hotlink.name}}</div>
      </a>
    </div>
  </div>
</template>

<script>
import { HOTLINK } from '../utils/HotLinks.js';

export default {
  name: 'tabHotlinks',
  data () {
    return {
      hotlinkData: HOTLINK
    }
  }
}
</script>

<style>
</style>
