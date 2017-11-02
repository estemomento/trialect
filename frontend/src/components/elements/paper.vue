<template>
  <div class="wrapper">
    <div class="inner">
      <h1>{{ title }}</h1>
      <hr class="big-hr">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paper',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    display: flex;
    justify-content: center;

    .inner {
      margin: 50px 0;
      background: #fff;
      width: 700px;
      box-shadow: 2px 2px 5px #666;
      padding: 24px;
      border-radius: 5px;

      h1 {
        font-family: "KaiTi", serif;
      }

      hr {
        margin: 10px 0;
        width: 100%;
      }

      .big-hr {
        height: 4px;
        background: #000;
      }
    }
}
</style>
