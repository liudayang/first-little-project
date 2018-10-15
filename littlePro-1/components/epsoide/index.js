// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer: function (newVal, oldVal) {
        let val=newVal<10?'0'+newVal:newVal;
        this.setData({
          _index:val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 0,
    month: 0,
    _index:'',
    months:['壹月','贰月','叁月','肆月','伍月','陆月','柒月','捌月','玖月','拾月','拾壹月','腊月']
  },
  attached() {
   let date=new Date();
   let year=date.getFullYear();
   let month=date.getMonth();
   
    this.setData({
      year:year,
      month:this.data.months[month]
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})