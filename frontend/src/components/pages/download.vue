<template>
  <div class="download">
    <paper title="下载">
    </paper>
  </div>
</template>

<script>
import paper from '@/components/elements/paper'

export default {
  name: 'download',
  components: {
    paper
  }
}
</script>

<style lang='scss' scoped>
.download {
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
