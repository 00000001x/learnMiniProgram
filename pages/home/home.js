// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    titles:['上衣','裤子','鞋子']
  },
  handleClick(){
    console.log('-------点击了')
  },
  handleTouchStart(){
    console.log('-------handleTouchStart')
  },
  handleTouchEnd(){
    console.log('-------handleTouchEnd')
  },
  handleMove(){
    console.log('-------handleMove')
  },
  handleLongpress(){
    console.log('-------handleLongpress')
  },
  handletap(){
    console.log('-------handletap')
  },
  handleObject(event){
    console.log(event)
  },
  handleEventEnd(event){
    console.log(event)
  },
  handleOuter(event){
    console.log('-----outer-------',event)
  },
  handleInner(event){
    console.log('-----inner-------',event)
  },
  handleEventParam(event){
    const dataset = event.currentTarget.dataset;
    const index = dataset.index;
    const title = dataset.currentitem;
    console.log(index+'--------------'+title)
  },

  //事件冒泡和事件捕获
  handleCaptureView1(event){
    console.log('-----事件捕获view1')
  },
  handleBindView1(event){
    console.log('-----事件冒泡view1')
  },
  handleCaptureView2(event){
    console.log('-----事件捕获view2')
  },
  handleBindView2(event){
    console.log('-----事件冒泡view2')
  },
  handleCaptureView3(event){
    console.log('-----事件捕获view3')
  },
  handleBindView3(event){
    console.log('-----事件冒泡view3')
  }
})