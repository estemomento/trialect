<template>
  <div class="index">
    <div class="intro-wrapper">
      <div class="intro">
        <p class="big">宁卖祖宗田，不忘祖宗言。</p>
        <p class="small">——客家谚语</p>
      </div>
    </div>
    <search/>
    <div class="card-wrapper">
      <card :img="pinyinBg" title="拼音方案" info="展示各方言拼音方案及其发音、例字" addr="/pinyin"></card>
      <card :img="downloadBg" title="相关资料" info="提供茂名方言的资料、数据等的索引" addr="/resource"></card>
      <card :img="aboutBg" title="关于本站" info="有关本站的信息和联系方式" addr="/about"></card>
    </div>
  </div>
</template>

<script>
import card from '@/components/elements/card'
import search from '@/components/elements/search'

export default {
  name: 'index',
  components: {
    card,
    search
  },
  data () {
    return {
      pinyinBg: 'http://trialect-oss.oss-cn-shenzhen-internal.aliyuncs.com/pinyin.jpg',
      downloadBg: 'http://trialect-oss.oss-cn-shenzhen-internal.aliyuncs.com/download.jpg',
      aboutBg: 'http://trialect-oss.oss-cn-shenzhen-internal.aliyuncs.com/about.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ddd;

  .intro-wrapper {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('http://trialect-oss.oss-cn-shenzhen-internal.aliyuncs.com/quote-bg.jpg');
    background-size: cover;

    .intro {
      transition: 0.2s;
      background: #fff;
      width: 400px;
      height: 80px;
      box-shadow: 2px 2px 5px #666;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border-radius: 5px;

      &:hover {
        transition: 0.2s;
        box-shadow: 5px 5px 10px #333;
      }

      .big {
        font-size: 30px;
        font-family: "KaiTi", serif;
      }

      .small {
        font-size: 12px;
        align-self: flex-end;
      }
    }
  }

  .card-wrapper {
    height: 300px;
    width: 700px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
