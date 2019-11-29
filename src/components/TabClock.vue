<template>
  <div class="main__clock">
    <div>종강 {{ this.semesterExpired | moment("YYYY-MM-DD") }}</div>
    <div>오늘 {{ this.today | moment("YYYY-MM-DD") }}</div>
    <div>종강까지 남은시간 {{ this.gapDay }}일 {{ this.gapHour }}시간 {{ this.gapMinute }}분 {{ this.gapSeconds }}초</div>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  data () {
    return {
      semesterExpired: new Date(2019, 11, 20, 11, 59, 59),
      today: new Date(),
      gapDay: 0,
      gapHour: 0,
      gapMinute: 0,
      gapSeconds: 0
    }
  },
  methods: {
    getDueDates () {
      const today = new Date()
      const gapTime = parseInt((this.semesterExpired - today) / 1000)
      this.getLeftTime(gapTime)
    },
    getLeftTime (time) {
      this.gapSeconds = time % 60
      this.gapMinute = parseInt((time / 60) % 60)
      this.gapHour = parseInt((time / (60 * 60)) % 24)
      this.gapDay = parseInt((time / (3600 * 24)) % 24)
    }
  },

  created () {
    // todo 추후에 로딩 화면 삽입
    this.interval = setInterval(() => this.getDueDates(), 1000)
  }
}
</script>

<style>
</style>
