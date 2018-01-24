<template>
  <div class="wrapper" :class="{ dense }">
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
    title: String,
    dense: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/const.scss";

.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    padding: 20px 8px;
  }

  @media (min-width: 768px) {
    padding: 50px 0;
  }

  &.dense {
    padding-top: 0;
  }

  .inner {
    background: #fff;
    width: calc(100% - 100px);
    box-shadow: 2px 2px 5px #666;
    padding: 36px;
    border-radius: 5px;

    @media (min-width: 1100px) {
      width: 1000px;
    }

    h1 {
      margin: 18px 0;
      font-family:  serif;
    }

    h2 {
      margin: 14px 0;
    }

    h3, h4 {
      margin: 10px 0;
    }

    hr {
      margin: 10px 0;
      width: 100%;
    }

    .big-hr {
      height: 0;
      border: 0;
      border-top: 2px solid black;
    }

    p {
      margin: 15px 0;
      color: #444;
      line-height: 24px;
    }
  }
}
</style>
