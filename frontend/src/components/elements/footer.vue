<template>
  <footer>
    <p>Copyright 2017 <a href="http://alekolau.cn">Aleko Lau</a></p>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'Trialect'
    }
  }
}
</script>

<style scoped>
footer {
  background: #664010;
  display: flex;
  justify-content: center;
  height: 40px;
}

p, a {
  color: #bababa;
  margin: 10px 0;
  font-size: 14px;
  text-decoration: none;
}
</style>
