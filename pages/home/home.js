// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '你好啊',
    }),
    wx.showToast({
      title: '加载中',
      duration: 3000,
      icon:'loading',
      mask:true,
      success:function(){

      },
      fail:function(){

      },
      complete:function(){

      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title:'确认提交吗?',
      content:'lalala',
      success:function(res){
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      },
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载中',
      mask:true
    }),
    setTimeout(()=>{
      //必须手动调用才会消失
      wx.hideLoading({
        complete: (res) => {
        }
      })
    },2000)
  },
  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      success:function(res){
        console.log(res.tapIndex)
      }
    })
  },
   /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return{
      title:'你好啊',
      path:'/pages/about/about',//点击进去后的路径，默认是首页
      imageUrl:'' //默认是当页面的截图,可自定义图片 本地、网络都可以
    }
  }
})