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
@import '../../assets/const.scss';

.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 20px 8px;
  }

  @media (min-width: 768px) {
    padding: 50px 0;
  }

  .inner {
    background: #fff;
    width: 100%;
    max-width: 660px;
    box-shadow: 2px 2px 5px #666;
    padding: 24px;
    border-radius: 5px;
    box-sizing: border-box;

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
