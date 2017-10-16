<template>
  <div class="index">
    <div class="intro-wrapper">
      <div class="intro">
        <p class="big">宁卖祖宗田，不忘祖宗言。</p>
        <p class="small">——客家谚语</p>
      </div>
    </div>
    <div class="search-wrapper">
      <form class="search" @submit.prevent="search">
        <input type="search" name="input-char" id="input-char" placeholder="请输入要查询的汉字">
        <button type="submit">查询</button>
      </form>
    </div>
    <div class="card-wrapper">
      <card :img="pinyinBg" title="拼音方案" info="展示茂名白话、电白黎话、电白涯话三种方言的拼音方案以及各声韵调发音" addr="/pinyin"></card>
      <card :img="downloadBg" title="资源下载" info="提供茂名方言的历史资料、现有数据、专业研究等资料下载" addr="/download"></card>
      <card :img="aboutBg" title="关于本站" info="有关本站的信息和联系方式" addr="/about"></card>
    </div>
  </div>
</template>

<script>
import card from '@/components/elements/card'

export default {
  name: 'index',
  components: {
    card
  },
  data () {
    return {
      pinyinBg: require('@/assets/pinyin.jpg'),
      downloadBg: require('@/assets/download.jpg'),
      aboutBg: require('@/assets/about.jpg')
    }
  },
  methods: {
    search () {
      // TODO
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
    background: url(~@/assets/quote-bg.jpg);
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

  .search-wrapper {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    .search {
      height: 60px;
      box-shadow: 2px 2px 5px #666;
      border: 0;
      border-radius: 5px;
      background: #fff;

      input[type=search] {
        width: 400px;
        height: 60px;
        font-size: 24px;
        border: 0;
        border-radius: 5px;
        padding: 10px;
      }

      button {
        width: 100px;
        height: 60px;
        font-size: 24px;
        border: 0;
        border-radius: 5px;
        padding: 10px;
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
