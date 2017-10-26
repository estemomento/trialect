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
      <card :img="pinyinBg" title="拼音方案" info="展示白话、黎话、涯话三种方言的拼音方案以及各声韵调发音" addr="/pinyin"></card>
      <card :img="downloadBg" title="相关资源" info="提供茂名方言的历史资料、现有数据、专业研究等资料索引" addr="/resource"></card>
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
      pinyinBg: 'http://trialect-oss.oss-cn-shenzhen.aliyuncs.com/pinyin.jpg',
      downloadBg: 'http://trialect-oss.oss-cn-shenzhen.aliyuncs.com/download.jpg',
      aboutBg: 'http://trialect-oss.oss-cn-shenzhen.aliyuncs.com/about.jpg'
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
    background: url('http://trialect-oss.oss-cn-shenzhen.aliyuncs.com/quote-bg.jpg');
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
        font-family: "Source Han Serif CN", serif;
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
