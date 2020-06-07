// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'sky',
    age:18,
    students:[
      {"id":"1",name:"x",age:"16"},
      {"id":"2",name:"y",age:"17"},
      {'id':'3',name:"f",age:"18"}
    ],
    counter:0
  },
  addCount(){
    //1.错误的做法，界面不会刷新
    //this.data.counter+=1;
    //正确的做法：this.setData()
    this.setData({
      counter:this.data.counter+1
    })
  },
  subCount(){
    this.setData({
      counter:this.data.counter-1
    })
  }
  //编程范式
  //1.命令式编程：原生操作Dom
  //2.声明式编程：Vue/Angula/React
})