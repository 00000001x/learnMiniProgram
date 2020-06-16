// components/tab-test/tab-test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:['1','2','3']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击事件
    onClickItem(event){
      //1.取出index.title
      const currentIndex = event.currentTarget.dataset.index;
      const currentTitle = event.currentTarget.dataset.title;
      //2.设置currentIndex
      this.setData({
        currentIndex:currentIndex
      });
      //3.向主页面发送传递事件及内容
      this.triggerEvent('clickItem',{index:currentIndex,title:currentTitle},{})
    }
  }
})
