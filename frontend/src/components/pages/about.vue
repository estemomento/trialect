<template>
  <div class="about">
    <paper title="关于">
      <div class="about-top">
        <p v-for="(item, index) in intro" :key="index">
          <strong>{{ item.title }}</strong>
          <span>{{ item.content }}</span>
        </p>
        <strong>如在使用过程中发现有错误或者希望补充更多方言数据，欢迎各位通过下面的联系方式与站长联系，站长将尽快解决。</strong>
      </div>
      <hr>
      <div class="about-mid">
        <h2>资料提供</h2>
        <div>
          <h3>粤语：</h3>
          <p v-for="(item, index) in yue" :key="index">
            <strong>{{ item.place }}：</strong>
            <span>{{ item.contrib }}</span>
          </p>
        </div>
        <div>
          <h3>闽语：</h3>
          <p v-for="(item, index) in min" :key="index">
            <strong>{{ item.place }}：</strong>
            <span>{{ item.contrib }}</span>
          </p>
        </div>
        <div>
          <h3>客家话：</h3>
          <p v-for="(item, index) in ke" :key="index">
            <strong>{{ item.place }}：</strong>
            <span>{{ item.contrib }}</span>
          </p>
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
            协议开放源代码，您可以在上面的
            <a href="https://github.com/estemomento/trialect">GitHub仓库</a>
            中找到。
          </p>
          <p>所有资料与图片来源网络，如有侵权请即与站长联系。</p>
        </div>
        <div class="right">
          <h2>赞助本站</h2>
          <p>欢迎赞助服务器钱，所有花销都会公布到GitHub上面：）</p>
          <img :src="sponsor"></img>
        </div>
      </div>
    </paper>
  </div>
</template>

<script>
import paper from '@/components/elements/paper'

export default {
  name: 'about',
  components: {
    paper
  },
  data () {
    return {
      sponsor: require('@/assets/sponsor.png'),
      intro: [
        { title: '为什么这个网站叫做Trialect呢？', content: '茂名地区有三大类方言：粤语、闽语、客家话。所以把代表「三」的前缀 tri- 和方言 dialect 组合起来，就有了Trialect这个名字。' },
        { title: 'Trialect网站提供什么信息和功能？', content: 'Trialect目前提供粤语（茂名市区）、闽语（电白霞洞）和客家话（电白沙琅）三种方言的拼音方案和常用字查询，另提供一些茂名方言研究资料索引。未来将加入更多地区的口音和在线发音功能。' },
        { title: 'Trialect的宗旨是什么？', content: '站长有感茂名青少年方言能力极大衰退，希望为茂名方言建立数字化的档案，发扬和传承茂名方言文化。本站秉持非营利原则，一切收入都会用作网站相关用途。' }
      ],
      yue: [
        { place: '茂名市区', contrib: '《茂名市志》、Aleko Lau' }
      ],
      min: [
        { place: '电白霞洞', contrib: '《电白方言志》' }
      ],
      ke: [
        { place: '电白沙琅', contrib: '《电白方言志》、《粤西客家方言调查报告》、小翠' }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.about {
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ddd;

  .wrapper {
    .inner {
      .about-top {
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      .about-mid {
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      .about-bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;

        a {
          color: #000;
        }

        .left,
        .right {
          width: 320px;
          height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          img {
            height: 150px;
            width: 150px;
          }
        }
      }
    }
  }
}
</style>
