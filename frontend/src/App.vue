<template>
  <div id="app">
    <the-header/>
    <transition name="fade" mode="out-in">
      <router-view class="page"/>
    </transition>
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
    font-size: 16px;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.fade-enter-active, .fade-leave-active, .fade-appear-active {
  transition: opacity 0.4s;
}

.fade-enter, .fade-leave-to, .fade-appear {
  opacity: 0;
}

::-webkit-scrollbar {
  display: none;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ddd;
  min-height: calc(100vh - 40px);
  padding-top: 70px;

  @media (max-width:767px) {
    padding-top: 100px;
  }
}
</style>
