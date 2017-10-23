<template>
  <div class="char">
    <search/>
    <paper :title="$route.params.ch">
      <div class="char1">
        <div class="top-info">
          <div class="basic-info">
            <h2 v-if="info2.mcm">读音一</h2>
            <h3>基本资料</h3>
            <p>
              <strong>中古：</strong>{{ info1.mci }}母{{ info1.mcm }}口{{ info1.mcc }}等{{ info1.mcr }}韵{{ info1.mct }}声 - [{{ info1.mcp }}]
            </p>
            <p>
              <strong>反切：</strong>{{ info1.mcf }}切</p>
            <p>
              <strong>汉语拼音：</strong>{{ info1.py }}</p>
          </div>
        </div>
        <div v-for="(item, index) in dialects1" :key="index">
          <hr>
          <h3>{{ item.name }}</h3>
          <p>
            <strong>拼音：</strong>{{ item.py }}</p>
        </div>
      </div>
      <div class="char2" v-if="info2.mcm">
        <hr class="big-hr">
        <div class="top-info">
          <div class="basic-info">
            <h2>读音二</h2>
            <h3>基本资料</h3>
            <p>
              <strong>中古：</strong>{{ info2.mci }}母{{ info2.mcm }}口{{ info2.mcc }}等{{ info2.mcr }}韵{{ info2.mct }}声 - [{{ info2.mcp }}]
            </p>
            <p>
              <strong>反切：</strong>{{ info2.mcf }}切</p>
            <p>
              <strong>汉语拼音：</strong>{{ info2.py }}</p>
          </div>
        </div>
        <div v-for="(item, index) in dialects2" :key="index">
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
    getchar () {
      var addr = '/data/' + this.$route.params.ch
      var request = new XMLHttpRequest()
      request.responseType = 'json'
      request.open('GET', addr)
      request.onload = () => {
        if (request.status === 200) {
          this.info1 = request.response[0]
          this.dialects1 = []
          if (this.info1.mm !== '') {
            this.dialects1.push({ name: '白话（茂名市区）', py: this.info1.mm })
          }
          if (this.info1.xd !== '') {
            this.dialects1.push({ name: '黎话（电白霞洞）', py: this.info1.xd })
          }
          if (this.info1.ul !== '') {
            this.dialects1.push({ name: '涯话（电白沙琅）', py: this.info1.ul })
          }
          if (request.response[1]) {
            this.info2 = request.response[1]
            this.dialects2 = []
            if (this.info1.mm !== '') {
              this.dialects2.push({ name: '白话（茂名市区）', py: this.info2.mm })
            }
            if (this.info1.xd !== '') {
              this.dialects2.push({ name: '黎话（电白霞洞）', py: this.info2.xd })
            }
            if (this.info1.ul !== '') {
              this.dialects2.push({ name: '涯话（电白沙琅）', py: this.info2.ul })
            }
          } else {
            this.info2 = {}
            this.dialects2 = []
          }
        }
      }
      request.send()
    }
  },
  data () {
    return {
      info1: {},
      dialects1: [],
      info2: {},
      dialects2: []
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
