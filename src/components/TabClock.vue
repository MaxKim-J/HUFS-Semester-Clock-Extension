<template>
  <div class="tab-clock">
    <div class="tab-clock-main">
      <div class="tab-clock-main-title">{{this.semesterInfo}}학기 종강까지</div>
      <div
        class="tab-clock-main-contents"
      >{{ this.daysCalculated }}일 {{ this.hoursCalculated }}시간 {{ this.minutesCalculated }}분 {{ this.secondsCalculated }}초</div>
      <div class="tab-clock-main-title">남았습니다</div>
    </div>
    <div class="tab-clock-info">종강 : {{ this.semesterExpired | moment("YYYY년 MM월 DD일") }}</div>
    <div class="tab-clock-info">오늘 : {{ this.today | moment("YYYY년 MM월 DD일") }}</div>
  </div>
</template>

<script>
import { SEMESTER_INFO, SEMESTER_DUE } from '../utils/SemesterInfo.js';

export default {
  name: 'TabClock',
  data () {
    return {
      semesterExpired: SEMESTER_DUE,
      semesterInfo: SEMESTER_INFO,
      today: new Date(),
      gapTime: 0
    }
  },
  computed: {
    secondsCalculated () {
      return this.addZero(parseInt((this.gapTime / 1000) % 60))
    },
    minutesCalculated () {
      return this.addZero(parseInt((this.gapTime / (1000 * 60)) % 60))
    },
    hoursCalculated () {
      return this.addZero(parseInt((this.gapTime / (1000 * 60 * 60)) % 24))
    },
    daysCalculated () {
      return this.addZero(parseInt(this.gapTime / (1000 * 60 * 60 * 24)))
    }
  },
  methods: {
    getDueDates () {
      const today = new Date()
      this.gapTime = parseInt(this.semesterExpired - today)
    },
    addZero (num) {
      if (num < 10) {
        return `0${num}`
      } else {
        return `${num}`
      }
    }
  },
  created () {
    this.getDueDates()
  },
  mounted () {
    this.interval = setInterval(this.getDueDates, 1000)
  }
}
</script>

<style lang="scss" scoped></style>
