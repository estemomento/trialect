<template>
  <header class="header">
    <span>
      <p class="logo">Trialect</p>
      <p class="slogan">——「记录和保护茂名方言」</p>
    </span>
    <tr-nav/>
  </header>
</template>

<script>
import trNav from '@/components/nav'

export default {
  name: 'header',
  components: {
    trNav
  }
}
</script>

<style scoped>
header {
  background: #664010;
  display: flex;
  justify-content: space-between; 
  align-items: center;
}

span {
  display: flex;
  justify-content: flex-start;
  align-items: center
}

.logo {
  color: white;
  font-weight: bold;
  margin: 10px 20px 10px 40px;
  font-size: 40px;
  text-shadow: 1px 2px #121212 ;
}

.slogan {
  color: #bababa;
  font-size: 16px;
}

nav {
  margin-right: 40px;
}
</style>
