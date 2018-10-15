// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
     type:Boolean 
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    like:true,
    count:99,
    likeSrc:'./images/like.png',
    dislikeSrc:'./images/like@dis.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function (e) {
      let like=this.properties.like
      let count=this.properties.count
      count = like ? count - 1 : count+1
      like = !like
      this.setData({
        like,count
      })
      let behavior=like?'like':'cancel'
      this.triggerEvent('like',{
        behavior
      },{})
    }
  }
})
