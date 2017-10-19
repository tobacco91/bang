//  const app = getApp();
const imgFigure = '../image/img_figure.png';
const head = '../image/head.png';
Page({
  data: {
    title: '重邮帮',
    headerNav: ['寻物启事', '招领启示'],
    headerDtail: ['全部', '一卡通', '钱包证件', '电子产品', '书包', '钥匙', '雨伞', '衣物', '其他'],
    main: [],
    imgFigure: `${imgFigure}`
  },
  setNav (e) {
    console.log(this.data.imgName, e.target.dataset.index);
    console.log(this.data.touxiang);
  },
  onLoad () {
    this.setData({
      main: [
        {
          img: `${head}`,
          title: '一卡通',
          date: '2016-10-01',
          name: '好大一只胖砸',
          content: '19)'
        },
        {
          img: `${head}`,
          title: '一卡通',
          date: '2016-10-01',
          name: '好大一只胖砸',
          content: '你是的救兵咩你是的救兵咩你是的救兵咩你是的救兵咩你是的救兵咩你是的救兵咩你是的救兵咩你是的救兵咩你是的救兵咩你是的救兵咩你是的救兵咩'
        },
        {
          img: `${head}`,
          title: '一卡通',
          date: '2016-10-01',
          name: '好大一只胖砸',
          content: '你是猴子请来的救兵咩9)'
        },
        {
          img: `${head}`,
          title: '一卡通',
          date: '2016-10-01',
          name: '好大一只胖砸',
          content: '/.6.16.1@b3427:19)'
        }
      ]
    });
  },
  onReady () {
    // TODO: onReady
  },
  onShow () {
    //
  },
  onHide () {
    // TODO: onHide
  },
  onUnload () {
    // TODO: onUnload
  }
});
