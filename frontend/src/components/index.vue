<template>
  <div class="index">
    <div class="intro-wrapper">
      <div class="intro">
        <p class="big">宁卖祖宗田，不忘祖宗言。</p>
        <p class="small">——客家谚语</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  justify-content: center;

  .intro {
    border: 1px solid #666;
    width: 400px;
    height: 60px;
    box-shadow: 3px 3px 3px #666;
    margin: 40px 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .big {
      font-size: 30px;
      font-family: serif;
    }
    .small {
      font-size: 12px;
      align-self: flex-end;
    }
  }
}
</style>
