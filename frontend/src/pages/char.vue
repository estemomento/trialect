<template>
  <div class="char">
    <search/>
    <paper :title="$route.params.ch" dense>
      <div class="character" v-for="(pro, index) in info" :key="index">
        <hr v-if="index > 0">
        <h3>读音 {{ index + 1 }}</h3>
        <div class="info">
          <div class="basic">
            <h4>基本资料</h4>
            <p>
              中古：{{ pro.middleChinese.init }}母{{ pro.middleChinese.mouth }}口{{ pro.middleChinese.level }}等{{ pro.middleChinese.rhyme }}韵{{ pro.middleChinese.tone }}声 - [{{ pro.middleChinese.trans }}]
            </p>
            <p>
              反切：{{ pro.middleChinese.fanqie }}切</p>
            <p>
              汉语拼音：{{ pro.pinyin }}</p>
          </div>
          <div class="pinyin">
            <h4>读音</h4>
            <div v-for="(dialect, index) in pro.dialects" v-if="dialect.py" :key="index">
              <p>{{ dialect.name }}
                <strong>{{ dialect.py.slice(0, -1) }}<sup>{{dialect.py.slice(-1)}}</sup></strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </paper>
  </div>
</template>

<script>
import axios from 'axios'
import Paper from '@/elements/paper'
import Search from '@/elements/search'

export default {
  name: 'char',
  components: {
    Paper,
    Search
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
  .character{
    p {
      font-size: 14px;

      strong {
        color: black;
        font-size: 24px;
      }
    }

    .info {
      display: flex;

      @media (max-width: 767px) {
        flex-direction: column;
      }

      .basic, .pinyin {
        width: 50%;

        @media (max-width: 767px) {
          width: 100%;
        }
      }

      p {
        margin: 0;
      }
    }
  }
}
</style>
