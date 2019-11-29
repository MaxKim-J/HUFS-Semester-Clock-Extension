<template>
  <div class="tab-clock">
    <div class="tab-clock-main">
      <div class="tab-clock-main-title">{{this.semesterInfo}}학기 종강까지 남은시간</div>
      <div
        class="tab-clock-main-contents"
        ref="mainclock"
        v-cloak
      >{{ this.daysCalculated }}일 {{ this.hoursCalculated }}시간 {{ this.minutesCalculated }}분 {{ this.secondsCalculated }}초</div>
    </div>
    <div class="tab-clock-expired">종강 : {{ this.semesterExpired | moment("YYYY년 MM월 DD일") }}</div>
    <div class="tab-clock-today">오늘 : {{ this.today | moment("YYYY년 MM월 DD일") }}</div>
  </div>
</template>

<script>
export default {
  name: 'TabClock',
  data () {
    return {
      semesterExpired: new Date(2019, 11, 20, 11, 59, 59),
      semesterInfo: '2019-2',
      today: new Date(),
      gapTime: 0
    }
  },
  computed: {
    secondsCalculated () {
      return this.gapTime % 60
    },
    minutesCalculated () {
      return parseInt((this.gapTime / 60) % 60)
    },
    hoursCalculated () {
      return parseInt((this.gapTime / (60 * 60)) % 24)
    },
    daysCalculated () {
      return parseInt((this.gapTime / (3600 * 24)) % 24)
    }
  },
  methods: {
    getDueDates () {
      const today = new Date()
      this.gapTime = parseInt((this.semesterExpired - today) / 1000)
    }
  },
  created () {
    this.getDueDates()
  },
  mounted () {
    this.interval = setInterval(() => this.getDueDates(), 1000)
  }
}
</script>

<style lang="scss" scoped>
.tab-clock {
  .tab-clock-main {
    .tab-clock-main-title {
    }
  }
}
</style>
