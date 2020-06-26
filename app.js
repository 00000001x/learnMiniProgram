const TOKEN = 'token'
App({
  //对象：小程序关闭就销毁了
  globalData:{
    token:''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //1.先从缓存中取出token，
    const token  = wx.getStorageSync(TOKEN);
    //2.判断token是否有值
    if(token && token.length!== 0){//token已经存在，验证token是否过期
      //验证token是否过期
      this.checkToken(token);
    }else{
      this.login()
    }
  },
  login(){
    //登录操作
    wx.login({
      //code只有5分钟的有效期
      success:(res)=>{
        //1.获取code
        const code = res.code
        //2.将code发送给服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method:'POST',
          data:{
            code
          },
          success:(res)=>{
              //1.取出token
              const token= res.data.token;
              //2.将token保存在globalData中
              this.globalData.token = token;
              //3.进行本地存储
              wx.setStorageSync(TOKEN, token)
          }

        })
      }
    })
  },
  checkToken(token){
    wx.request({
      url: 'http:123.207.32.32:3000/auth',
      method:'POST',
      header:{
        token
      },
      success:(res)=>{
        if(!res.data.errCode){
          this.globalData.token = token;
        }else{
          this.login();
        }
        console.log(res)
      },
      fail:(res)=>{
        console.log(res);
      }
    })
  }
})
