<template>
  <div class="char">
    <search/>
    <paper :title="$route.params.ch">
      <div class="character" v-for="(dialect, index) in dialects" :key="index">
        <hr v-if="index > 0">
        <div class="top-info">
          <div class="basic-info">
            <h2>读音{{ index + 1 }}</h2>
            <h3>基本资料</h3>
            <p>
              <strong>中古：</strong>{{ info[index].mci }}母{{ info[index].mcm }}口{{ info[index].mcc }}等{{ info[index].mcr }}韵{{ info[index].mct }}声 - [{{ info[index].mcp }}]
            </p>
            <p>
              <strong>反切：</strong>{{ info[index].mcf }}切</p>
            <p>
              <strong>汉语拼音：</strong>{{ info[index].py }}</p>
          </div>
        </div>
        <div v-for="(item, index) in dialect" :key="index">
          <hr>
          <h3>{{ item.name }}</h3>
          <p>
            <strong>拼音：</strong>{{ item.py }}</p>
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
    handle (response) {
      this.info = response
      this.dialects = []
      this.info.forEach(e => {
        var d = []
        if (e.mm !== '') {
          d.push({ name: '粤语（茂名市区）', py: e.mm })
        }
        if (e.xd !== '') {
          d.push({ name: '雷话（电白霞洞）', py: e.xd })
        }
        if (e.ul !== '') {
          d.push({ name: '𠊎话（电白沙琅）', py: e.ul })
        }
        this.dialects.push(d)
      }, this)
    },
    getchar () {
      var addr = '/data/' + this.$route.params.ch
      var request = new XMLHttpRequest()
      request.responseType = 'json'
      request.open('GET', addr)
      request.onload = () => {
        if (request.status === 200) {
          this.handle(request.response)
        }
      }
      request.send()
    }
  },
  data () {
    return {
      info: [],
      dialects: []
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
