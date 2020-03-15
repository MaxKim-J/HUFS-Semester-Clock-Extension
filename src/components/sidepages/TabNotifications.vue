<template>
  <div class="tab-side-box">
    <div class="tab-side-box-title">학사공지</div>
    <div class="tab-side-box-content">
      ✅ 최신 학사공지 15개를 보여드립니다. 항목을 누르시면 링크로 이동해요!
    </div>
    <div class="tab-notification-box">
      <div
        class="tab-notification"
        v-for="(noti, index) in this.notificationArray"
        :key="index"
      >
        <div v-if="pageIndex <= noti.id && noti.id < pageIndex + 5">
          <a class="tab-notification-content" :href="noti.link">
            <div class="tab-notification-date">{{ trimDate(noti.date) }}</div>
            <div class="tab-notification-title">{{ noti.title }}</div>
          </a>
        </div>
      </div>
    </div>
    <div class="tab-notification-pagenation">
      <span class="tab-side-box-content-small">페이지 이동 : </span>
      <span
        class="tab-notification-pagenation-number tab-side-box-content-small"
        :class="[
          checkedPageIndex === index
            ? 'tab-notification-pagenation-number-checked'
            : ''
        ]"
        v-for="(pageNum, index) in notificationArrayCalculated"
        :key="index"
        @click="changePageIndex(index)"
        >{{ pageNum }}</span
      >
    </div>
  </div>
</template>

<script>
import "../../style/sidePage.scss";
import { getNotificationsFromDB } from "../../services/firebaseDbAccess";
import {
  localStorageGet,
  localStorageSet
} from "../../services/localStorageAccess";

export default {
  data() {
    return {
      notificationArray: [],
      pageIndex: 0,
      checkedPageIndex: 0
    };
  },
  computed: {
    // 배열의 길이를 한 페이지에 페이지네이션 하고 싶은 공지의 숫자만큼 나눕니다
    notificationArrayCalculated() {
      const notificationsPerPage = 5;
      return this.notificationArray.length / notificationsPerPage;
    }
  },
  methods: {
    changePageIndex(num) {
      this.pageIndex = num * 5;
      this.checkedPageIndex = num;
    },
    trimDate(str) {
      const trimedDate = str.split("-");
      const result = trimedDate[1] + "." + trimedDate[2];
      return result;
    }
  },
  created() {
    // 로컬스토리지를 세션스토리지 처럼 쓰기
    localStorageGet(["notificationInfo"]).then(data => {
      if (data.notificationInfo) {
        this.notificationArray = data.notificationInfo;
      } else {
        getNotificationsFromDB()
          .then(data => {
            this.notificationArray = data.notifications;
            localStorageSet({ notificationInfo: data.notifications });
          })
          .catch(err => {
            console.error("데이터를 가져올 수 없습니다");
          });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.tab-notification-box {
  font-size: 14px;
  margin: 10px 0px;
  .tab-notification {
    .tab-notification-content {
      display: flex;
      .tab-notification-date {
        margin-right: 10px;
      }
      .tab-notification-title {
        width: 370px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .tab-notification:hover {
    text-decoration: underline !important;
  }
}
.tab-notification-pagenation {
  font-size: 14px;
  margin-bottom: 10px;
  .tab-notification-pagenation-number {
    margin-right: 10px;
    padding: 1px 4px;
    border: 1px solid white;
    border-radius: 15px;
    cursor: pointer;
  }
  .tab-notification-pagenation-number-checked {
    color: black;
    background-color: white;
  }
}
</style>
