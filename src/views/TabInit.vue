<template>
  <div class="tab-tabinit">
    <div class="tab-tabinit-message-title">외대종강시계</div>
    <div class="tab-tabinit-message">
      <div class="tab-tabinit-message-content">안녕하세요!</div>
      <div class="tab-tabinit-message-content">이 시계는 한국외대 이번 학기 종강까지</div>
      <div class="tab-tabinit-message-content">남은 시간을 보여줍니다</div>
    </div>
    <div class="tab-tabinit-name">
      <input v-model="userName" placeholder="학우님의 이름을 입력해주세요!" />
    </div>
    <div class="tab-tabinit-freshman">
      <select v-model="userFreshmanYear">
        <option v-for="option in this.userOptions" :key="option.value">{{ option.text }}</option>
      </select>
    </div>
    <div class="tab-tabinit-startbtn" @click="this.saveUserInfo">시작하기</div>
  </div>
</template>

<script>
export default {
  name: 'tabInit',
  data () {
    return {
      userName: '',
      userFreshmanYear: '',
      userOptions: [
        { text: 11, value: 2011 },
        { text: 12, value: 2012 },
        { text: 13, value: 2013 },
        { text: 14, value: 2014 },
        { text: 15, value: 2015 },
        { text: 16, value: 2016 },
        { text: 17, value: 2017 },
        { text: 18, value: 2018 },
        { text: 19, value: 2019 },
        { text: 20, value: 2020 }
      ]
    }
  },
  methods: {
    saveUserInfo () {
      const userInfo = {
        userName: this.userName,
        userFreshmanYear: this.userFreshmanYear,
        userInitInput: true
      }
      chrome.storage.local.set(userInfo, function () {
        console.log(userInfo)
      })
    }
  }
}
</script>

<style>
</style>
