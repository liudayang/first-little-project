// components/classic/movie/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content:{
      type:String
    },
    bookStr: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tagSrc:'./images/movie@tag.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function (e) {
      console.log(e);
      
    }
  }
})
