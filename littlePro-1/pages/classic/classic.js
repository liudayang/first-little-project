// pages/classic/classic.js
import { ClassicModel } from "../../models/classic"
import { LikeModel } from "../../models/like"
let classicModel = new ClassicModel()
let likeModel = new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classicData: null,
    latest: true,
    first: false,
    like_status: false,
    like_count: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let res=
    classicModel.getLatest((res) => {
      console.log(res);
      this.setData({
        classicData: res,
        like_status: res.like_status,
        like_count: res.fav_nums
      })
    })
  },
  onLike: function (e) {
    let behavior = e.detail.behavior
    likeModel.like(behavior, this.data.classicData.id, this.data.classicData.type, (res) => {
      console.log(res);
    })
  },
  _updateClassic: function (nextOrPrevious) {
    classicModel.getClassic(this.data.classicData.index, nextOrPrevious, (res) => {
      this._getLikeStatus(res.id,res.type)      
      this.setData({
        classicData: res,
        first: classicModel.isFirst(res.index),
        latest: classicModel.isLatest(res.index),
      })
    })
  },
  _getLikeStatus: function (artID, category) {
    likeModel.getClassicLikeStatus(artID, category,
      (res) => {        
        this.setData({
          like_count: res.fav_nums,
          like_status: res.like_status
        })
      })
  },
  onPrevious: function () {
    this._updateClassic('previous')
  },
  onNext: function () {
    this._updateClassic('next')

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})