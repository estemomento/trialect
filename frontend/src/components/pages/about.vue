<template>
  <div class="about">
    <paper title="关于">
      <div class="about-top">
        <p v-for="(item, index) in intro" :key="index">
          <strong>{{ item.title }}</strong>
          <span>{{ item.content }}</span>
        </p>
      </div>
      <hr>
      <div class="about-mid">
        <p><strong>特别鸣谢：</strong></p>
        <p>戴由武先生、戴汉辉先生、李健教授——提供方言语料</p>
        <p>小翠——提供沙琅话读音</p>
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
          <img src="http://trialect-oss.oss-cn-shenzhen.aliyuncs.com/sponsor.png"></img>
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
      intro: [
        { title: '为什么这个网站叫做Trialect呢？', content: '茂名地区拥有三大类不同方言：粤语、闽语、客家话。所以把代表「三」的前缀 tri- 和方言 dialect 组合起来，就有了Trialect这个名字。' },
        { title: 'Trialect网站提供什么信息和功能？', content: 'Trialect目前提供茂名白话（市区口音）、电白黎话（霞洞口音）和电白涯话（沙琅口音）三种方言的拼音方案和常用字语音查询，另外提供一些常用的茂名方言研究资料。未来网站将加入更多地区的口音和在线发音功能。' },
        { title: 'Trialect的宗旨是什么？', content: '站长有感于茂名青少年方言能力急剧衰退、受普通话极大影响等现象，希望为茂名方言建立一个尽量详细的档案，发扬和传承茂名方言文化。Trialect是一块试验田，也是站长寄托的希望。' }
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
          height: 250px;
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
