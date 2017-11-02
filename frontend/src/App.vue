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
@font-face {
      font-family: 'sourcesans';
      src: url('http://at.alicdn.com/t/webfont_gedgcbhu64a0dx6r.eot');
      /* IE9*/
      src: url('http://at.alicdn.com/t/webfont_gedgcbhu64a0dx6r.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('http://at.alicdn.com/t/webfont_gedgcbhu64a0dx6r.woff') format('woff'), /* chrome、firefox */
      url('http://at.alicdn.com/t/webfont_gedgcbhu64a0dx6r.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url('http://at.alicdn.com/t/webfont_gedgcbhu64a0dx6r.svg#思源黑体-普通') format('svg');
      /* iOS 4.1- */
}

* {
  font-family: "sourcesans", "Microsoft YaHei", sans-serif;  
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
