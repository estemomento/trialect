<template>
  <div class="about">
    <paper title="关于">
      <div class="about-top">
        <p v-for="(item, index) in intro" :key="index">
          <strong>{{ item.title }}</strong>
          <span>{{ item.content }}</span>
        </p>
      </div>
      <hr/>
      <div class="about-bottom">

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
        { title: 'Trialect的宗旨是什么？', content: '站长有感于茂名青少年方言能力急剧衰退、受普通话极大影响等现象，希望为茂名方言建立一个尽量详细的档案，发扬和传承茂名方言文化。Trialect是一块试验田，也是站长寄托的希望。本站开放源代码，也是为了尽可能让传播不受限制。' }
      ]
    }
  }
}
</script>

<style lang='scss'>
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
        height: 300px;
        background: #000;
      }
    }
  }
}
</style>
