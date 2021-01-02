<template>
  <div class="tab-side-box">
    <div class="tab-side-box-title">코로나19 현황</div>
    <div class="tab-side-box-content" >
      {{isCityMode ? "주요 도시별 확진자 증감 현황입니다." : "5일간의 국내 코로나 19 신규 확진자 추이입니다."}}
      <span class="tab-side-box-sub-btn" @click="this.changeMode"
        >{{ isCityMode ? "신규 확진자 추이 보기" : "주요 도시별 확진자 증감 현황 보기" }} </span
      >
    </div>
    <div v-if="!isCityMode" class="tab-side-box-content" >
      <LineChart 
        v-if="totalData.length"
        :chart-data="totalData" 
        :width="450"
        :height="120"
      />
      <div class="tab-alarm">
        *3시간 주기로 업데이트됩니다.
      </div>
    </div>
  </div>
</template>

<script>
import "../../../style/sidePage.scss";
import { getCovidInfoFromDB } from "../../../services/firebaseDbAccess";
import LineChart from "../../LineChart"
import {
  localStorageGet,
  localStorageSet,
} from "../../../services/localStorageAccess";

export default {
  name:'SideCoronaStatus',
  components:{
    LineChart,
  },
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
        this.totalData = [...total].reverse().slice(0,5).reverse()
        this.cityData = city.slice(0,9)
        this.timeStatus = cityTimeStatus
      } else {
        getCovidInfoFromDB()
          .then((data) => {
            const {city, total, cityTimeStatus} = data
            this.totalData = [...total].reverse().slice(0,5).reverse()
            this.cityData = city.slice(0,9)
            this.timeStatus = cityTimeStatus
            localStorageSet({covidInfo:data})
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

<style lang="scss" scoped>
.tab-alarm {
  margin: 0;
}
</style>