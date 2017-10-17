<template>
  <div class="char">
    <search/>
    <paper :title="$route.params.ch">
      
    </paper>
  </div>
</template>

<script>
import paper from '@/components/elements/paper'
import search from '@/components/elements/search'

export default {
  name: 'index',
  components: {
    paper,
    search
  },
  methods: {
    getchar () {
    }
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
