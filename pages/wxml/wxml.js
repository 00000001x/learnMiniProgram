// pages/wxml/wxml.js
Page({
  data: {
    message:'hello',
    firstName:'xin',
    secondName:'xiao',
    age:17,
    nowTime: new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    score:98,
    movies:['大话西游','星际穿越'],
    nums:[[11,12,13],[21,22,23],[31,32,33]],
    letters:['xx','xy','yy']
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000);
  },
  changeColor(){
    this.setData({
      isActive:!this.data.isActive
    })
  },
  handleShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  }
})