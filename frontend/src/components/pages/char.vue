<template>
  <div class="char">
    <search/>
    <paper :title="$route.params.ch" dense>
      <div class="character" v-for="(pro, index) in info" :key="index">
        <hr v-if="index > 0">
        <div class="top-info">
          <div class="basic-info">
            <h3>读音{{ index + 1 }}</h3>
            <h4>基本资料</h4>
            <p>
              中古：{{ pro.middleChinese.init }}母{{ pro.middleChinese.mouth }}口{{ pro.middleChinese.level }}等{{ pro.middleChinese.rhyme }}韵{{ pro.middleChinese.tone }}声 - [{{ pro.middleChinese.trans }}]
            </p>
            <p>
              反切：{{ pro.middleChinese.fanqie }}切</p>
            <p>
              汉语拼音：{{ pro.pinyin }}</p>
          </div>
        </div>
        <div v-for="(dialect, index) in pro.dialects" v-if="dialect.py" :key="index">
          <h4>{{ dialect.name }}</h4>
          <p>
            拼音：<strong>{{ dialect.py }}</strong></p>
        </div>
      </div>
    </paper>
  </div>
</template>

<script>
import axios from 'axios'
import paper from '@/components/elements/paper'
import search from '@/components/elements/search'

export default {
  name: 'index',
  components: {
    paper,
    search
  },
  async beforeRouteUpdate (to, from, next) {
    next()
    this.info = (await axios.get('/data/' + this.$route.params.ch)).data
  },
  async mounted () {
    this.info = (await axios.get('/data/' + this.$route.params.ch)).data
  },
  data: () => ({
    info: []
  })
}
</script>

<style lang="scss" scoped>
.char {
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ddd;

  .character{

    p {
      font-size: 14px;

      strong {
        color: #000;
        font-size: 18px;
      }
    }
    .top-info p{
      margin: 0;
    }
  }
}
</style>
