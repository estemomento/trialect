<template>
  <div class="table-wrapper">
    <h2>声母</h2>
    <Phoneme sym="b" ipa="p" char="波"/>
    <Phoneme sym="p" ipa="pʰ" char="坡"/>
    <Phoneme sym="m" ipa="m" char="摸"/>
    <Phoneme sym="f" ipa="f" char="科"/>
    <Phoneme sym="d" ipa="t" char="多"/>
    <Phoneme sym="t" ipa="tʰ" char="拖"/>
    <Phoneme sym="n" ipa="n" char="挪"/>
    <Phoneme sym="l" ipa="l" char="罗"/>
    <Phoneme sym="sl" ipa="ɬ" char="锁"/>
    <br>
    <Phoneme sym="g" ipa="k" char="哥"/>
    <Phoneme sym="k" ipa="kʰ" char="戈"/>
    <Phoneme sym="gw" ipa="kʷ" char="光"/>
    <Phoneme sym="kw" ipa="kʷʰ" char="框"/>
    <Phoneme sym="ng" ipa="ŋ" char="鹅"/>
    <Phoneme sym="h" ipa="h" char="好"/>
    <Phoneme sym="z" ipa="ts" char="左"/>
    <Phoneme sym="c" ipa="tsʰ" char="初"/>
    <Phoneme sym="s" ipa="s" char="梳"/>
    <Phoneme sym="nj" ipa="ɳ" char="义"/>
    <Phoneme sym="j" ipa="j" char="衣"/>
    <Phoneme sym="w" ipa="w" char="蛙"/>
    <h2>韵母</h2>
    <Phoneme sym="a" ipa="a" char="阿"/>
    <Phoneme sym="ai" ipa="ai" char="埃"/>
    <Phoneme sym="au" ipa="au" char="拗"/>
    <Phoneme sym="am" ipa="am" char="暗"/>
    <Phoneme sym="an" ipa="an" char="眼"/>
    <Phoneme sym="ap" ipa="ap" char="鸭"/>
    <Phoneme sym="at" ipa="at" char="压"/>
    <br>
    <Phoneme sym="ia" ipa="ia" char="写"/>
    <Phoneme sym="iau" ipa="iau" char="小"/>
    <Phoneme sym="iam" ipa="iam" char="尖"/>
    <Phoneme sym="iang" ipa="iaŋ" char="惊"/>
    <Phoneme sym="iap" ipa="iap" char="接"/>
    <Phoneme sym="iak" ipa="iak" char="席"/>
    <br>
    <Phoneme sym="e" ipa="e" char="矮"/>
    <Phoneme sym="ei" ipa="ɛi" char="欧"/>
    <Phoneme sym="em" ipa="ɛm" char="森"/>
    <Phoneme sym="en" ipa="ɛn" char="恩"/>
    <Phoneme sym="ien" ipa="iɛn" char="先"/>
    <Phoneme sym="ep" ipa="ɛp" char="涩"/>
    <Phoneme sym="et" ipa="ɛt" char="色"/>
    <Phoneme sym="iet" ipa="iɛt" char="雪"/>
    <br>
    <Phoneme sym="i" ipa="i" char="衣"/>
    <Phoneme sym="eai" ipa="əi" char="位"/>
    <Phoneme sym="eau" ipa="əu" char="有"/>
    <Phoneme sym="eam" ipa="əm" char="音"/>
    <Phoneme sym="ean" ipa="ən" char="因"/>
    <Phoneme sym="eang" ipa="əŋ" char="莺"/>
    <Phoneme sym="eap" ipa="əp" char="入"/>
    <Phoneme sym="eat" ipa="ət" char="益"/>
    <Phoneme sym="eak" ipa="ək" char="格"/>
    <br>
    <Phoneme sym="o" ipa="ɔ" char="奥"/>
    <Phoneme sym="oi" ipa="ɔi" char="哀"/>
    <Phoneme sym="on" ipa="ɔn" char="安"/>
    <Phoneme sym="ong" ipa="ɔŋ" char="当"/>
    <Phoneme sym="iong" ipa="iɔŋ" char="想"/>
    <Phoneme sym="ot" ipa="ɔt" char="说"/>
    <Phoneme sym="ok" ipa="ɔk" char="恶"/>
    <Phoneme sym="iok" ipa="iɔk" char="脚"/>
    <br>
    <Phoneme sym="u" ipa="u" char="乌"/>
    <Phoneme sym="ng" ipa="ŋ" char="五"/>
    <Phoneme sym="ung" ipa="uŋ" char="东"/>
    <Phoneme sym="uk" ipa="uk" char="屋"/>
    <h2>声调</h2>
    <Phoneme tone sym="1" :info="[{name: '阴平', val: 33, char: '诗'}]"/>
    <Phoneme tone sym="2" :info="[{name: '阳平', val: 24, char: '时'}]"/>
    <Phoneme tone sym="3" :info="[{name: '上声', val: 31, char: '使'}]"/>
    <Phoneme tone sym="4" :info="[{name: '去声', val: 51, char: '世'}]"/>
    <Phoneme tone sym="5" :info="[{name: '阴入', val: 2, char: '识'}]"/>
    <Phoneme tone sym="6" :info="[{name: '阳入', val: 5, char: '食'}]"/>
  </div>
</template>

<script>
import Phoneme from '@/elements/phoneme'
export default {
  components: { Phoneme }
}
</script>
