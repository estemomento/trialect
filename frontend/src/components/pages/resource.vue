<template>
  <div class="resource">
    <paper title="资源">
      <strong>所有资源来源网络。本站仅提供索引，并不表示本站拥有资源的版权，请使用者自觉遵守版权规定。</strong>
      <p><a href="http://pan.baidu.com/s/1qYBNTEG">百度云下载</a>，密码：f8fs</p>
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
