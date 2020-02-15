<template>
  <div class="popup">
    <h3>외대 종강시계</h3>
    <div>version : 1.0.1</div>
    <div>새 탭을 생성하시면 익스텐션이 동작합니다.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "netmarbleM";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.1/netmarbleM.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

.popup {
  width: 250px;
  font-family: "netmarbleM";
}
</style>
