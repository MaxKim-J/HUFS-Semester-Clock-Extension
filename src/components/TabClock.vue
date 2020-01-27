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
      <div class="tab-clock-main-btn-wrapper" v-if="this.drawSeason === false">
        <div class="tab-clock-main-btn" @click="this.changeSeasonalSemester">계절학기 종강까지</div>
      </div>
      <div class="tab-clock-main-btn-wrapper" v-else-if="this.drawSeason === true">
        <div class="tab-clock-main-btn" @click="this.changeNextSemester">다음학기 개강까지</div>
      </div>
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
@import "../style/global.scss";
.tab-clock-main {
  margin-bottom: 20px;
  .tab-clock-main-contents {
    .tab-clock-main-contents-time {
      font-size: $time-size;
    }
    .tab-clock-main-contents-figure {
      font-size: $large;
      margin-right: 15px;
    }
  }
}
.tab-clock-main-btn-wrapper {
  display: flex;
  justify-content: center;
  .tab-clock-main-btn {
    width: 140px;
    cursor: pointer;
    font-size: $small;
    text-decoration: underline;
  }
}
.tab-clock-info {
  margin-bottom: 20px;
}

@include small {
  .tab-clock-main-contents-time {
    font-size: 60px !important;
  }
}
</style>
