<template>
  <div class="stat-wrapper">
    <div class="stat">
      <p>目前收录：<strong>{{ info.charNum }}</strong>汉字、<strong>{{ info.proNum }}</strong>音韵、<strong>{{ info.mmNum + info.xdNum + info.ulNum }}</strong>方言读音</p>
      <p>其中粤语<strong>{{ info.mmNum }}</strong>个，闽语<strong>{{ info.xdNum }}</strong>个，客家话<strong>{{ info.ulNum }}</strong>个</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stat',
  mounted () {
    var addr = '/stat/'
    var request = new XMLHttpRequest()
    request.responseType = 'json'
    request.open('GET', addr)
    request.onload = () => {
      if (request.status === 200) {
        this.info = request.response
      }
    }
    request.send()
  },
  data () {
    return {
      info: []
    }
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
    font-size: 12px;

    strong {
      font-size: 20px;
    }
  }
}
</style>
