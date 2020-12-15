<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slideBar"></router-view>
      <router-view name="main">
      </router-view>
    </div>
  </div>
</template>
<script>
  import Header from "./components/Header";
  export default {
    components:{
      Header
    }
  }
</script>
<style lang="scss">
  body {
    background: #e1e1e1;
  }
.main {
  max-width: 80%;
  margin: 0 auto;
}
</style>
