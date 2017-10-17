<template>
  <div class="char">
    <paper title="找不到网页！">
      <h2><router-link to="/">返回首页</router-link></h2>
    </paper>
  </div>
</template>

<script>
import paper from '@/components/elements/paper'
import search from '@/components/elements/search'

export default {
  name: 'nochar',
  components: {
    paper,
    search
  }
}
</script>

<style lang="scss" scoped>
.char {
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ddd;

  .card-wrapper {
    height: 300px;
    width: 700px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
