// pages/home/home.js
//注册页面
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('123')
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      //方式1：success(res){}
      //方式2：success:function(res){}
      //方式3
      //箭头函数中的this一层层向上找
      success:(res)=>{
        console.log(res)
        //const data = res.data.data.list;
        const data = [{title:'x'},
                {title:'y'},
                {title:'z'}];
        this.setData({
          list:data
        })
      }
    })
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

  //-------------------1.监听页面加载，生命周期
  //-------------------2.初始化数据
  //-------------------3.监听wxml中一些相关的事件，如点击事件
  //-------------------4.监听其他事件，如页面滚动、页面滚动到底部
})
