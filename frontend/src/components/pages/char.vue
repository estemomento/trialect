<template>
  <div class="char">
    <search/>
    <paper :title="$route.params.ch">
      <div class="character" v-for="(pron, index) in info" :key="index">
        <hr v-if="index > 0">
        <div class="top-info">
          <div class="basic-info">
            <h2>读音{{ index + 1 }}</h2>
            <h3>基本资料</h3>
            <p>
              <strong>中古：</strong>{{ pro.middleChinese.init }}母{{ pro.middleChinese.mouth }}口{{ pro.middleChinese.level }}等{{ pro.middleChinese.rhyme }}韵{{ pro.middleChinese.tone }}声 - [{{ pro.middleChinese.trans }}]
            </p>
            <p>
              <strong>反切：</strong>{{ pro.middleChinese.fanqie }}切</p>
            <p>
              <strong>汉语拼音：</strong>{{ pro.pinyin }}</p>
          </div>
        </div>
        <div v-for="(dialect, index) in pro.dialects" :key="index">
          <hr>
          <h3>{{ dialect.name }}</h3>
          <p>
            <strong>拼音：</strong>{{ dialect.py }}</p>
        </div>
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
  beforeRouteUpdate (to, from, next) {
    next()
    this.getchar()
  },
  mounted () {
    this.getchar()
  },
  methods: {
    getchar () {
      var addr = '/data/' + this.$route.params.ch
      var request = new XMLHttpRequest()
      request.responseType = 'json'
      request.open('GET', addr)
      request.onload = () => {
        if (request.status === 200) {
          this.info = request.response
        }
      }
      request.send()
    }
  },
  data () {
    return {
      info: []
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
}
</style>
