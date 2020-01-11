<template>
  <div class="tab-clock">
    <div class="tab-clock-main">
      <div
        class="tab-clock-main-title"
      >{{this.semesterInfo.id}}학기 {{this.semesterInfo.act}}({{this.semesterInfo.due | moment("YY년 MM월 DD일")}})까지</div>
      <div class="tab-clock-main-contents">
        <span class="tab-clock-main-contents-time">{{ this.daysCalculated }}</span>
        <span class="tab-clock-main-contents-figure">일</span>

        <span class="tab-clock-main-contents-time">{{ this.hoursCalculated }}</span>
        <span class="tab-clock-main-contents-figure">시간</span>

        <span class="tab-clock-main-contents-time">{{ this.minutesCalculated }}</span>
        <span class="tab-clock-main-contents-figure">분</span>

        <span class="tab-clock-main-contents-time">{{ this.secondsCalculated }}</span>
        <span class="tab-clock-main-contents-figure">초</span>
      </div>
      <div class="tab-clock-main-title">남았습니다</div>
      <div
        class="tab-clock-main-btn"
        v-if="this.drawSeason === false"
        @click="this.changeSeasonalSemester"
      >계절학기 종강까지는?</div>
      <div
        class="tab-clock-main-btn"
        v-else-if="this.drawSeason === true"
        @click="this.changeNextSemester"
      >다음학기 개강까지는?</div>
    </div>
    <div class="tab-clock-info">현재시간 : {{ this.today | moment("YYYY년 MM월 DD일 h:mm a") }}</div>
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
      drawSeason: null,
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
      if (this.today <= CURRENT_SEMESTER_INFO.due) {
        this.semesterInfo = CURRENT_SEMESTER_INFO;
      } else if (this.today > CURRENT_SEMESTER_INFO.due) {
        this.changeNextSemester();
      }
    },
    getDueDates() {
      this.gapTime = parseInt(this.semesterInfo.due - this.today);
    },
    getNowDates() {
      this.today = new Date();
    },
    changeNextSemester() {
      this.semesterInfo = NEXT_SEMESTER_INFO;
      this.drawSeason = false;
      this.getDueDates();
    },
    changeSeasonalSemester() {
      this.semesterInfo = SEASONAL_SEMESTER_INFO;
      this.drawSeason = true;
      this.getDueDates();
    }
  },
  created() {
    this.clockValid();
    this.getDueDates();
  },
  mounted() {
    this.interval = setInterval(() => {
      this.getNowDates();
      this.getDueDates();
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.tab-clock-main {
  margin-bottom: 20px;
  .tab-clock-main-contents {
    .tab-clock-main-contents-time {
      font-size: 90px;
    }
    .tab-clock-main-contents-figure {
      font-size: 25px;
      margin-right: 15px;
    }
  }
}
.tab-clock-info {
  margin-bottom: 20px;
}
</style>
