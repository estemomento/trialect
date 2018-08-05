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
    <Phoneme sym="sl" ipa="ɬ" char="梭"/>
    <br>
    <Phoneme sym="g" ipa="k" char="哥"/>
    <Phoneme sym="k" ipa="kʰ" char="柯"/>
    <Phoneme sym="gw" ipa="kʷ" char="瓜"/>
    <Phoneme sym="kw" ipa="kʷʰ" char="夸"/>
    <Phoneme sym="ng" ipa="ŋ" char="我"/>
    <Phoneme sym="h" ipa="h" char="何"/>
    <Phoneme sym="z" ipa="tʃ" char="左"/>
    <Phoneme sym="c" ipa="tʃʰ" char="错"/>
    <Phoneme sym="s" ipa="ʃ" char="所"/>
    <Phoneme sym="nj" ipa="ɳ" char="日"/>
    <Phoneme sym="j" ipa="j" char="也"/>
    <Phoneme sym="w" ipa="ʋ" char="话"/>
    <h2>韵母</h2>
    <Phoneme sym="aa" ipa="a" char="渣"/>
    <Phoneme sym="aai" ipa="ai" char="斋"/>
    <Phoneme sym="aau" ipa="au" char="罩"/>
    <Phoneme sym="aam" ipa="am" char="湛"/>
    <Phoneme sym="aan" ipa="an" char="赞"/>
    <Phoneme sym="aang" ipa="aŋ" char="争"/>
    <Phoneme sym="aap" ipa="ap" char="杂"/>
    <Phoneme sym="aat" ipa="at" char="扎"/>
    <Phoneme sym="aak" ipa="ak" char="责"/>
    <br>
    <Phoneme sym="ai" ipa="ɐi" char="制"/>
    <Phoneme sym="au" ipa="ɐu" char="走"/>
    <Phoneme sym="am" ipa="ɐm" char="针"/>
    <Phoneme sym="an" ipa="ɐn" char="真"/>
    <Phoneme sym="ang" ipa="ɐŋ" char="铮"/>
    <Phoneme sym="ap" ipa="ɐp" char="集"/>
    <Phoneme sym="at" ipa="ɐt" char="窒"/>
    <Phoneme sym="ak" ipa="ɐk" char="则"/>
    <br>
    <Phoneme sym="e" ipa="ɛ" char="姐"/>
    <Phoneme sym="ei" ipa="ei" char="四"/>
    <Phoneme sym="eu" ipa="jɐu" char="猫"/>
    <Phoneme sym="em" ipa="jɐm" char="点"/>
    <Phoneme sym="en" ipa="en" char="片"/>
    <Phoneme sym="eng" ipa="jɐŋ" char="张"/>
    <Phoneme sym="ep" ipa="jɐp" char="夹"/>
    <Phoneme sym="et" ipa="et" char="裂"/>
    <Phoneme sym="ek" ipa="jɐk" char="着"/>
    <br>
    <Phoneme sym="i" ipa="i" char="资"/>
    <Phoneme sym="iu" ipa="iu" char="招"/>
    <Phoneme sym="im" ipa="im" char="尖"/>
    <Phoneme sym="in" ipa="in" char="煎"/>
    <Phoneme sym="ing" ipa="ɪŋ" char="精"/>
    <Phoneme sym="ip" ipa="ip" char="接"/>
    <Phoneme sym="it" ipa="it" char="节"/>
    <Phoneme sym="ik" ipa="ɪk" char="直"/>
    <br>
    <Phoneme sym="o" ipa="ɔ" char="左"/>
    <Phoneme sym="oi" ipa="ʷɔi" char="栽"/>
    <Phoneme sym="ou" ipa="ou" char="遭"/>
    <Phoneme sym="on" ipa="ʷɔn" char="安"/>
    <Phoneme sym="ong" ipa="ʷɔŋ" char="庄"/>
    <Phoneme sym="ot" ipa="ʷɔt" char="割"/>
    <Phoneme sym="ok" ipa="ʷɔk" char="捉"/>
    <br>
    <Phoneme sym="u" ipa="u" char="乌"/>
    <Phoneme sym="ui" ipa="ui" char="追"/>
    <Phoneme sym="un" ipa="un" char="欢"/>
    <Phoneme sym="ung" ipa="ʊŋ" char="中"/>
    <Phoneme sym="ut" ipa="ut" char="阔"/>
    <Phoneme sym="uk" ipa="ʊk" char="足"/>
    <br>
    <Phoneme sym="yu" ipa="y" char="猪"/>
    <Phoneme sym="ng" ipa="ŋ" char="五"/>
    <Phoneme sym="yun" ipa="yn" char="专"/>
    <Phoneme sym="yut" ipa="yt" char="绝"/>
    <h2>声调</h2>
    <Phoneme tone sym="1" :info="[{name: '阴平', val: 53, char: '分'}, {name: '阴入', val: 5, char: '忽'}]"/>
    <Phoneme tone sym="2" :info="[{name: '阴上', val: 35, char: '粉'}]"/>
    <Phoneme tone sym="3" :info="[{name: '阴去', val: 33, char: '训'}, {name: '阴入', val: 3, char: '发'}]"/>
    <Phoneme tone sym="4" :info="[{name: '阳平', val: 11, char: '焚'}]"/>
    <Phoneme tone sym="5" :info="[{name: '阳上', val: 23, char: '愤'}]"/>
    <Phoneme tone sym="6" :info="[{name: '阳去', val: 22, char: '份'}, {name: '阳入', val: 2, char: '佛'}]"/>
  </div>
</template>

<script>
import Phoneme from '@/elements/phoneme'
export default {
  components: { Phoneme }
}
</script>

