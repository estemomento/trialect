<template functional>
  <nav>
    <ul>
      <li><router-link to="/">主页</router-link></li>
      <li><router-link to="/intro">简介</router-link></li>
      <li><router-link to="/pinyin">拼音</router-link></li>
      <li><router-link to="/resource">资料</router-link></li>
      <li><router-link to="/about">关于</router-link></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '../../assets/const.scss';

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  transition: 200ms;
  display: inline-flex;
  align-items: center;
  color: #aaa;
  height: 40px;
  font-size: 16px;
  text-decoration: none;
  padding: 0 12px;
}

a:hover {
  background-color: $assist-color;
  border-radius: 10px;
}

</style>
