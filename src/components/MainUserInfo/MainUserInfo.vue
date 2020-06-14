<template>
  <div class="tab-middle">
    <div class="tab-middle-content" v-if="userName && userFreshmanYear">
      <div class="tab-middle-content-message">
        {{ userFreshmanYear }}학번 외대입학 {{ getDistance }}일 째
      </div>
      <div class="tab-middle-content-message">
        {{ userName }}님, {{ greetingMessage }}
      </div>
      <div class="tab-middle-content-updatemessage-wrapper">
        <div class="tab-middle-content-updatemessage" @click="removeUserInfo">
          이름/학번 수정하기
        </div>
      </div>
    </div>
    <div class="tab-middle-content" v-else>
      <div class="tab-middle-content-update-message">
        학번과 이름을 입력하시면 입학하신지 며칠째인지 볼 수 있습니다
      </div>
      <div class="tab-middle-content-update">
        <div class="tab-middle-content-update-input">
          <input
            class="tab-middle-content-update-name"
            v-model="inputName"
            placeholder="학우님의 이름"
            autofocus
          />
        </div>
        <div class="tab-middle-content-update-input">
          <select
            v-model="inputYear"
            class="tab-middle-content-update-freshman"
            required
          >
            <option value selected hidden>학번</option>
            <option v-for="option in freshmanYearOptions" :key="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
      </div>
      <div
        class="tab-tabinit-startbtn"
        @click="userInputValid"
        style="cursor:pointer"
      >
        입력하기
      </div>
    </div>
  </div>
</template>

<script>
import { greetingValid } from "../../config/greetingsMessages.js";
import { FRESHMANYEARS } from "../../config/freshmanYears.js";
import { getDistanceFromAdmissionDay } from "../../utils/TimeDistanceCalculator.js";
import { getRandomArrayIndex } from "../../utils/RandomArrayIndex.js";

export default {
  name: "MainUserInfo",
  data() {
    return {
      greetingMessage: null,
      freshmanYearOptions: FRESHMANYEARS,
      inputYear: 0,
      inputName: "",
    };
  },
  computed: {
    getDistance() {
      return getDistanceFromAdmissionDay(this.userFreshmanYear);
    },
    userName() {
      return this.$store.state.userName;
    },
    userFreshmanYear() {
      return this.$store.state.userFreshmanYear;
    },
  },
  methods: {
    getRandomArrayIndex(arr) {
      return Math.floor(Math.random() * arr.length);
    },
    getGreetingMessage() {
      const currentHour = new Date().getHours();
      const currentHourMessages = greetingValid(currentHour);
      const INDEXNUM = getRandomArrayIndex(currentHourMessages);
      this.greetingMessage = currentHourMessages[INDEXNUM].message;
    },
    removeUserInfo() {
      const { userName, userFreshmanYear } = this.$store.state;
      this.inputName = userName;
      this.inputYear = userFreshmanYear;
      this.$store.commit("REMOVE_USER_INFO");
    },
    updateUserInfo() {
      const updateArr = {
        userName: this.inputName,
        userFreshmanYear: this.inputYear,
      };
      this.$store.commit("UPDATE_USER_INFO", updateArr);
    },
    userInputValid() {
      if (this.inputName === undefined) {
        alert("학우님의 이름을 입력해주세요!");
      } else if (this.inputYear === undefined) {
        alert("학우님의 학번을 입력해주세요!");
      } else {
        if (this.inputName.length > 10 || this.inputName.length < 1) {
          alert("학우님 이름은 1자 이상부터 10자까지 가능합니다");
        } else {
          this.updateUserInfo();
        }
      }
    },
  },
  created() {
    this.getGreetingMessage();
  },
};
</script>

<style scoped lang="scss">
@import "../../style/global.scss";

.tab-middle {
  margin-bottom: 20px;
  .tab-middle-content {
    .tab-middle-content-message {
      font-size: $xlarge;
    }
    .tab-middle-content-updatemessage-wrapper {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      .tab-middle-content-updatemessage {
        width: 140px;
        font-size: $small;
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
      font-size: $medium;
      margin-right: 10px;
      color: black;
      input::placeholder {
        font-size: $medium;
        color: white;
        font-weight: 500;
      }
      .tab-middle-content-update-name {
        font-size: $medium;
        height: 30px;
        width: 250px;
        background: none;
        outline: none;
        border: none;
        border-bottom: 2px solid white;
        color: white;
        font-weight: 500;
      }
      .tab-middle-content-update-freshman {
        font-size: $medium;
        height: 30px;
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
