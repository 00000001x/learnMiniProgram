App({
  //生命周期函数，后台存活2个小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("初始化，执行 onLaunch")
    //异步执行
    wx.getUserInfo({
      success:function(result){
        console.log(result)
      }
    })
    setTimeout(function(){
      const err = new Error()
      throw err 
    },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log("界面显示，执行 onshow")
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("界面隐藏时，执行 onHide")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("小程序中发生错误时，执行 onError")
  }
})