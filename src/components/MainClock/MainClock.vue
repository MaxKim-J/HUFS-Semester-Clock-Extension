<template>
  <div class="tab-clock">
    <div
      :class="[this.semesterInfo ? 'tab-clock-main' : 'tab-clock-main-hide']"
    >
      <div class="tab-clock-main-title" v-if="this.semesterInfo">
        {{ this.semesterInfo.id }}학기 {{ this.semesterInfo.act }}({{
          this.semesterInfo.due | moment("YY년 MM월 DD일")
        }})까지
      </div>
      <div class="tab-clock-main-title" v-else>
        학기 정보를 가져오는 중입니다
      </div>
      <div class="tab-clock-main-contents">
        <span class="tab-clock-main-contents-time">{{
          this.calculatedDistances.days || "00"
        }}</span>
        <span class="tab-clock-main-contents-figure">일</span>

        <span class="tab-clock-main-contents-time">{{
          this.calculatedDistances.hours || "00"
        }}</span>
        <span class="tab-clock-main-contents-figure">시간</span>

        <span class="tab-clock-main-contents-time">{{
          this.calculatedDistances.minutes || "00"
        }}</span>
        <span class="tab-clock-main-contents-figure">분</span>

        <span class="tab-clock-main-contents-time">{{
          this.calculatedDistances.seconds || "00"
        }}</span>
        <span class="tab-clock-main-contents-figure">초</span>
      </div>
      <div
        class="tab-clock-main-btn-wrapper"
        v-if="this.clockType === 'season' && !this.isPassSeasonal"
      >
        <div class="tab-clock-main-btn" @click="changeSemesterToNext()">
          시계 바꾸기(다음학기 개강까지)
        </div>
      </div>
      <div
        class="tab-clock-main-btn-wrapper"
        v-if="this.clockType === 'next' && !this.isPassSeasonal"
      >
        <div class="tab-clock-main-btn" @click="changeSemesterToSeason()">
          시계 바꾸기(계절학기 종강까지)
        </div>
      </div>
    </div>

    <div class="tab-clock-info">
      현재시간 : {{ this.today | moment("YYYY년 MM월 DD일 h:mm a") }}
    </div>
  </div>
</template>

<script>
import { getDistancesFromToday } from "../../utils/TimeDistanceCalculator.js";
import "../../style/defaultTransition.scss";

export default {
  name: "MainClock",
  data() {
    return {
      today: new Date(),
      clockType: "",
      gapTime: null,
      semesterInfo: null,
      isPassSeasonal: false,
    };
  },
  computed: {
    calculatedDistances() {
      return getDistancesFromToday(this.gapTime);
    },
  },
  methods: {
    getSemesterInfos() {
      this.clockValid();
      this.getDueDates();
    },
    getDueDates() {
      this.gapTime = parseInt(this.semesterInfo.due - this.today);
    },
    clockValid() {
      const { current, next, seasonal } = this.$store.state.semesterInfos;
      const now = new Date();
      if (now <= current.due) {
        this.semesterInfo = current;
        this.clockType = "current";
      } else {
        this.isPassSeasonal = now > seasonal.due ? true : false;
        this.changeSemesterToNext();
      }
      this.getDueDates();
    },
    changeSemesterToNext() {
      const { next } = this.$store.state.semesterInfos;
      this.semesterInfo = next;
      this.clockType = "next";
      this.getDueDates();
    },
    changeSemesterToSeason() {
      const { seasonal } = this.$store.state.semesterInfos;
      this.semesterInfo = seasonal;
      this.clockType = "season";
      this.getDueDates();
    },
  },
  created() {
    this.getSemesterInfos();
  },
  mounted() {
    this.interval = setInterval(() => {
      this.today = new Date();
      this.getDueDates();
    }, 1000);
  },
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
