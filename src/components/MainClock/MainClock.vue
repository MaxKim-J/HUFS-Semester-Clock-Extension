<template>
  <div class="tab-clock">
    <div :class="[this.semesterInfo ? 'tab-clock-main' : 'tab-clock-main-hide']">
      <div class="tab-clock-main-title" v-if="this.semesterInfo">
        {{ this.semesterInfo.id }}학기 {{ this.semesterInfo.act }}({{
        this.semesterInfo.due | moment("YY년 MM월 DD일")
        }})까지
      </div>
      <div class="tab-clock-main-title" v-else>학기 정보를 가져오는 중입니다</div>
      <div class="tab-clock-main-contents">
        <span class="tab-clock-main-contents-time">{{ this.gapTime.days || "00" }}</span>
        <span class="tab-clock-main-contents-figure">일</span>

        <span class="tab-clock-main-contents-time">{{ this.gapTime.hours || "00" }}</span>
        <span class="tab-clock-main-contents-figure">시간</span>

        <span class="tab-clock-main-contents-time">{{ this.gapTime.minutes || "00" }}</span>
        <span class="tab-clock-main-contents-figure">분</span>

        <span class="tab-clock-main-contents-time">{{ this.gapTime.seconds || "00" }}</span>
        <span class="tab-clock-main-contents-figure">초</span>
      </div>
      <div
        class="tab-clock-main-btn-wrapper"
        v-if="this.clockType === 'seasonal' && !this.isPassSeasonal"
      >
        <div class="tab-clock-main-btn" @click="changeSemester('next')">시계 바꾸기(다음학기 개강까지)</div>
      </div>
      <div
        class="tab-clock-main-btn-wrapper"
        v-if="this.clockType === 'next' && !this.isPassSeasonal"
      >
        <div class="tab-clock-main-btn" @click="changeSemester('seasonal')">시계 바꾸기(계절학기 종강까지)</div>
      </div>
    </div>

    <div class="tab-clock-info">현재시간 : {{ this.today | moment("YYYY년 MM월 DD일 h:mm a") }}</div>
  </div>
</template>

<script>
import { getDistancesFromToday } from "../../utils/TimeDistanceCalculator.js";

export default {
  name: "MainClock",
  data() {
    return {
      semesterInfo: null,
      clockType: "",
      gapTime: {},
      today: new Date(),
      isPassSeasonal: false
    };
  },
  methods: {
    getSemesterInfo(current, seasonal, now) {
      if (this.clockValid(current, now) === "next") {
        this.setIsPassSeasonal(seasonal, now);
      }
    },
    clockValid(current, now) {
      const semester = now <= current.due ? "current" : "next";
      this.changeSemester(semester);
      return semester;
    },
    setIsPassSeasonal(seasonal, now) {
      this.isPassSeasonal = now > seasonal.due ? true : false;
    },
    changeSemester(semesterName) {
      const semesterInfo = this.$store.state.semesterInfos[`${semesterName}`];
      this.semesterInfo = semesterInfo;
      this.clockType = semesterName;
      this.getDueDates();
    },
    getDueDates() {
      this.gapTime = getDistancesFromToday(
        parseInt(this.semesterInfo.due - this.today)
      );
      return this.gapTime;
    }
  },
  created() {
    const { current, seasonal } = this.$store.state.semesterInfos;
    const now = new Date();
    this.getSemesterInfo(current, seasonal, now);
  },
  mounted() {
    this.interval = setInterval(() => {
      this.today = new Date();
      this.getDueDates(this.semesterInfo);
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/global.scss";
.tab-clock-main-hide {
  visibility: hidden;
}
.tab-clock-main {
  margin-bottom: 20px;
  position: relative;
  .tab-clock-main-title {
    width: 100%;
  }
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
