<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ eco }}</h2>
    <ul>
      <li><router-link to="/">vue-router</router-link></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cust',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      eco: 'Ecosystem'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
