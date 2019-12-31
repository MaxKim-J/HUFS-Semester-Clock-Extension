<template>
  <div class="tab-middle">
    <div class="tab-middle-content" v-if="this.isInput === true">
      <div
        class="tab-middle-content-message"
      >{{this.userFreshmanYear}}학번 외대입학 {{this.getDistance}}일 째</div>
      <div
        class="tab-middle-content-message"
      >{{this.userName}}님, {{this.greetingMessages[this.INDEXNUM].message}}</div>
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
      <div class="tab-tabinit-startbtn" @click="this.saveUserInfo" style="cursor:pointer">입력하기</div>
    </div>
  </div>
</template>

<script>
import { GREETINGS } from '../utils/GreetingsMessage.js';
import { FRESHMANYEARS } from '../utils/FreshmanYears.js';
import { getDistanceFreshman } from '../utils/TimeDistanceCalculator.js';

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
  computed: {
    getDistance () {
      return getDistanceFreshman(this.userFreshmanYear)
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
            resolve(result)
          }
        )
      })
    },
    updateUserInfo () {
      this.getUserInput().then(data => {
        this.isInput = data.userInitInput
        this.userName = data.userName
        this.userFreshmanYear = data.userFreshmanYear
      })
    },
    saveUserInfo () {
      const userInfo = {
        userName: this.userName,
        userFreshmanYear: this.userFreshmanYear,
        userInitInput: true
      }
      chrome.storage.local.set(userInfo, function () {
        console.log('데이터가 저장됐습니다')
      })
      this.updateUserInfo()
    }
  },
  created () {
    this.INDEXNUM = this.getRandomArrayIndex(this.greetingMessages)
    this.updateUserInfo()
  }
}
</script>

<style scoped lang='scss'>
</style>
