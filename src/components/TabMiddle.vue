<template>
  <div class="tab-middle">
    <div class="tab-middle-content" v-if="this.isInput === true">
      <div
        class="tab-middle-content-message"
      >{{this.userFreshmanYear}}학번 외대입학 {{this.getDistance}}일 째</div>
      <div
        class="tab-middle-content-message"
      >{{this.userName}}님, {{this.greetingMessages[this.INDEXNUM].message}}</div>
      <div class="tab-middle-content-updatemessage-wrapper">
        <div class="tab-middle-content-updatemessage" @click="this.removeUserInfo">이름/학번 수정하기</div>
      </div>
    </div>

    <div class="tab-middle-content" v-else-if="this.isInput === undefined">
      <div class="tab-middle-content-update-message">학번과 이름을 입력하시면 입학하신지 몇 일 째인지 볼 수 있습니다</div>
      <div class="tab-middle-content-update">
        <div class="tab-middle-content-update-input">
          <input
            class="tab-middle-content-update-name"
            v-model="userName"
            placeholder="학우님의 이름"
            autofocus
          />
        </div>
        <div class="tab-middle-content-update-input">
          <select v-model="userFreshmanYear" class="tab-middle-content-update-freshman" required>
            <option value selected hidden>학번</option>
            <option v-for="option in this.freshmanYearOptions" :key="option.value">{{ option.text }}</option>
          </select>
        </div>
      </div>

      <div class="tab-tabinit-startbtn" @click="this.userInputValid" style="cursor:pointer">입력하기</div>
    </div>
  </div>
</template>

<script>
import { GREETINGS } from "../utils/GreetingsMessage.js";
import { FRESHMANYEARS } from "../utils/FreshmanYears.js";
import { getDistanceFreshman } from "../utils/TimeDistanceCalculator.js";

export default {
  name: "tabMiddle",
  data() {
    return {
      greetingMessages: GREETINGS,
      freshmanYearOptions: FRESHMANYEARS,
      userFreshmanYear: 0,
      userName: "",
      INDEXNUM: 0,
      isInput: null
    };
  },
  computed: {
    getDistance() {
      return getDistanceFreshman(this.userFreshmanYear);
    }
  },
  methods: {
    getRandomArrayIndex(arr) {
      return Math.floor(Math.random() * arr.length);
    },
    getUserInput() {
      return new Promise(function(resolve, reject) {
        chrome.storage.local.get(
          ["userInitInput", "userName", "userFreshmanYear"],
          function(result) {
            resolve(result);
          }
        );
      });
    },
    updateUserInfo() {
      this.getUserInput().then(data => {
        this.isInput = data.userInitInput;
        this.userName = data.userName;
        this.userFreshmanYear = data.userFreshmanYear;
      });
    },
    userInputValid() {
      if (this.userName === undefined) {
        alert("학우님의 이름을 입력해주세요!");
      } else if (this.userFreshmanYear === undefined) {
        alert("학우님의 학번을 입력해주세요!");
      } else {
        if (this.userName.length > 5 || this.userName.length < 1) {
          alert("학우님 이름은 1자 이상부터 5자까지 가능합니다");
        } else {
          this.saveUserInfo();
        }
      }
    },
    saveUserInfo() {
      const userInfo = {
        userName: this.userName,
        userFreshmanYear: this.userFreshmanYear,
        userInitInput: true
      };
      chrome.storage.local.set(userInfo, function() {
        console.log("데이터가 저장됐습니다");
      });
      this.updateUserInfo();
    },
    removeUserInfo() {
      chrome.storage.local.remove(
        ["userInitInput", "userName", "userFreshmanYear"],
        function() {
          console.log("유저 데이터를 수정합니다");
        }
      );
      this.isInput = undefined;
    }
  },
  created() {
    this.INDEXNUM = this.getRandomArrayIndex(this.greetingMessages);
    this.updateUserInfo();
  }
};
</script>


<style scoped lang='scss'>
.tab-middle {
  margin-bottom: 20px;
  .tab-middle-content {
    .tab-middle-content-message {
      font-size: 30px;
    }
    .tab-middle-content-updatemessage-wrapper {
      display: flex;
      justify-content: center;
      .tab-middle-content-updatemessage {
        width: 140px;
        font-size: 16px;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .tab-middle-content-update {
    display: flex;
    justify-content: center;
    margin: 10px 0px;
    .tab-middle-content-update-input {
      margin-right: 10px;
      color: black;
      input::placeholder {
        color: white;
        font-weight: 700;
      }
      .tab-middle-content-update-name {
        background: none;
        outline: none;
        border: none;
        border-bottom: 2px solid white;
        color: white;
        font-weight: 500;
      }
      .tab-middle-content-update-freshman {
        border: 2px solid white;
        background: none;
        width: 80px;
        option {
          color: black;
        }
      }
    }
  }
}
</style>
