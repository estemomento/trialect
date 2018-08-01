let fs = require('fs')

let result = require(process.argv[2])
  .map(({no, char, init, mouth, level, rhyme, tone, fanqie, trans, pinyin, maoming, xiadong, shalang}) => {
    return {
      no,
      char,
      middleChinese: { init, mouth, level, rhyme, tone, fanqie, trans },
      pinyin,
      dialects: [{ name: '粤语（茂名市区）', py: maoming },
                { name: '闽语（电白霞洞）', py: xiadong },
                { name: '客语（电白沙琅）', py: shalang }]
    }
  })
  .map(item => JSON.stringify(item))
  .join('\n')

fs.writeFileSync(process.argv[2], result)