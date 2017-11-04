<template>
  <div class="resource">
    <paper title="资料">
      <strong>本站仅提供索引，不提供下载链接，可向版权方索取或自行搜索下载。请尊重版权所有者权益。</strong>
      <hr>
      <div class="list">

      </div>
    </paper>
  </div>
</template>

<script>
import paper from '@/components/elements/paper'

export default {
  name: 'resource',
  components: {
    paper
  }
}
</script>

<style lang='scss' scoped>
.resource {
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ddd;

  .wrapper {
    .inner {

    }
  }
}
</style>
