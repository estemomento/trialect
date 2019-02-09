<template>
  <div class="index">
    <div class="intro-wrapper">
      <div class="intro">
        <p class="big">宁卖祖宗田，不忘祖宗言。</p>
        <p class="small">——客家谚语</p>
      </div>
    </div>
    <search/>
    <stat/>
    <div class="card-wrapper">
      <card img="assets/intro.png" title="方言概况" info="简要介绍茂名地区方言现状以及分布" addr="/intro"></card>
      <card img="assets/pinyin.jpg" title="拼音方案" info="展示各方言拼音方案及其发音、例字" addr="/pinyin"></card>
      <card img="assets/download.jpg" title="相关资料" info="提供茂名方言的资料、数据等的索引" addr="/resource"></card>
      <card img="assets/about.jpg" title="关于本站" info="有关本站的信息和联系方式" addr="/about"></card>
    </div>
  </div>
</template>

<script>
import Card from '@/elements/card'
import Stat from '@/elements/stat'
import Search from '@/elements/search'

export default {
  name: 'index',
  components: {
    Card,
    Stat,
    Search
  }
}
</script>

<style lang="scss">
.index {
  .intro-wrapper {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('assets/quote-bg.jpg');
    background-size: cover;

    @media (max-width:767px) {
      height: 200px;
    }

    .intro {
      width: 400px;
      height: 80px;
      background: #fff;
      box-shadow: 2px 2px 5px #666;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      opacity: 0.8;

      @media (max-width:767px) {
        width: 200px;
        height: 120px;
      }


      .big {
        font-size: 30px;
        font-family: serif;
      }

      .small {
        font-size: 12px;
        align-self: flex-end;
      }
    }
  }

  .card-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 1000px;
    height: 300px;

    @media (max-width:1000px) {
      width: 500px;
      height: 600px;
    }

    @media (max-width:500px) {
      width: 250px;
      height: 1200px;
    }
  }
}
</style>
