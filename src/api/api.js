/* 接口管理 */

const request = require("../utils/request");

/* 通过module.exports方式提供给外部调用 */
const api = {
  getData: () => request.post("Sys_User/IsConnection"),
  login: (params) => {
    return request.post("Login/MobileCheckLogin", params);
  },
  //http://172.16.122.152:1023/Login/MobileCustomerGetGridJson
  getList: (params) => {
    return request.get("Login/MobileCustomerGetGridJson", params);
  },
};

export default api;
/*
使用方法 ：

1.在要使用的js文件导入
const API = require('../../../../http/APICongfig.js');
const API = require('@http/APIConfig.js');

2. 调用
API.getPageArrDic(params).then(res => {

}).catch(error => {

});

 */
