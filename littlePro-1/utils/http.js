import { config} from '../config.js';
const tips={
  10005:'appkey无效',
  30000:'期刊不存在'
}
class HTTP {
  request(params) {
    params.method = params.method === undefined ? 'get' : params.method;
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      header: { appkey: config.appkey },
      success: (res) => {
        let code = String(res.statusCode);
        // code=undefined
        if(code.startsWith('2')){
          params.success && params.success(res.data)
        }else{
          this.show_error(code)
        }
      },
      fail: (err) => {        
        this.show_error(1)
      }
    })
  }
  show_error(ERR_CODE){
    if (!ERR_CODE){
      wx.showToast({
        title: 'GG-嘿嘿-GG',
        icon: 'none',
        duration: 2000,
      })
    }else{
      wx.showToast({
        title: '哈哈-GG',
        icon: 'none',
        duration: 2000,
      })
    }
  }
}
// let a=1;
// export {a}

export { HTTP}