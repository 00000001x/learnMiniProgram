// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0,
    mytitles:['上衣','裤子','鞋子'],
    content:''
  },
  handleIncrement1(event){
    console.log('+++++++++++++++++++++++++++++')
    this.setData({
      counter:this.data.counter+1
    }),
    console.log('name：'+event.detail.name)
    console.log('age:'+event.detail.age)
  },
  handleClick(event){
    console.log(event.detail.index)
    console.log(event.detail.title)
    this.setData({
      content:event.detail.title
    })
  },
  handleInrementCpn(event){
    //最后目的修改my-select中的counter
    //1.获取组件对象 this.selectComponent('class/id') 一般绑定id  id唯一
    const my_sel = this.selectComponent('#my-select')
    console.log(my_sel)
    //2.通过setData修改组件内数据（一般不推荐）
    // my_sel.setData({
    //   counter:my_sel.data.counter+ 2
    // })
    //3.通过组件内部方法去修改
    my_sel.increamCounter(5)
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
