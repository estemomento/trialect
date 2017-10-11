<template>
  <nav>
    <ul>
      <li><router-link to="/">主页</router-link></li>
      <li><router-link to="/intro">简介</router-link></li>
      <li><router-link to="/pinyin">拼音方案</router-link></li>
      <li><router-link to="/download">资源下载</router-link></li>
      <li><router-link to="/about">关于</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'nav'
}
</script>

<style scoped>
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
  color: #bababa;
  height: 40px;
  font-size: 16px;
  text-shadow: 1px 2px #121212 ;
  text-decoration: none;
  padding: 0 15px; 
}

a:hover {
  background-color: #967040;
  border-radius: 10px;
}

</style>
