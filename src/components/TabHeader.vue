<template>
  <div class="tab-header">
    <div class="tab-header-content">
      <div class="tab-header-content-username">김종혁 님,</div>
      <div class="tab-header-content-message">{{this.greetingMessages[this.INDEXNUM].message}}</div>
      <div class="tab-header-content-hotlinks">
        <div
          class="tab-header-content-hotlinks-link"
          v-for="hotlink in this.hotlinkData"
          :key="hotlink.id"
        >
          <a :href="hotlink.link">
            <v-icon x-large>{{ hotlink.icon }}</v-icon>
          </a>
          <div class="tab-header-content-hotlinks-link-title">{{hotlink.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabHeader',
  data () {
    return {
      INDEXNUM: 0,
      hotlinkData: [
        {
          id: 0,
          icon: 'school',
          name: '외대 홈페이지',
          link: 'http://hufs.ac.kr/'
        },
        {
          id: 1,
          icon: 'menu_book',
          name: '외대 도서관',
          link: 'https://library.hufs.ac.kr/'
        },
        {
          id: 2,
          icon: 'folder_shared',
          name: 'e-class',
          link: 'http://eclass2.hufs.ac.kr:8181/ilos/main/main_form.acl'
        },
        {
          id: 3,
          icon: 'event_available',
          name: '강의실 대여',
          link: 'http://ois.hufs.ac.kr/room.html'
        }
      ],
      greetingMessages: [
        { id: 0, message: '안녕하세요!' },
        { id: 1, message: '수고하세요!' },
        { id: 2, message: '힘내세요!' },
        { id: 3, message: '짱이에요!' },
        { id: 4, message: '잘생겼어요!' }
      ]
    }
  },
  methods: {
    getRandomArrayIndex (arr) {
      return Math.floor(Math.random() * arr.length)
    }
  },
  created () {
    this.INDEXNUM = this.getRandomArrayIndex(this.greetingMessages)
  }
}
</script>

<style scoped lang='scss'>
</style>
