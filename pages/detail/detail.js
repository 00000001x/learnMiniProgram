// pages/detail/detail.js
Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.name);
    console.log(options.age);
    console.log(options.sex);
  },
  onUnload:function(){
      console.log('页面退出');
      //1.获取首页页面对象
      //getCurrentPages获取当前栈的所有页面
      const pages = getCurrentPages();
      const home = pages[pages.length-2]

      //2.调用页面对象的setData
      home.setData({
        'title':'呵呵呵'
      })
  },
  toHome(){
    wx.navigateBack({
      delta:1
    })
  }
})