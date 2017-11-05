<template>
  <div class="stat-wrapper">
    <div class="stat">
      <p>收录<strong>{{ info.charNum }}</strong>个汉字的<strong>{{ info.proNum }}</strong>种读法，其中：
      粤语：<strong>{{ info.mmNum }}</strong>种，雷话：<strong>{{ info.xdNum }}</strong>种，𠊎话：<strong>{{ info.ulNum }}</strong>种</p>
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
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .stat {
    font-size: 12px;

    strong {
      font-size: 20px;
    }
  }
}
</style>
