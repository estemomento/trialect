<template functional>
  <footer>
    <p>Copyright 2017 <a href="http://alekolau.cn">Aleko Lau</a></p>
  </footer>
</template>

<style lang="scss" scoped>
@import '../assets/const.scss';

footer {
  background: $main-color;
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
