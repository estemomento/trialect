<template>
  <div class="not-found">
    <paper title="找不到网页！">
      <h3><router-link to="/">返回首页</router-link></h3>
    </paper>
  </div>
</template>

<script>
import Paper from '@/components/elements/paper'

export default {
  name: 'not-found',
  components: {
    Paper
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ddd;

  a {
    color: #000;
    text-decoration: underline;
  }
}
</style>
