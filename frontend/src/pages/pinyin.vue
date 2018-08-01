<template>
  <div class="pinyin">
    <paper title="拼音">
      <select v-model="open">
        <option value="maoming">粤语（茂名市区）</option>
        <option value="xiadong">闽语（电白霞洞）</option>
        <option value="shalang">客语（电白沙琅）</option>
      </select>
      <hr>
      <transition name="fade" mode="out-in">
        <maoming-scheme v-if="open === 'maoming'"></maoming-scheme>
        <xiadong-scheme v-else-if="open === 'xiadong'"></xiadong-scheme>
        <shalang-scheme v-else-if="open === 'shalang'"></shalang-scheme>
      </transition>
    </paper>
  </div>
</template>

<script>
import Paper from '@/elements/paper'
import MaomingScheme from '@/elements/pinyin-scheme/maoming'
import XiadongScheme from '@/elements/pinyin-scheme/xiadong'
import ShalangScheme from '@/elements/pinyin-scheme/shalang'

export default {
  name: 'pinyin',
  components: { Paper, MaomingScheme, XiadongScheme, ShalangScheme },
  data: () => ({
    open: 'maoming'
  })
}
</script>

<style lang='scss'>
.pinyin {
  .wrapper {
    .inner {
      select {
        border: 1px solid black;
        font-size: 16px;
        height: 30px;
      }

      .table-wrapper {
        width: 100%;
        overflow: auto;
      }

      table {
        width: 100px;
        white-space: nowrap;
        table-layout: fixed;
        margin: 5px 0;
        text-align: center;

        th, td {
          white-space: nowrap;
          font-size: 18px;
          width: 60px;

          @media (max-width:1000px) {
            font-size: 16px;
            width: 45px;
          }

          @media (max-width:767px) {
            font-size: 14px;
            width: 30px;
          }
        }
      }
    }
  }
}
</style>