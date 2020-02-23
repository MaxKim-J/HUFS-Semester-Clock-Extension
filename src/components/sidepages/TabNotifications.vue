<template>
    <div class="tab-side-box">
        <div class="tab-side-box-title">학사공지</div>
        <div class="tab-side-box-content"></div>
        <div class="tab-notification-box">
            <div class="tab-notifications-list" v-for="(noti, index) in this.notificationArray" :key="index">
                <div class="tab-notification" v-if="pageIndex <= noti.id && noti.id < pageIndex + 5">
                    <span class="tab-notification-date">{{ index }}</span>
                    <span class="tab-notificaion-title"
                        ><a :href="noti.link">{{ noti.title }}</a></span
                    >
                </div>
            </div>
            <div class="tab-notification-pagenation">
                <span
                    class="tab-notification-pagenation-number"
                    v-for="(pageNum, index) in notificationArrayCalculated"
                    :key="index"
                    @click="changePageIndex(index)"
                    >{{ pageNum }}</span
                >
            </div>
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
            pageIndex: 0
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
}
</style>
