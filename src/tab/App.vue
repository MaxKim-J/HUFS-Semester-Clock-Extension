<template>
  <div class="tab">
    <router-view />
    <div class="background">
      <img src="http://ppcdn.500px.org/75319705/1991f76c0c6a91ae1d23eb94ac5c7a9f7e79c480/2048.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {},
  created () {
    console.log(this.$router)
    const valid = chrome.storage.local.get(['userInitInput'], function (result) {
      console.log(result)
    })
    if (valid !== true) {
      this.$router.push({
        name: 'init'
      })
    }
  }
}
</script>

<style lang="scss">
* {
  font-size: 20px;

  margin: 0;
  padding: 0;

  a,
  a:hover,
  a:active {
    text-decoration: none;
    color: black;
  }
}

img {
  width: 500px;
}
</style>
