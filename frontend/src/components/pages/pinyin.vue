<template>
  <div class="pinyin">
    <paper title="拼音">
    </paper>
  </div>
</template>

<script>
import paper from '@/components/elements/paper'

export default {
  name: 'pinyin',
  components: {
    paper
  }
}
</script>

<style lang='scss' scoped>
.pinyin {
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ddd;

  .wrapper {
    .inner {
      height: 100px;
    }
  }
}
</style>