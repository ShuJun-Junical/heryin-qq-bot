const helps = {
    help: {
        description: '显示帮助',
        detail: `描述
    显示帮助
用法
    查看帮助
        .help
    查看某个命令的帮助
        .help [命令]`
    },
    info: {
        description: '查询记录',
        detail: `描述
    查询某人记录
用法
    info [@]
例子
    info
    info @小明`
    },
    sign: {
        description: '签到',
        detail: `描述
    每日签到，并获得 点数, 点数 X 服从 N(50，15 ^ 2)，每日 0:00 (GMT+8:00) 刷新
    每次签到最多获得 50 体力，上限为 100
用法
    .sign`
    },
    rank: {
        description: '查看点数排行榜',
        detail: `描述
    查看 点数 排行榜
用法
    .rank [查询范围] [页数]
        查询范围：here(本群)/all(所有群)，默认为 here。
        页数：默认为 1。
例子
    查看本群排行榜的第一页:
        .rank
        .rank 1
    查看总排行榜的第 2 页
        .rank all 2`
    },
    config: {
        description: '设置',
        detail: `描述
    更改设置
用法
    查看设置项
        .config [设置项]
    更改设置项
        .config [设置项] [值]
    目前支持的设置项
        public：true/false, 是否在排行榜显示 QQ 号, 默认为 false`
    },
    send: {
        description: '向他人发送点数',
        detail: `描述
    向他人发送点数
用法
    .send [@|QQ号] [点数]
例子
    .send 123456 1
    .send @小明 1`
    },
    image: {
        description: '发送随机 P 站图片',
        detail: `描述
    随机发送一张P站图片，每张图片消耗 5 点，可以添加标签限定随机范围。注：图源有限，非全站图片。
用法
    不限定范围
        .image
    限定范围， "|" 表示 "或"， 空格表示 "与"
            .image 少女|萝莉 黑发|白发`
    },
    run: {
        description: '运行代码',
        detail: `描述
    运行代码，返回运行结果，使用 .run 命令查看支持的语言。
用法
    .run [语言]
    <代码>
    请注意，代码请换行输入
例子
    .run py
    print(123)`
    },
    lot: {
        description: '抽奖',
        detail: `描述
    消耗 10 点， 进行一次抽奖
    等概率抽取 [1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 11, 15, 15, 15, 20, 70]
用法
    抽奖 1 次
        .lot
    抽奖 10 次
        .lot 10`
    },
    give: {
        description: '发送一个红包',
        detail: `描述
    发送一个红包
用法
    .give [点数] [红包数量]`
    },
    get: {
        description: '抢红包',
        detail: `描述
    抢红包
用法
    .get`
    },
    lucky: {
        description: '查看红包',
        detail: `描述
    查看红包
用法
    查看所有未抢完红包
        .lucky
    查看某个红包详细信息
        .lucky [ID]`
    },
//     rob: {
//         description: '抢劫',
//         detail: `描述
//     抢劫他人点数，若失败则被罚款，罚款点数等于抢劫点数。
//     若随机结果小于成功概率，则抢劫成功。
//     成功概率 = 双方点数最小值 / 双方点数总值
// 用法
//     .rob [QQ号|@] [点数]
// 例子
//     .rob @小明 10`
//     },
    hito: {
        description: '发送一条一言',
        detail: `描述
    发送一条一言
用法
    .hito
    .hito [分类]
    .hito [分类1] [分类2]
目前支持的分类
    注：使用分类功能消耗时间较长，有几率崩溃
    动画，漫画，游戏，文学，原创，网络，影视，诗词，网易云，哲学，抖机灵`
    },
//     idi: {
//         description: '猜成语',
//         detail: `描述
//     输入一个成语，返回一张图片，描述与正确答案的关系。答对获得 15 点，每轮游戏消耗 1 点。
// 用法
//     .idi [四字成语]
// 其他
//     图片中，蓝色注音或文字表示位置正确，橙色注音或文字表示答案中含有但位置不正确，灰色注音或文字表示答案中不含。`
//     },
    pixiv: {
        description: 'P 站图片辅助工具',
        detail: `描述
    P 站图片辅助工具，支持搜索，通过 PID 查询图片，通过 UID 以及 用户名称查询图片，R-18 内容已屏蔽。每张图片消耗 3 点。
参数
    -p [数字]  指定页数，仅在搜索模式下有效，默认为 1。
    -h [数字]  指定位置，在搜索模式和用户模式下有效。搜索模式下，若超过 60 则会累加到页数上(除以 60 并向下取整) 后对 60 取余。
    -pid [数字] 指定图片 PID。
    -uid [数字] 指定用户 UID，可与 -h 选项配合使用。若不存在 -h，则随机返回该用户的一个作品，否则返回按照时间顺序降序排列后的固定位置图片。
    -user [字符串] 指定用户名称，支持模糊搜索。可与 -h 选项配合使用，详见 -uid 选项帮助。
用法
    普通搜索（返回第 1 页的随机图片）
        .pixiv [搜索内容]
    指定页数搜索（返回某一页的随机图片）
        .pixiv -p 2 [搜索内容]
    指定位置搜索（固定页数，固定位置）
        搜索结果的第 2 页，第 2 张
        .pixiv -p 2 -h 2 [搜索内容]
        搜索结果的第 2 页，第 1 张 或 搜索结果的第 61 张
        .pixiv -h 61 [搜索内容]
    指定图片 PID
        .pixiv -pid 96037187
    指定用户 UID
        随机图片
        .pixiv -uid 887024
        第 2 新的图片
        .pixiv -uid 887024 -h 2
    指定用户名称
        .随机图片
        .pixiv -user demo
        第 2 新的图片
        .pixiv -user demo -h 2`
    },
    rd: {
        description: '猜谜语',
        detail: `描述
        猜谜语
        注：请添加机器人为好友。
用法
    在私聊中添加谜语（谜语仅能在特定群内使用）, 谜底可添加多个（近义词等），注意换行。
        .rd add [群号] [奖励]
        [谜面]
        [谜底]
        ...
    在指定群聊中查看谜语，谜语按照添加顺序显示。页数为可选参数。
        第一页
        .rd get
        第二页
        .rd get 2
    在指定群聊中答题，答对获得奖励，同时此谜语作者扣除相应点数，其后谜语被删除。
        .rd [谜语ID] [谜底]`
    },
    ag: {
        description: '猜动漫',
        detail: `描述
    发送一张模糊后的图片，并提供若干提示，进行猜动漫游戏。
    答案匹配时忽略错别字(需要同音)
    可以在 http://39.105.144.93 提交题目。
    奖励由难度决定，初始最多 30 点， 最少 10 点，每查看一条提示，减少 4 点奖励， 最少 5 点，当猜对时，减少 1 点体力。
用法
    开始新的游戏 / 查看提示
        .ag
    当提示显示完毕，跳过此题（无奖励）
        .ag next
    重新发图
        .ag img
    答题
        .ag [答案]`
    },
    tran: {
        description: '翻译缩写',
        detail: `描述
    将网络用语缩写翻译为全称。
用法
    翻译
        .tran [文本]
    提交翻译
        .tran put [缩写] [翻译]`
    
    }
}

const index = `CNTBOT 帮助
任意命令均可使用 .help [命令] 查看更详细的帮助。
`

export default {
    helps,
    index
}