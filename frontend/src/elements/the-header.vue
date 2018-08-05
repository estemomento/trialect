<template>
  <header class="header" :class="{ collapsed: collapsed }">
    <div class="header-wrapper">
      <span>
        <router-link class="logo" to="/">Trialect</router-link>
        <p class="slogan">——「记录和保护茂名方言」</p>
      </span>
      <the-nav/>
    </div>
  </header>
</template>

<script>
import TheNav from '@/elements/the-nav'

export default {
  name: 'header',
  components: { TheNav },
  data: () => ({
    collapsed: false
  }),
  mounted () {
    window.addEventListener('scroll', () => {
      this.collapsed = window.matchMedia('(max-width:767px)').matches && window.scrollY >= 40
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/const.scss';

header {
  z-index: 1000;
  transition: 0.2s;
  width: 100%;
  height: 70px;
  position: fixed;
  background: $main-color;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width:767px) {
    height: 100px;
  }

  .header-wrapper {
    margin: 0 12px;
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width:767px) {
      flex-direction: column;
    }
  }
}

span {
  transition: 0.2s;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width:767px) {
    justify-content: center;
    width: 100%;
  }
}

nav {
  @media (max-width:767px) {
    margin-bottom: 5px;
  }
}

.logo {
  transition: 0.2s;
  text-decoration: none;
  color: white;
  font-weight: bold;
  text-shadow: 1px 2px #000;
  margin: 10px 20px 10px 0;
  font-size: 40px;

  @media (max-width:767px) {
    margin: 5px 0;
    font-size: 32px;
  }
}

.slogan {
  color: #aaa;
  font-size: 16px;

  @media (max-width:767px) {
    display: none;
  }
}

header.collapsed {
  height: 50px;

  span {
    height: 0;

    a {
      font-size: 0;
    }
  }
}
</style>
