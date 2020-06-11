// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleInput(event){
    console.log('----input事件监听:'+event)
  },
  handleFocus(event){
    console.log('----focus事件监听:'+event)
  },
  handleBlur(event){
    console.log('----blur事件监听:'+event)
  }
})