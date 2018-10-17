import { HTTP } from "../utils/http.js"

class ClassicModel extends HTTP {
  getLatest(callBack) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        callBack(res)
        this._setLatestIndex(res.index)
        wx.setStorageSync(this._getKey(res.index), res)
      }
    })
  }

  getClassic(index, nextOrPrevious, Callback) {
    let key = nextOrPrevious === 'next' ? this._getKey(index + 1) : this._getKey(index - 1);
    console.log(key);
    console.log(typeof key);
    
    let classic = wx.getStorageSync(key)
    if (!classic) {
      this.request({
        url: 'classic/' + index + '/' + nextOrPrevious,
        success: (res) => {
          Callback(res)
          wx.setStorageSync(this._getKey(res.index),res)
        }
      })
    } else {
      Callback(classic)
    }
  }

  isFirst(index) {
    return index == 1 ? true : false
  }

  isLatest(index) {
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true : false
  }

  _setLatestIndex(index) {
    wx.setStorageSync('latest', index)
  }

  _getLatestIndex() {
    const index = wx.getStorageSync('latest')
    return index
  }
  _getKey(index) {
    return 'classic-' + index
  }
}
export { ClassicModel }