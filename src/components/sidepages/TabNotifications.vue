<template>
  <div class="tab-side-box">
    <div class="tab-side-box-title">학사공지</div>
      <div class="tab-side-box-content"></div>
      <div class="tab-notification-box">
        <div class= "tab-notification" v-for="noti in this.notificationArray" :key="noti.id">
          <div>
            <a :href= "noti.link">{{noti.title}}</a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import "../../style/sidePage.scss";
import { getNotificationsFromDB } from "../../services/firebaseDbAccess"

export default {
  data() {
    return {
      notificationArray:[]
    }
  },
  created(){
    getNotificationsFromDB().then(data => {
      this.notificationArray = data.notifications;
      console.log(this.notificationArray);
    })
  }
};
</script>

<style lang="scss" scoped>
.tab-notification-box{
  font-size:14px;
}
</style>