// pages/home/home.js
//导入封装的request方法  (import相对路径)
import request from '../../serivce/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //发送网络请求
      //1.使用原生的请求方式
        this.get_data_origin()
      //2.使用封装的request工具方式
      //Promise最大的好处就是防止回调地狱
       request({
        method:'POST',
        //参数
        data:{
          name:'sky',
          age:'16'
        },
       }).then(res=>{
        console.log(res)
       }).catch(err=>{
         console.log(err)
       })
  },

  get_data_origin:function(){
      //1.1 发送最简单的get请求
      wx.request({
        url: 'http://123.207.32.32:8000/recommend',
        success:function(res){
          console.log(res)
      }
      })
      // 1.2 发送get请求传递参数
      wx.request({
        url: 'http://123.207.32.32:8000/recommend',
        data:{
          type:'aa',
          page:1
        },
        success:function(res){
          console.log(res)
      }
      })
      //1.3 发送post请求并携带参数
      wx.request({
        url: 'http://httpbin.org/post',
        method:'POST',
        //参数
        data:{
          name:'sky',
          age:'16'
        },
        success:function(res){
            console.log(res)
        },
        fail:function(err){
          console.log(err)
        }
      })
  }
})