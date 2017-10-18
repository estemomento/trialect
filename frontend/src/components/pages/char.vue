<template>
  <div class="char">
    <search/>
    <paper :title="$route.params.ch">
      <div class="top-info">
        <div class="basic-info">
          <h2>基本资料</h2>
          <p>
            <strong>中古：</strong>{{ basic.midInit }}母{{ basic.midRime }}韵{{ basic.midLevel }}等{{ basic.midMouth }}口 —— {{ basic.polyPY }}
          </p>
          <p>
            <strong>反切：</strong>{{ basic.fqUpper + basic.fqLower }}切</p>
          <p>
            <strong>汉语拼音：</strong>{{ basic.pyInit + basic.pyRime }}</p>
        </div>
      </div>
      <div v-for="(item, index) in dialects" :key="index">
        <hr>
        <h2>{{ item.name }}</h2>
        <p>
          <strong>拼音一：</strong>{{ item.init + item.rime + item.tone}}</p>
        <p v-if="item.rime2 !== ''">
          <strong>拼音二：</strong>{{ item.init2 + item.rime2 + item.tone2}}</p>
      </div>
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
    getchar () { // this.basic =
    }
  },
  data () {
    return {
      basic: { midInit: '生', midRime: '语', midLevel: '三', midMouth: '开', polyPY: 'sriox', fqUpper: '踈', fqLower: '舉', pyInit: '', pyRime: '' },
      dialects: [
        { name: '茂名白话', init: 's', rime: 'o', tone: '2', rime2: '' }
      ]
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
