<template>
  <div class="wrapper">
    <div class="inner">
      <h1>{{ title }}</h1>
      <hr>
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

      h1, h2, h3 {
        font-family: "Source Han Serif CN", serif;
      }

      hr {
        margin: 10px 0;
        width: 100%;
      }
    }
}
</style>
