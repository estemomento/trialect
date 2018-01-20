<template>
  <div class="stat-wrapper">
    <div class="stat">
      <p>收录：<strong>{{ info.charNum }}</strong>字、<strong>{{ info.proNum }}</strong>韵、<strong>{{ info.mmNum + info.xdNum + info.ulNum }}</strong>方言读音</p>
      <p>其中粤语<strong>{{ info.mmNum }}</strong>个，闽语<strong>{{ info.xdNum }}</strong>个，客语<strong>{{ info.ulNum }}</strong>个</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'stat',
  data: () => ({
    info: []
  }),
  async mounted () {
    this.info = (await axios.get('/stat')).data
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
