<template>
  <div class="tab-clock">
    <div class="tab-clock-main">
      <div class="tab-clock-main-title">{{this.semesterInfo.id}}학기 {{this.semesterInfo.act}}까지</div>
      <div
        class="tab-clock-main-contents"
      >{{ this.daysCalculated }}일 {{ this.hoursCalculated }}시간 {{ this.minutesCalculated }}분 {{ this.secondsCalculated }}초</div>
      <div class="tab-clock-main-title">남았습니다</div>
      <div
        class="tab-clock-main-btn"
        v-if="hadSeason === true"
        @click="this.drawNextSemester"
      >계절학기를 안들어요!</div>
    </div>
    <div class="tab-clock-info">오늘 : {{ this.today | moment("YYYY년 MM월 DD일 h:mm a") }}</div>
  </div>
</template>

<script>
import {
  CURRENT_SEMESTER_INFO,
  SEASONAL_SEMESTER_INFO,
  NEXT_SEMESTER_INFO
} from "../utils/SemesterInfo.js";

import {
  getDistanceSeconds,
  getDistanceMinutes,
  getDistanceHours,
  getDistanceDays
} from "../utils/TimeDistanceCalculator.js";

export default {
  name: "TabClock",
  data() {
    return {
      semesterInfo: null,
      hadSeason: null,
      today: new Date(),
      gapTime: 0
    };
  },
  computed: {
    secondsCalculated() {
      return getDistanceSeconds(this.gapTime);
    },
    minutesCalculated() {
      return getDistanceMinutes(this.gapTime);
    },
    hoursCalculated() {
      return getDistanceHours(this.gapTime);
    },
    daysCalculated() {
      return getDistanceDays(this.gapTime);
    }
  },
  methods: {
    clockValid() {
      const today = new Date();
      if (today < CURRENT_SEMESTER_INFO.due) {
        this.semesterInfo = CURRENT_SEMESTER_INFO;
      } else if (today > CURRENT_SEMESTER_INFO.due) {
        this.semesterInfo = SEASONAL_SEMESTER_INFO;
        this.hadSeason = true;
      }
    },
    getDueDates() {
      const today = new Date();
      this.gapTime = parseInt(this.semesterInfo.due - today);
    },
    getNowDates() {
      this.today = new Date();
    },
    drawNextSemester() {
      this.hadSeason = false;
      this.semesterInfo = NEXT_SEMESTER_INFO;
    }
  },
  created() {
    this.clockValid();
    this.getDueDates();
  },
  mounted() {
    this.interval = setInterval(() => {
      this.getDueDates();
      this.getNowDates();
    }, 1000);
  }
};
</script>

<style lang="scss" scoped></style>
