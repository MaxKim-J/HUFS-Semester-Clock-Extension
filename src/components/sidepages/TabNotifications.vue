<template>
    <div class="tab-side-box">
        <div class="tab-side-box-title">학사공지</div>
        <div class="tab-side-box-content">✅ 최신 학사공지 15개를 보여드립니다. 항목을 누르시면 링크로 이동해요!</div>
        <div class="tab-notification-box">
            <div class="tab-notification" v-for="(noti, index) in this.notificationArray" :key="index">
                <div class="tab-notification-content" v-if="pageIndex <= noti.id && noti.id < pageIndex + 5">
                    <span class="tab-notification-date">{{ index }}.</span>
                    <span class="tab-notificaion-title"
                        ><a :href="noti.link">{{ noti.title }}</a></span
                    >
                </div>
            </div>
        </div>
        <div class="tab-notification-pagenation">
            <span class="tab-side-box-content-small">페이지 이동 : </span>
            <span
                class="tab-notification-pagenation-number tab-side-box-content-small"
                :class="[checkedPageIndex === index ? 'tab-notification-pagenation-number-checked' : '']"
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
        }
    },
    created() {
        getNotificationsFromDB().then(data => {
            this.notificationArray = data.notifications;
            console.log(this.notificationArray);
        });
    }
};
</script>

<style lang="scss" scoped>
.tab-notification-box {
    font-size: 14px;
    margin: 10px 0px;
    .tab-notification:hover {
        text-decoration: underline !important;
    }
}
.tab-notification-pagenation {
    font-size: 14px;
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
