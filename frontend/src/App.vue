<template>
  <div id="app">
    <the-header/>
    <router-view class="page"/>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from '@/components/elements/the-header'
import TheFooter from '@/components/elements/the-footer'

export default {
  name: 'app',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
@media (max-width:767px) {
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 22px;
  }
  h3 {
    font-size: 18px;
  }
  h4, p {
    font-size: 14px;
  }
  .page {
    padding-top: 100px;
  }
}

@media (min-width:768px) {
  .page {
    padding-top: 70px;
  }
}

* {
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  display: none;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
