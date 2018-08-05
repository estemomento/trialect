<template>
  <div class="about">
    <paper title="关于">
      <div class="about-top">
        <p v-for="(item, index) in intro" :key="index">
          <strong>{{ item.title }}</strong>
          <span>{{ item.content }}</span>
        </p>
        <p><strong>本站秉持非营利原则，相关收入均用于维护。勘误及合作事宜，可通过下列联系方式联系站长。</strong></p>
      </div>
      <hr>
      <div class="about-mid">
        <h2>方言数据源</h2>
        <div class="datasource">
          <div class="source" v-for="(v1, i) in contrib" :key="i">
            <h3>{{i}}</h3>
            <p v-for="(v2, j) in v1" :key="j">
              <strong>{{ v2.place }}：</strong>
              <span>{{ v2.contrib }}</span>
            </p>
          </div>
        </div>
      </div>
      <hr>
      <div class="about-bottom">
        <div class="left">
          <h2>联系方式</h2>
          <p>
            <strong>Mail: </strong>
            <a href="mailto:alejandrolau@msn.cn">alejandrolau@msn.cn</a>
          </p>
          <p>
            <strong>Telegram: </strong>
            <a href="https://t.me/alejandrolau">@alejandrolau</a>
          </p>
          <p>
            <strong>GitHub: </strong>
            <a href="https://github.com/estemomento">estemomento</a>
          </p>
          <p>本站基于
            <a href="http://www.gnu.org/licenses/gpl-3.0.html">GNU/GPL-3.0</a>
            协议开源，代码和数据托管在
            <a href="https://github.com/estemomento/trialect">GitHub 仓库</a>
            。
          </p>
          <p>资料来源网络，如有侵权请联系站长。</p>
        </div>
        <hr>
        <div class="right">
          <h2>赞助本站</h2>
          <p>欢迎赞助，所有支出都会公布：）</p>
          <img :src="sponsor">
        </div>
      </div>
    </paper>
  </div>
</template>

<script>
import Paper from '@/elements/paper'

export default {
  name: 'about',
  components: { Paper },
  data: () => ({
    sponsor: 'http://alekolau.cn/trialect/sponsor.png',
    intro: [
      { title: '为什么叫Trialect？', content: '茂名地区有三大类方言：粤语、闽语、客语。把代表「三」的 tri- 和方言 dialect 组合，就有了Trialect。' },
      { title: 'Trialect提供什么？', content: '目前提供三种方言的拼音方案和字音查询，另提供研究资料索引。未来将加入更多口音和在线发音。' },
      { title: 'Trialect的宗旨？', content: '通过建立方言数字档案保护濒危方言，发扬和传承茂名方言文化。' }
    ],
    contrib: {
      粤语: [
        { place: '茂名市区', contrib: '《茂名市志》、Aleko Lau' }
      ],
      闽语: [
        { place: '电白霞洞', contrib: '《电白方言志》' }
      ],
      客语: [
        { place: '电白沙琅', contrib: '《电白方言志》、《粤西客家方言调查报告》、小翠' }
      ]
    }
  })
}
</script>

<style lang='scss'>
.about {
  .wrapper {
    .inner {
      .about-mid {
        .datasource {
          display: flex;

          @media (max-width:767px) {
            flex-direction: column;
          }

          .source {
            display: inline-block;
            width: 33%;

            @media (max-width:767px) {
              width: 100%;
            }
          }
        }
      }
      .about-bottom {
        display: flex;
        justify-content: space-between;

        @media (max-width:767px) {
          flex-direction: column;
        }

        .left, .right {
          width: 50%;

          @media (max-width:767px) {
            width: 100%;
          }
        }

        a {
          color: #000;
        }

        hr {
          display: none;
          @media (max-width:767px) {
            display: block;
          }
        }

        img {
          height: 150px;
          width: 150px;
        }
      }
    }
  }
}
</style>
