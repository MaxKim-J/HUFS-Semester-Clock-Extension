<template>
  <div class="tab-middle">
    <div class="tab-middle-content" v-if="this.isInput === true">
      <div class="tab-middle-content-username">{{this.userFreshmanYear}}학번 {{this.userName}}님,</div>
      <div class="tab-middle-content-message">{{this.greetingMessages[this.INDEXNUM].message}}</div>
    </div>

    <div class="tab-middle-content" v-else-if="this.isInput === undefined">
      <div class="tab-middle-content-message">학번과 이름을 입력하시면 입학하신지 몇 일 째인지 볼 수 있습니다</div>
      <div class="tab-tabinit-name">
        <input v-model="userName" placeholder="학우님의 이름을 입력해주세요!" />
      </div>
      <div class="tab-tabinit-freshman">
        <select v-model="userFreshmanYear">
          <option :value="null" disabled selected hidden>학번</option>
          <option v-for="option in this.freshmanYearOptions" :key="option.value">{{ option.text }}</option>
        </select>
      </div>
      <div class="tab-tabinit-startbtn" @click="this.saveUserInfo">입력하기</div>
    </div>
  </div>
</template>

<script>
import { GREETINGS } from '../utils/GreetingsMessage.js';
import { FRESHMANYEARS } from '../utils/FreshmanYears.js';

export default {
  name: 'tabMiddle',
  data () {
    return {
      greetingMessages: GREETINGS,
      freshmanYearOptions: FRESHMANYEARS,
      userFreshmanYear: 0,
      userName: '',
      INDEXNUM: 0,
      isInput: null
    }
  },
  methods: {
    getRandomArrayIndex (arr) {
      return Math.floor(Math.random() * arr.length)
    },
    getUserInput () {
      return new Promise(function (resolve, reject) {
        chrome.storage.local.get(
          ['userInitInput', 'userName', 'userFreshmanYear'],
          function (result) {
            console.log(result)
            resolve(result)
          }
        )
      })
    },
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
  },
  created () {
    this.INDEXNUM = this.getRandomArrayIndex(this.greetingMessages)
    this.getUserInput().then(data => {
      this.isInput = data.userInitInput
      this.userName = data.userName
      this.userFreshmanYear = data.userFreshmanYear
      console.log(this.isInput)
    })
  }
}
</script>

<style scoped lang='scss'>
</style>
