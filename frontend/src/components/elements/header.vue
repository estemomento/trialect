<template>
  <header class="header">
    <span>
      <router-link class="logo" to="/">Trialect</router-link>
      <p class="slogan">——「记录和保护茂名方言」</p>
    </span>
    <tr-nav/>
  </header>
</template>

<script>
import trNav from '@/components/elements/nav'

export default {
  name: 'header',
  components: {
    trNav
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/const.scss';

header {
  background: $main-color;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  height: 70px;
}

span {
  display: flex;
  justify-content: flex-start;
  align-items: center
}

.logo {
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin: 10px 20px 10px 40px;
  font-size: 40px;
  text-shadow: 1px 2px #000 ;
}

.slogan {
  color: #bababa;
  font-size: 16px;
}

nav {
  margin-right: 40px;
}
</style>
