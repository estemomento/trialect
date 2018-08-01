<template>
  <div class="stat-wrapper">
    <div class="stat">
      <p>收录：<strong>{{ info.char }}</strong>字、<strong>{{ info.rhyme }}</strong>韵、<strong>{{ info.pronunciation }}</strong>方言读音</p>
      <p>其中粤语<strong>{{ info.maoming }}</strong>个，闽语<strong>{{ info.xiadong }}</strong>个，客语<strong>{{ info.shalang }}</strong>个</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'stat',
  data: () => ({
    info: {}
  }),
  async mounted () {
    this.info = (await axios.get('/stat')).data
    for (const i in this.info) this.info[i] = this.info[i].toLocaleString()
  }
}
</script>

<style lang="scss" scoped>
.stat-wrapper {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 12px;
    }

    strong {
      font-size: 20px;
    }
  }
}
</style>
