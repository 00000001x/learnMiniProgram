// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath:'',
  },
  handleChooseImg(){
    console.log('------监听事件')
    //系统API,让用户从相册中选择照片，或拍照
    wx.chooseImage({
      success:(res) =>{
        console.log(res)
        //1.取出路径
        const path = res.tempFilePaths[0]
        //2.给imagePath赋值
        this.setData({
          imgPath:path
        })
      }

    })
  },
  imgIsFinish(){
    console.log('------图片加载完成')
  },
  previewImg(e){
    const currentUrl = e.target.dataset.src  //获取当前点击的 图片 url
    console.log(currentUrl)
    wx.previewImage({
      current:currentUrl,// 当前显示图片的http链接
      urls: [currentUrl] // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})