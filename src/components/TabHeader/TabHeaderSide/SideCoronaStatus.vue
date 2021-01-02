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
import { getCovidInfoFromDB } from "../../../services/firebaseDbAccess";

import {
  localStorageGet,
  localStorageSet,
} from "../../../services/localStorageAccess";

export default {
  name:'SideCoronaStatus',
  data: () => ({
    isCityMode: false,
    totalData: [],
    cityData: [],
    timeStatus: ''
  }),
  created() {
    localStorageGet(["covidInfo"]).then(data => {
      if(Object.keys(data).length !== 0) {
        const {city, total, cityTimeStatus} = data.covidInfo
        this.totalData = total.reverse().slice(0,5)
        this.cityData = city.slice(0,9)
        this.timeStatus = cityTimeStatus
      } else {
        getCovidInfoFromDB()
          .then((data) => {
            const {city, total, cityTimeStatus} = data
            this.totalData = total.reverse().slice(0,5)
            this.cityData = city.slice(0,9)
            this.timeStatus = cityTimeStatus
            localStorageSet({covidInfo:data})
            console.log(this.totalData, this.cityData)
          }).catch((err) => {
            console.log(err)
            console.error("데이터를 가져올 수 없습니다");
          });
      }
    })
  },
  methods: {
    changeMode() {
      this.isCityMode = !this.isCityMode
    }
  }
}
</script>

<style>

</style>