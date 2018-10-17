// components/classic/movie/index.js
import { classicBeh } from '../classic-beh.js'

Component({
  behaviors: [classicBeh],
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    tagSrc: './images/movie@tag.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function (e) {
      console.log(e);

    }
  }
})
