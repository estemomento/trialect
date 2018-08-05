<template>
  <div class="pinyin">
    <paper title="拼音">
      <div class="selector">
        <button class="selector-opt"
        v-for="(v, i) in schemes"
        @click="() => open = v.val"
        :key="i"
        :class="{selected: open === v.val}">{{v.name}}</button>
      </div>
      <transition name="fade" mode="out-in">
        <maoming v-if="open === 'y-mm'"></maoming>
        <xiadong v-else-if="open === 'm-xd'"></xiadong>
        <shalang v-else-if="open === 'k-sl'"></shalang>
      </transition>
    </paper>
  </div>
</template>

<script>
import Paper from '@/elements/paper'
import Maoming from '@/elements/pinyin-scheme/maoming'
import Xiadong from '@/elements/pinyin-scheme/xiadong'
import Shalang from '@/elements/pinyin-scheme/shalang'

export default {
  name: 'pinyin',
  components: { Paper, Maoming, Xiadong, Shalang },
  data: () => ({
    schemes: [
      {name: '粤语（茂名市区）', val: 'y-mm'},
      {name: '闽语（电白霞洞）', val: 'm-xd'},
      {name: '客语（电白沙琅）', val: 'k-sl'}
    ],
    open: 'y-mm'
  })
}
</script>

<style lang='scss'>
@import '../assets/const.scss';

.pinyin {
  .wrapper {
    .inner {
      user-select: none;
      
      .selector {
        margin: 12px 0 0;
        
        button.selector-opt {
          transition: 200ms;
          margin: 0 8px 0 0;
          border: 0;
          border-radius: 4px;
          width: 132px;
          height: 32px;
          font-size: 14px;
          cursor: pointer;
          background: transparent;
          outline: none;

          &:hover,
          &.selected {
            color: white;
            background: $main-color;
          }
        }
      }

      .table-wrapper {
        width: 100%;
        overflow: auto;

        h2 {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>