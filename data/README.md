# Trialect-data

> Character data related to the website / 网站的字音数据库

## Attention! / 注意！

This data is licensed with `GNU/GPL-3.0`, which allows you to download, distribute, modify it freely. However, all derivative forms of this data should be published with `GNU/GPL-3.0` and open to public. Any commercial or illegal use of this data is serious act of infringement. We preserve the right of taking legal action.

本数据版权协议为`GNU/GPL-3.0`，这代表您可以自由下载、分发、修改这份数据。但对这份数据任何衍生形式的再发布都需要以`GNU/GPL-3.0`协议授权并开放给公众。任何商业使用和违规使用都是严重的侵权行为，我方保留采取法律行动的权利。

## Format / 格式

```
{
    "no": Number / 编号,
    "char": Character / 汉字,
    "middleChinese": Middle Chinese / 中古汉语
    {
        "init": Initial / 声,
        "mouth": Mouth type / 呼,
        "level": Char level / 等,
        "rhyme": Rhyme / 韵,
        "tone": Tone / 调,
        "fanqie": Fanqie / 反切,
        "trans": Transliteration / 拼音转写
    },
    "pinyin": Hanyu Pinyin / 汉语拼音,
    "dialects": Dialects / 各方言
    [
        {"name": Dialect name / 方言名, "py": Dialect Pinyin / 方言拼音},
        {"name": ..., "py": ...},
        ...
    ]
}
```

## Usage / 用法

Using MongoDB / 使用MongoDB

```
mongoimport -d trialect -c trialect --file data.json --type json
```

If your MongoDB has access control, you should add `-u username` and `-p password` to authenticate.

如果你的MongoDB有权限控制，则需添加`-u username`和`-p password`属性以便鉴权。
