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
      <div class="tab-clock-main-btn-wrapper" v-if="this.drawSeason && this.exceedSeason">
        <div class="tab-clock-main-btn" @click="changeSemesterToNext()">다음학기 개강까지</div>
      </div>
      <div class="tab-clock-main-btn-wrapper" v-else>
        <div class="tab-clock-main-btn" @click="changeSemesterToSeason()">계절학기 종강까지</div>
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

import { getSemesterInfoFromDB } from "../services/firebaseDbAccess";

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
      exceedSeason: false,
      today: new Date(),
      gapTime: 0,
      semesterInfos: {}
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
    async getSemesterInfo() {
      const semesters = await getSemesterInfoFromDB();
      let newSemesters = {};
      Object.keys(semesters).forEach(key => {
        const { due, act, id } = semesters[key];
        console.log(due, act, id);
        const splitInfo = due.split("-").map(elem => parseInt(elem));
        const [year, month, day] = splitInfo;
        newSemesters = {
          ...newSemesters,
          [key]: {
            act: act,
            id: id,
            due: new Date(year, month, day, 23, 59, 59)
          }
        };
      });
      this.semesterInfos = newSemesters;
    },
    getDueDates() {
      this.gapTime = parseInt(this.semesterInfo.due - this.today);
    },
    clockValid() {
      const { current, next, seasonal } = this.semesterInfos;
      if (new Date() <= current.due) {
        this.semesterInfo = current;
      } else {
        this.exceedSeason = true;
        this.changeSemesterToNext();
      }
      this.getDueDates();
    },
    changeSemesterToNext() {
      const { next } = this.semesterInfos;
      this.semesterInfo = next;
      this.drawSeason = false;
      this.getDueDates();
    },
    changeSemesterToSeason() {
      const { seasonal } = this.semesterInfos;
      this.semesterInfo = seasonal;
      this.drawSeason = true;
      this.getDueDates();
    }
  },
  created() {
    this.getSemesterInfo().then(() => {
      this.clockValid();
      this.getDueDates();
    });
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
