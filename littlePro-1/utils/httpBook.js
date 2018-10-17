import { config } from '../config.js';
const tips = {
  0: '出现了一个错误',
  10005: 'appkey无效',
  30000: '期刊不存在'
}
class HTTP {

  request({ url, data = {}, method = 'get'}) {
    return new Promise((reslove, reject) => {
      this._request(url, reslove, reject, data = {}, method = 'get')
    })
  }

  _request(url, reslove, reject, data = {}, method = 'get') {
    wx.request({
      url: config.api_base_url + url,
      method: method,
      data: data,
      header: { appkey: config.appkey },
      success: (res) => {
        let code = String(res.statusCode);
        if (code.startsWith('2')) {
          reslove(res.data)
        } else {
          this.show_error(code)
          reject(res.data)
        }
      },
      fail: (err) => {
        this.show_error(1)
        reject(res.data)
      }
    })
  }
  show_error(ERR_CODE) {
    if (!ERR_CODE) {
      ERR_CODE = 1;
    }
    const tip = tips[ERR_CODE]
    wx.showToast({
      title: tip ? tip : tips[0],
      icon: 'none',
      duration: 2000,
    })
  }
}
// let a=1;
// export {a}

export { HTTP }