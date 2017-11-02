<template>
  <div id="app">
    <tr-header/>
    <router-view class="page"/>
    <tr-footer/>
  </div>
</template>

<script>
import trHeader from '@/components/elements/header'
import trFooter from '@/components/elements/footer'

export default {
  name: 'app',
  components: {
    trHeader,
    trFooter
  }
}
</script>

<style lang="scss">

* {
  font-family: "Microsoft YaHei", sans-serif;  
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  display: none;
}

#app {
  font-family: "sourcesans", "Microsoft YaHei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page {
  padding-top: 70px;
}
</style>
