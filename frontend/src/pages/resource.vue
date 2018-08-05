<template>
  <div class="resource">
    <paper title="资料">
      <p><strong>本站仅提供索引，不提供下载链接，可向版权方索取或自行搜索下载。请尊重版权所有者权益。</strong></p>
      <hr>
      <div class="list">
        <h2>书籍</h2>
        <h3>方言志、词典</h3>
        <span v-for="(v, i) in fyz" :key="i">
          <strong>《{{ v.title }}》</strong>{{ v.author }}
        </span>
        <h3>其他参考书籍</h3>
        <span v-for="(v, i) in book" :key="i">
          <strong>《{{ v.title }}》</strong>{{ v.author }}
        </span>
        <h2>论文</h2>
        <span v-for="(v, i) in essay" :key="i">
          <strong>《{{ v.title }}》</strong>{{ v.author }}
        </span>
      </div>
    </paper>
  </div>
</template>

<script>
import Paper from '@/elements/paper'

export default {
  name: 'resource',
  components: { Paper },
  data: () => ({
    fyz: [
      {title: '茂名市志', author: '茂名市地方志编纂委员会'},
      {title: '电白方言志', author: '戴由武、戴汉辉'},
      {title: '信宜方言志', author: '罗康宁'},
      {title: '化州市志', author: '化州市地方志编纂委员会'},
      {title: '雷州方言词典', author: '李荣'}
    ],
    book: [
      {title: '方言调查字表（第二版）', author: '中国社会科学院语言研究所'},
      {title: '汉语音韵学', author: '王力'},
      {title: '汉语音韵学', author: '董同龢'},
      {title: '汉语方言的比较研究', author: '李如龙'},
      {title: '广东粤方言概要', author: '詹伯慧'},
      {title: '粤西客家方言调查报告', author: '李如龙'},
      {title: '粤西湛茂地区粤语语音研究', author: '邵慧君'},
      {title: '吴化粤语研究', author: '李健'},
      {title: '旧时正话研究', author: '陈李茂'},
      {title: '马兰话研究', author: '陈云龙'}
    ],
    essay: [
      {title: '在茂名白、客、黎方言中为何都有ɬ声母', author: '胡性初'},
      {title: '粤西闽语语音特点及内部差异', author: '林伦伦'},
      {title: '粤西茂名地区粤方言语音特点综论', author: '邵慧君'},
      {title: '粤方言语音特点探论', author: '李新魁'},
      {title: '信宜方言的文白异读', author: '叶国泉'},
      {title: '小探高州粤方言亲属称谓', author: '何起凤'},
      {title: '吴化粤语的历史形成', author: '李健'},
      {title: '趣话高州方言', author: '许浩然'},
      {title: '论粤方言i、u介音韵母——由粤西方言说起', author: '邵慧君'},
      {title: '化州那务粤语异读情况考察', author: '陈李茂'},
      {title: '化州官桥白话的音韵特点及其归属', author: ''},
      {title: '化州方言与高州方言语音接触研究——以同庆山口为例', author: '曾春燕'},
      {title: '广东茂名粤语小称综论', author: '邵慧君'},
      {title: '广东茂名方言研究述评', author: '陈李茂'},
      {title: '广东境内三大方言的相互影响', author: '詹伯慧'},
      {title: '广东化州那务话韵母的特点', author: '陈李茂'},
      {title: '广东方言特征及其成因', author: '胡兆量'},
      {title: '广东电白沙院黎话记略', author: '陈云龙'},
      {title: '广东电白旧时正话', author: '陈云龙'},
      {title: '广东电白“旧时正话”音系', author: '陈云龙'},
      {title: '高州粤语介词“戥”的功能', author: '曾春燕'},
      {title: '高州方言的变音', author: '曾春燕'},
      {title: '电白粤闽客三方言词汇比较接触研究', author: '卢坚伟'},
      {title: '电白霞洞闽客双方言词汇比较接触研究', author: '卢坚伟'},
      {title: '电白闽语语音特点及内部差异', author: '卢坚伟'},
      {title: '电白黎话初探', author: '李创国'},
      {title: '电白海话与厦门话的词汇比较', author: '卢坚伟'},
      {title: '电白沙琅涯话记略', author: '陈云龙'},
      {title: '从壮侗语族的bbdd看汉语方言海南话的bbdd和化州话的d', author: '梁猷刚'}
    ]
  })
}
</script>

<style lang="scss" scoped>
.resource {
  .list {
    span {
      display: inline-block;
      margin: 4px 0;
      width: 50%;
      font-size: 80%;

      @media (max-width: 767px) {
        width: 100%;
      }
      strong {
        font-size: 120%;
      }
    }
  }
}
</style>
