<template>
  <div id="app">
    <tr-header/>
    <router-view/>
    <tr-footer/>
  </div>
</template>

<script>
import trHeader from '@/components/header'
import trFooter from '@/components/footer'

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
  margin: 0
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
