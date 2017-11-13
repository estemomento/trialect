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
  },
  mounted () {
    window.addEventListener('scroll', () => {
      if (window.matchMedia('(max-width:767px)').matches) {
        if (window.scrollY < 40) {
          document.getElementsByClassName('logo')[0].style.opacity = '1'
          document.getElementsByClassName('header')[0].style.height = '100px'
        } else {
          document.getElementsByClassName('logo')[0].style.opacity = '0'
          document.getElementsByClassName('header')[0].style.height = '50px'
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/const.scss';

@media (max-width:767px) {
  header {
    height: 100px;    
    flex-direction: column;
  }
  span {
    justify-content: center;
    width: 100%;
  }
  .logo {
    font-size: 32px;
    margin: 10px 0;
  }
  .slogan {
    display: none;
  }
  nav {
    margin-right: 0;
    margin-bottom: 5px;
  }
}

@media (min-width:768px) {
  span {
    justify-content: flex-start;
  }
  .logo {
    margin: 10px 20px 10px 40px;
    font-size: 40px;
  }
  nav {
    margin-right: 40px;
  }
}

header {
  transition: 0.2s;
  width: 100%;
  position: fixed;
  background: $main-color;
  display: flex;
  justify-content: space-between; 
  align-items: center;
}

span {
  display: flex;
  align-items: center
}

.logo {
  transition: 0.2s;  
  text-decoration: none;
  color: white;
  font-weight: bold;
  text-shadow: 1px 2px #000 ;
}

.slogan {
  color: #bababa;
  font-size: 16px;
}
</style>
