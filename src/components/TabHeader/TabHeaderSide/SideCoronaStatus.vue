<template>
  <div class="tab-side-box">
    <div class="tab-side-box-title">코로나19 현황</div>
    <div class="tab-side-box-content" >
      {{isCityMode ? "주요 도시별 확진자 증감 현황입니다." : "5일간의 신종 코로나 바이러스 신규 확진자 추이입니다."}}
      <span class="tab-side-box-sub-btn" @click="this.changeMode"
        >{{ isCityMode ? "신규 확진자 추이 보기" : "주요 도시별 확진자 증감 현황 보기" }} </span
      >
    </div>
  </div>
</template>

<script>
import "../../../style/sidePage.scss";

export default {
  name:'SideCoronaStatus',
  data: () => ({
    isCityMode: false,
  }),
  methods: {
    changeMode() {
      this.isCityMode = !this.isCityMode
    }
  }
}
</script>

<style>

</style>