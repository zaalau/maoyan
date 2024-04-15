// pages/activity/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    whosbeenchoosed:'fabuhui',
    fabuhuiData:[
      {
        type: 'right',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuibg1.webp?sign=aa1e54ed6e953f0562d88a1c6d8ffaed&t=1701765241',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuibig1.webp?sign=485d9362692a0ab62d2861785123e25f&t=1701765438',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuifir2-1.webp?sign=c08fe683b293f484965118e4ff274cfd&t=1701765534",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec1-1.webp?sign=ae713e3248f3762afbc8e35ee87b13bd&t=1701765800',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec2-1.webp?sign=5716f8c44f4a0fad003e97ecfc412909&t=1701766077',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec3-1.webp?sign=4bcef41e2b551aacf2670e2ca968b051&t=1701766154',
      },
      {
        type: 'left',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuibg2.webp?sign=93b61ff1baa00cddd1812e64e7fb6641&t=1701766736',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuibig2.webp?sign=62a88c773c7e0b7ceb71022a814bff00&t=1701766761',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuifir2-2.webp?sign=44bbd1281342e1df814939f2b61d68f0&t=1701766771",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec1-2.webp?sign=2504ed7765d997a542d99987c4946762&t=1701766783',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec2-2.webp?sign=93ef8d33a0eb273df73c648e24a10333&t=1701766795',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec3-2.webp?sign=bc8a5ed88cbeaeb435182eafe150b545&t=1701766805',
      },
      {
        type: 'right',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuibg3.webp?sign=3b7239d975029cf615ee67dde1673345&t=1701768489',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuibig3.webp?sign=0a0b24157d480a5dbcf0fe46f2451121&t=1701768496',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuifir2-3.webp?sign=8ee6a58acbe4996d26ebc4acb21458ad&t=1701768503",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec1-3.webp?sign=b6c12659c3a8a1e110427c39af2881c7&t=1701768510',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec2-3.webp?sign=3e0e70bd1621e1582417be14abbe4700&t=1701768645',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec3-3.webp?sign=7b4d7fe38e0d527978f77277ff8ec7ad&t=1701768652',
      },
      {
        type: 'left',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuibg4.webp?sign=161e6d3ac6fe212a4ac8fb92a5568195&t=1701788936',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuibig4.webp?sign=c922f8f9afa6fa981d0b10519e8ddc75&t=1701789170',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuifir2-4.webp?sign=1d640ca2d415b55254c45bf2b64a937f&t=1701789193",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec1-4.webp?sign=e86570f823fc5e66b74d991230b5900e&t=1701789205',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec2-4.webp?sign=c158481712508ad8e614a8f086b88a44&t=1701789212',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec3-4.webp?sign=4fee26c569d05fe8d64440f5f6e5561f&t=1701789220',
      },
    ],
    kaiyeData:[
      {
        type: 'right',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyebg1.webp?sign=f71c470ded8415d8891f10ae4c8cd7d3&t=1701790137',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyebig1.webp?sign=fd67389c97d4bc7ddd7140c4567abfea&t=1701790147',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyefir2-1.webp?sign=759e99b34879583d5afbe1964376b00a&t=1701790155",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyesec1-1.webp?sign=93359c0fcd090611f5794c30dbb1b644&t=1701790162',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyesec2-1.webp?sign=e7843fa6846fd18c9741cc64b41cb8e4&t=1701790168',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyesec3-1.webp?sign=03021496fbda2f1e9aa5671ac2a40789&t=1701790174',
      },
      {
        type: 'left',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyebg2.webp?sign=d1a2e3df331f132ad832cb138f87931e&t=1701790475',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyebig2.webp?sign=68f7e48f3d8a53048ff877f0ea1c2f27&t=1701790485',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyefir2-2.webp?sign=8e8010695a04fa1a6441f49af8ec58be&t=1701790492",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyesec1-2.webp?sign=a9d641f167644bba0860131b36be1c4a&t=1701790498',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyesec2-2.webp?sign=b5ad137a7ed02aa0f538e498e225741b&t=1701790505',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyesec3-2.webp?sign=41c8ef8e6b53d3c2f2243d6d65845474&t=1701790511',
      },
      {
        type: 'right',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyebg3.webp?sign=ca3e62a02738b14e447ce08cb0524411&t=1701790825',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyebig3.webp?sign=070186006c555a7772aa3feed305cb72&t=1701790837',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyefir2-3.webp?sign=c1fa47c8446482a007c44ce9c1f10917&t=1701790844",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyesec1-3.webp?sign=baebff891b2c2df4324932286418977b&t=1701790852',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyesec2-3.webp?sign=6190ab13506955105e631250862301b0&t=1701790861',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyesec3-3.webp?sign=e3dbb7581878db6b9534724c20a14883&t=1701790869',
      },
      {
        type: 'left',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/yybg.jpg?sign=ce2d0d2359e70ff7d4633585ffab8332&t=1711959530',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/yybp.webp?sign=35913954e788893c166ce554986b575b&t=1711958525',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/yyfir2.webp?sign=3886f1ec2b72b7ddd1e40587bc391c76&t=1711958515",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/yysec1.webp?sign=b760778718f3fdeee9e9003cf7f4fd99&t=1711958534',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/yysec2.webp?sign=8cf0fad4237990c5396b407aa579907d&t=1711958542',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/yysec3.webp?sign=514f4db216df4b347ccb5307d5307c59&t=1711958551',
      },
      
      
      
    ],
    wanhuiData:[
      {
        type: 'right',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuibg1.webp?sign=a1a7a7bdea4cd64921607d00a068087d&t=1701791154',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuibig1.webp?sign=5a2d3f0e2acc483bb2c727d1fd60c9d6&t=1701791167',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuifir2-1.webp?sign=2aa0afb6bdf498bac2bb692bb3f3d8b3&t=1701791174",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuisec1-1.webp?sign=3ee96aa4f45e8cdff029b4baa122e01e&t=1701791181',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuisec2-1.webp?sign=c2ffbda9ac914928249b32d29a17f07a&t=1701791186',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuisec3-1.webp?sign=0ab9fc24d2a8b519af1e3c8c545559ae&t=1701791192',
      },
      {
        type: 'left',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuibg2.webp?sign=b5644fd98f986741a7b017f037c8fd24&t=1701791304',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuibig2.webp?sign=67e15cf0d55b547472ef37833fcf4bf0&t=1701791315',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuifir2-2.webp?sign=ff3c4d8f580932b4052b155a2a1845ad&t=1701791323",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuisec1-2.webp?sign=9db45ed1e737083f35f8cda6e48718b1&t=1701791335',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuisec2-2.webp?sign=3ce5c75a21723062924f7b3d0c99f293&t=1701791342',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuisec3-2.webp?sign=85ffd840fe27ce23beca31e2a0cdce01&t=1701791349',
      },
      {
        type: 'right',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuibg3.webp?sign=895103ebdab789ef5d65184bf4e1ce46&t=1701791513',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuibig3.webp?sign=f8b3f1e659414c3cf71ae368f60f4d06&t=1701791525',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuifir2-3.webp?sign=bed79b3618ddf05309cac5aa531efc54&t=1701791532",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuisec1-3.webp?sign=0424d8c94427fd80ddb47a04bd4717bf&t=1701791540',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuisec2-3.webp?sign=6da70fd169a6b5fe9bcfce914011ce6d&t=1701791548',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuisec3-3.webp?sign=cf183e09c52984c18122fd7b0388f27a&t=1701791554',
      },
      {
        type: 'left',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuibg4.webp?sign=a688ad6fe61cda1e4a5fef4692fa7c48&t=1701791825',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuibig4.webp?sign=acf284e9e40af798e62d15257681bf68&t=1701791835',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuifir2-4.webp?sign=e8a45b91983b1ce2b0d7cdd2ef93a06e&t=1701791842",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuisec1-4.webp?sign=4d1a50a6a8faace39d73959b41cd16ef&t=1701791848',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuisec2-4.webp?sign=76f3a1b354c6ecf5f7b567ed69b9efb0&t=1701791854',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wanhuisec3-4.webp?sign=e02bf0de8268642240ee5630e31875e0&t=1701791860',
      },
      {
        type: 'right',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/wczdbg2.jpg?sign=e4d9fe5fd0cbb70e44bee131009963a6&t=1711959584',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/wczdbp.webp?sign=abd3b5902ef9770b7f097df35cde7ff8&t=1711958219',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/wczdfir2.webp?sign=a7827b4bf39a020da64932362ce8e60b&t=1711958246",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/wczdsec1.webp?sign=88b2a32dd201cc88f929d1c36673cfa9&t=1711958256',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/wczdsec2.webp?sign=de8ea422dca92cf289fbba082f4cbab6&t=1711958264',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/wczdsec3.webp?sign=b0a384aa2bd79d0509a858ca28632456&t=1711958272',
      },
      {
        type: 'left',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/nvqinianhuibc.jpg?sign=2e0a3983b19af9eaa490b88611403681&t=1711957792',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/nqbp.webp?sign=5309e5abf9ff7b895c21fafa476720d4&t=1711957953',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/nqfir2.webp?sign=662093681f9f33242eb6681e4e58f21e&t=1711957967",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/nqsec1.webp?sign=8ef8b6a95ed912d46840115f37c5e18c&t=1711957980',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/nqsec2.webp?sign=d9fb6c52ccec14d4588d24983706dfc7&t=1711957987',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/nqsec3.webp?sign=e1135e6c1cd5f634fb503466a66eb609&t=1711957996',
      },
    ],
    yanlianData:[
      {
        type: 'right',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanlianbg1.webp?sign=02ae6a5296414b1dd1d0eb3ccd294797&t=1701793054',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanlianbig1.webp?sign=30d41a05e1368d7d18e4bd07b278ded5&t=1701793061',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanlianfir2-1.webp?sign=571403cdfe534c22b272f8b5e7a22139&t=1701793146",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanliansec1-1.webp?sign=88829741731b2b85036ebd56579e47e5&t=1701793067',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanliansec2-1.webp?sign=3507f73cf67bc884f3c27f6780f4ead4&t=1701793073',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanliansec3-1.webp?sign=9c48748b000eff4003ed544bdf9e11fe&t=1701793078',
      },
      {
        type: 'left',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanlianbg2.webp?sign=80dd360ec624d406fdcd5a1dfd41d5f6&t=1701793309',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanlianbig2.webp?sign=a423be2f1c26ce305422eb5172d53430&t=1701793318',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanlianfie2-2.webp?sign=c248d4080d3ff5a80db44b7ff4a25963&t=1701793326",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanliansec1-2.webp?sign=23fdd65a9c0c1bf7d73d368859aae9d1&t=1701793333',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanliansec2-2.webp?sign=520476210282e8d03ee27f3403c3ed7c&t=1701793340',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanliansec3-2.webp?sign=ae3f39591acfedd1fc8f430eea93146e&t=1701793346',
      },
      {
        type: 'right',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanlianbg3.webp?sign=ef81ffb0a066f22a2119c6b770e2dd91&t=1701793482',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanlianbig3.webp?sign=846debca3d4d0c2aea1b737c3e2b2ffc&t=1701793491',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanlianfir2-3.webp?sign=60834d4d77aa0a2b61cbc2c84c22aff2&t=1701793500",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanliansec1-3.webp?sign=36921467c5226ae73dac9c596567583d&t=1701793506',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanliansec2-3.webp?sign=52abbfafee8a73741f40a43a81fe4f26&t=1701793512',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanliansec3-3.webp?sign=30bf58a4e37ec77c1692eedf6c0a6c4a&t=1701793518',
      },
      {
        type: 'left',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanlianbg4.webp?sign=02aba9bb4c50891b831875b56f344cf3&t=1701793632',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanlianbig4.webp?sign=cf2e80c3dd0aae14378cc96fbcff08ee&t=1701793642',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanlianfir2-4.webp?sign=28c0718d4b0d67b410cd200218815817&t=1701793653",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanliansec1-4.webp?sign=fa5f55316a2df55134fa582fefbd4d23&t=1701793659',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanliansec2-4.webp?sign=58c1e03354e1df04db6488c348dca701&t=1701793666',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yanliansec3-4.webp?sign=68aa6ef4f3171b1087a9890dc3e568b7&t=1701793673',
      },
      
    ]
  },
  preview(e) {
    const { picSrc } = e.currentTarget.dataset
    wx.previewImage({
      current: picSrc,
      urls: [`${picSrc}`],
    })
  },
  switchPage(e) {
    const { pagename } = e.currentTarget.dataset
    this.setData({
      whosbeenchoosed: pagename
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showLoading({
      title: '加载中',
    })
    wx.getSystemInfo({
      success: res => {
        this.setData({
          activityHeight: res.windowHeight
        })
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.hideLoading()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})