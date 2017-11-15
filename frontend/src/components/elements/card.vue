<template>
  <div class="card">
    <div>
      <img :src="img" alt="Loading">
    </div>
    <h3>{{ title }}</h3>
    <p>{{ info }}</p>
    <router-link :to="addr">点击进入</router-link>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    img: String,
    title: String,
    info: String,
    addr: String
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/const.scss';

.card {
  background: #fff;
  height: 260px;
  width: 220px;
  box-shadow: 2px 2px 5px #666;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    height: 120px;
    overflow: hidden;

    img {
      max-width: 100%;
    }
  }

  h3 {
    margin: 10px;
  }

  p {
    display: inline-block;
    height: 50px;
    margin: 0 10px;
    font-size: 13px;
  }

  a {
    padding: 5px 10px;
    margin-right: 10px;
    display: inline-block;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    background: $main-color;
    color: #fff;
    border: 0;
    border-radius: 5px;
    align-self: flex-end;
  }
}
</style>
