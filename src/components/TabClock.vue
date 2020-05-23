<template>
  <div class="tab-clock">
    <div class="tab-clock-main">
      <div
        class="tab-clock-main-title"
        v-if="this.semesterInfo"
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
      <div class="tab-clock-main-btn-wrapper" v-if="this.clockType === 'season'">
        <div class="tab-clock-main-btn" @click="changeSemesterToNext()">시계 바꾸기(다음학기 개강까지)</div>
      </div>
      <div class="tab-clock-main-btn-wrapper" v-if="this.clockType === 'next'">
        <div class="tab-clock-main-btn" @click="changeSemesterToSeason()">시계 바꾸기(계절학기 종강까지)</div>
      </div>
    </div>
    <div class="tab-clock-info">현재시간 : {{ this.today | moment("YYYY년 MM월 DD일 h:mm a") }}</div>
  </div>
</template>

<script>
import {
  getDistanceSeconds,
  getDistanceMinutes,
  getDistanceHours,
  getDistanceDays
} from "../utils/TimeDistanceCalculator.js";
import "../style/defaultTransition.scss";

export default {
  name: "TabClock",
  data() {
    return {
      semesterInfo: null,
      clockType: "",
      today: new Date(),
      gapTime: null
    };
  },
  props: {
    semesterInfos: Object
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
    getDueDates() {
      this.gapTime = parseInt(this.semesterInfo.due - this.today);
    },
    clockValid() {
      const { current, next, seasonal } = this.semesterInfos;
      if (new Date() <= current.due) {
        this.semesterInfo = current;
        this.clockType = "current";
      } else {
        this.changeSemesterToNext();
      }
      this.getDueDates();
    },
    changeSemesterToNext() {
      const { next } = this.semesterInfos;
      this.semesterInfo = next;
      this.drawSeason = false;
      this.clockType = "next";
      this.getDueDates();
    },
    changeSemesterToSeason() {
      const { seasonal } = this.semesterInfos;
      this.semesterInfo = seasonal;
      this.drawSeason = true;
      this.clockType = "season";
      this.getDueDates();
    }
  },
  created() {
    // this.getSemesterInfo().then(() => {
    this.clockValid();
    this.getDueDates();
    // });
    this.interval = setInterval(() => {
      this.today = new Date();
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
    cursor: pointer;
    font-size: $small;
    text-decoration: underline;
    opacity: 0.6;
    transition: opacity 0.5s;
  }
  .tab-clock-main-btn:hover {
    opacity: 1;
  }
}
.tab-clock-info {
  margin-bottom: 20px;
}

@include small {
  .tab-clock-main-contents-time {
    font-size: 70px !important;
  }
}
</style>
