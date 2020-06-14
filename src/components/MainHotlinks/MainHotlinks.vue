<template>
  <div class="tab-hotlinks">
    <div
      class="tab-hotlinks-link"
      v-for="hotlink in this.hotlinkData"
      :key="hotlink.id"
    >
      <a :href="hotlink.link">
        <div class="tab-hotlinks-icon">{{ hotlink.icon }}</div>
        <div class="tab-hotlinks-link-title">{{ hotlink.name }}</div>
      </a>
    </div>
  </div>
</template>

<script>
import { HOTLINK } from "../../config/hotLinks.js";

export default {
  name: "MainHotlinks",
  data() {
    return {
      hotlinkData: HOTLINK,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/global.scss";

.tab-hotlinks {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  .tab-hotlinks-icon {
    font-size: $xlarge;
    margin-bottom: 10px;
  }
  .tab-hotlinks-link-title {
    margin: 0px 20px;
    font-size: $small;
  }
}
</style>
