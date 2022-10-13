/* 接口管理 */

const request = require("../utils/request");

/* 通过module.exports方式提供给外部调用 */
const api = {
  getData: (params) => request.post("Sys_User/IsConnection", params),
  /*----------------------------------- 我的 -----------------------------------*/
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
